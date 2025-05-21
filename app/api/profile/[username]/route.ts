import { NextResponse } from "next/server";
import { db } from "@/drizzle/db";
import {
  user,
  techStack,
  stackTechnologyItem,
  stripeConnection, // Modifié: utilise stripeConnection au lieu de account
} from "@/drizzle/db/schema";
import { eq, asc, and, isNotNull } from "drizzle-orm";
import { fetchMrrForUser } from "@/lib/stripe-mrr";

const STRIPE_CARD_ID = "internal_stripe_card"; // Assurez-vous que c'est le même ID qu'ailleurs

interface ApiTechItemForProfile {
  // Similaire à ApiTechItem mais pour ce contexte
  id: string;
  name: string;
  color: string;
  technologyId: string;
  category: string;
  gridCols: number;
  gridRows: number;
  isProject?: boolean;
  favicon?: string;
  url?: string;
  description?: string;
  order?: number;
  stars?: number;
  forks?: number;
  mrr?: number; // Ajout pour le MRR
  mrrCurrency?: string; // Ajout pour la devise du MRR
  isStripeCard?: boolean; // Ajouter ce champ pour faciliter le rendu conditionnel sur le front-end
  // Champs spécifiques à Stripe, si nécessaire pour l'affichage (normalement pas, car StripeCard s'en occupe)
  // isStripeCard?: boolean; // Peut être utile pour le frontend pour le rendu conditionnel si TechDisplayCard est utilisé
}

export async function GET(
  request: Request,
  { params }: { params: { username: string } } // Paramètres destructurés directement
) {
  const username = params.username; // Accès direct au paramètre

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    // 1. Récupérer les informations de l'utilisateur
    const userInfoFromDb = await db.query.user.findFirst({
      where: eq(user.username, username),
      columns: {
        id: true,
        name: true,
        email: true, // Optionnel: décidez si l'email doit être public
        image: true,
        description: true,
        createdAt: true,
        layoutConfig: true,
        shareCount: true,
      },
    });

    if (!userInfoFromDb) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 2. Vérifier la connexion Stripe pour cet utilisateur directement dans stripeConnection
    // Utiliser la même table que fetchMrrForUser pour assurer la cohérence
    const stripeConnectionInfo = await db.query.stripeConnection.findFirst({
      where: eq(stripeConnection.userId, userInfoFromDb.id),
      columns: {
        stripeUserId: true, // Vérifions vraiment que l'ID du compte Stripe existe
      },
    });

    const hasStripeConnection = !!stripeConnectionInfo?.stripeUserId;

    // Combiner les informations utilisateur avec le statut de connexion Stripe
    const userInfo = {
      ...userInfoFromDb,
      hasStripeConnection,
    };

    // 3. Récupérer les stacks technologiques de l'utilisateur
    const userStacksFromDb = await db.query.techStack.findMany({
      where: eq(techStack.userId, userInfoFromDb.id),
      with: {
        technologies: {
          columns: {
            id: true, // C'est l'ID de stackTechnologyItem
            name: true,
            color: true,
            technologyId: true,
            category: true,
            gridCols: true,
            gridRows: true,
            url: true,
            isProject: true,
            description: true,
            favicon: true,
            order: true,
          },
          orderBy: (stackTechnologyItem, { asc }) => [
            asc(stackTechnologyItem.order),
          ],
        },
      },
      orderBy: (techStack, { asc }) => [asc(techStack.createdAt)],
    });

    // Injecter la carte Stripe si nécessaire
    const userStacksWithPossibleStripeCard = await Promise.all(
      userStacksFromDb.map(async (stack) => {
        let technologiesFromStack: ApiTechItemForProfile[] = (
          stack.technologies as any[]
        ).map((tech) => ({
          ...tech,
          id: String(tech.id),
          gridCols: tech.gridCols || 1,
          gridRows: tech.gridRows || 1,
          isStripeCard: false, // Initialiser à false
        }));

        if (stack.showStripeCard) {
          let mrrData = { total: 0, currency: "USD" };
          if (hasStripeConnection) {
            const fetchedMrr = await fetchMrrForUser(userInfoFromDb.id);
            if (fetchedMrr) {
              mrrData.total = fetchedMrr.total;
              mrrData.currency = fetchedMrr.currency;
            }
          }

          const stripeTechItem: ApiTechItemForProfile = {
            id: STRIPE_CARD_ID,
            name: "Stripe MRR",
            color: "#635BFF",
            technologyId: STRIPE_CARD_ID,
            category: "Services",
            gridCols: stack.stripeCardColSpan || 1,
            gridRows: stack.stripeCardRowSpan || 1,
            isProject: false,
            order:
              stack.stripeCardOrder === null ||
              stack.stripeCardOrder === undefined
                ? -1
                : stack.stripeCardOrder,
            mrr: mrrData.total,
            mrrCurrency: mrrData.currency,
            isStripeCard: true, // Marquer comme carte Stripe
          };
          technologiesFromStack.push(stripeTechItem);
        }
        technologiesFromStack.sort(
          (a, b) => (a.order ?? Infinity) - (b.order ?? Infinity)
        );
        return {
          ...stack,
          technologies: technologiesFromStack,
        };
      })
    );

    // Enrichir les technologies avec les données GitHub si applicable
    const processedStacks = await Promise.all(
      userStacksWithPossibleStripeCard.map(async (stack) => {
        const processedTechnologies = await Promise.all(
          (stack.technologies || []).map(
            async (techItem: ApiTechItemForProfile) => {
              if (techItem.isStripeCard) {
                return techItem;
              }

              if (
                techItem.isProject &&
                techItem.url &&
                typeof techItem.url === "string" &&
                techItem.url.startsWith("https://github.com/")
              ) {
                try {
                  const match = techItem.url.match(
                    /github\.com\/([^/]+)\/([^/]+)/
                  );
                  if (match) {
                    const owner = match[1];
                    const repoName = match[2].replace(/\.git$/, "");

                    const githubRes = await fetch(
                      `https://api.github.com/repos/${owner}/${repoName}`,
                      {}
                    );

                    if (githubRes.ok) {
                      const githubData = await githubRes.json();
                      return {
                        ...techItem,
                        description:
                          githubData.description || techItem.description,
                        stars: githubData.stargazers_count,
                        forks: githubData.forks_count,
                      };
                    } else {
                      console.warn(
                        `Failed to fetch GitHub data for ${techItem.url}: ${
                          githubRes.status
                        } ${await githubRes.text()}`
                      );
                    }
                  }
                } catch (ghError) {
                  console.error(
                    `Error fetching GitHub data for ${techItem.url}:`,
                    ghError
                  );
                }
              }
              return {
                ...techItem,
                isProject: techItem.isProject || false,
                url: techItem.url || undefined,
                description: techItem.description || undefined,
                favicon: techItem.favicon || undefined,
                stars: techItem.stars || undefined,
                forks: techItem.forks || undefined,
              };
            }
          )
        );
        return { ...stack, technologies: processedTechnologies };
      })
    );

    return NextResponse.json({
      user: userInfo,
      stacks: processedStacks,
    });
  } catch (error) {
    console.error(`Error fetching profile data for user ${username}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch profile data" },
      { status: 500 }
    );
  }
}
