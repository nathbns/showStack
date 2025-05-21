import { NextResponse } from "next/server";
// import { headers } from "next/headers"; // Plus besoin si request.headers fonctionne
import { auth } from "@/lib/auth";
import { db } from "@/drizzle/db";
import { techStack, stackTechnologyItem } from "@/drizzle/db/schema";
import { eq, and, notInArray } from "drizzle-orm";

const STRIPE_CARD_ID = "internal_stripe_card"; // ID fixe pour la carte Stripe en tant que Tech

interface ApiTechItem {
  id: string; // Correspond à stackTechnologyItem.id si existant, ou tech.id du frontend pour les nouveaux
  name: string;
  color: string;
  technologyId: string; // L'ID de la technologie (ex: "typescript", "react")
  category: string;
  gridCols: number;
  gridRows: number;
  isProject?: boolean; // Pour les projets
  favicon?: string; // URL du favicon pour les projets
  url?: string; // URL du projet
  description?: string; // Description du projet
  order?: number; // Ordre pour le tri
  stars?: number;
  forks?: number;
}

// Obtenir la stack technologique de l'utilisateur connecté
export async function GET(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Vous devez être connecté" },
        { status: 401 }
      );
    }

    const userStacksResults = await db.query.techStack.findMany({
      where: eq(techStack.userId, session.user.id),
      with: {
        technologies: true,
      },
      orderBy: (techStack, { asc }) => [asc(techStack.createdAt)],
    });

    // Debug pour vérifier que showStripeCard est bien présent
    console.log(
      "[DEBUG GET API] Stacks before Stripe-Tech injection:",
      userStacksResults.map((stack) => ({
        id: stack.id,
        showStripeCard: stack.showStripeCard,
        stripeCardColSpan: stack.stripeCardColSpan,
        stripeCardRowSpan: stack.stripeCardRowSpan,
        stripeCardOrder: stack.stripeCardOrder,
        numTechs: stack.technologies.length,
      }))
    );

    const stacksWithPossibleStripeCard = userStacksResults.map((stack) => {
      let technologiesWithStripe = [...stack.technologies];
      if (stack.showStripeCard) {
        const stripeTechItem: ApiTechItem = {
          id: STRIPE_CARD_ID, // Utiliser l'ID interne défini
          name: "Stripe MRR",
          color: "#635BFF", // Couleur Stripe
          technologyId: STRIPE_CARD_ID, // Peut être le même que l'id pour ce cas spécial
          category: "Services",
          gridCols: stack.stripeCardColSpan || 1,
          gridRows: stack.stripeCardRowSpan || 1,
          isProject: false, // Ce n'est pas un projet standard
          order:
            stack.stripeCardOrder === null ||
            stack.stripeCardOrder === undefined
              ? -1
              : stack.stripeCardOrder, // Mettre au début si pas d'ordre défini
          // Les autres champs (favicon, url, description, stars, forks) ne sont pas pertinents ici
        };
        technologiesWithStripe.push(stripeTechItem as any); // Cast as any pour simplifier, Tech et ApiTechItem sont proches
      }
      // Trier toutes les technologies (y compris Stripe si présente) par leur ordre
      technologiesWithStripe.sort(
        (a, b) => (a.order ?? Infinity) - (b.order ?? Infinity)
      );

      return {
        ...stack,
        technologies: technologiesWithStripe,
      };
    });

    console.log(
      "[DEBUG GET API] Stacks AFTER Stripe-Tech injection and sort:",
      stacksWithPossibleStripeCard.map((stack) => ({
        id: stack.id,
        showStripeCard: stack.showStripeCard,
        numTechs: stack.technologies.length,
        techs: stack.technologies.map((t) => ({
          id: t.id,
          name: t.name,
          order: t.order,
        })),
      }))
    );

    // Retourner toutes les stacks trouvées pour l'utilisateur
    return NextResponse.json(stacksWithPossibleStripeCard);
  } catch (error) {
    console.error("Erreur lors de la récupération des stacks:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des stacks" },
      { status: 500 }
    );
  }
}

// Enregistrer la stack technologique de l'utilisateur
export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Vous devez être connecté" },
        { status: 401 }
      );
    }

    const {
      id,
      name,
      technologies,
      showStripeCard,
      stripeCardColSpan,
      stripeCardRowSpan,
    } = (await request.json()) as {
      id?: number;
      name: string;
      technologies: ApiTechItem[];
      showStripeCard?: boolean; // Ce champ sera maintenant déduit de la présence de StripeTech
      stripeCardColSpan?: number; // Idem
      stripeCardRowSpan?: number; // Idem
    };

    // Nouveau: Extraire la carte Stripe des technologies si elle est présente
    let incomingTechnologies = [...technologies]; // Copie pour modification
    const stripeTechIndex = incomingTechnologies.findIndex(
      (tech) => tech.id === STRIPE_CARD_ID
    );
    let stackShowStripeCard = false;
    let stackStripeColSpan = 1;
    let stackStripeRowSpan = 1;
    let stackStripeOrder = 0; // Valeur par défaut si la carte n'est pas là ou n'a pas d'ordre

    if (stripeTechIndex > -1) {
      const stripeTech = incomingTechnologies[stripeTechIndex];
      stackShowStripeCard = true;
      stackStripeColSpan = stripeTech.gridCols || 1;
      stackStripeRowSpan = stripeTech.gridRows || 1;
      stackStripeOrder = stripeTech.order === undefined ? 0 : stripeTech.order; // Utiliser l'ordre de la carte Stripe
      // Retirer la carte Stripe du tableau car elle n'est pas un StackTechnologyItem
      incomingTechnologies.splice(stripeTechIndex, 1);
      console.log(
        "[DEBUG API POST] Stripe card DEDUCTED from tech list. Order:",
        stackStripeOrder
      );
    } else {
      // Si STRIPE_CARD_ID n'est pas dans les technologies, on s'assure que showStripeCard est false
      // Les anciennes valeurs de showStripeCard, stripeCardColSpan, etc. directes sont ignorées
      stackShowStripeCard = false;
      console.log(
        "[DEBUG API POST] Stripe card NOT in tech list. showStripeCard will be false."
      );
    }

    console.log(
      "[DEBUG API POST] Effective values for Stripe card: show?",
      stackShowStripeCard,
      "ColSpan:",
      stackStripeColSpan,
      "RowSpan:",
      stackStripeRowSpan,
      "Order:",
      stackStripeOrder
    );
    console.log(
      "[DEBUG API POST] Technologies to save to DB (StackTechnologyItem):",
      incomingTechnologies.map((t) => ({
        id: t.id,
        name: t.name,
        order: t.order,
      }))
    );

    let currentStack: typeof techStack.$inferSelect | undefined | null;

    const stackData: Partial<typeof techStack.$inferSelect> = {
      userId: session.user.id,
      updatedAt: new Date(),
      showStripeCard: stackShowStripeCard,
      stripeCardColSpan: stackStripeColSpan,
      stripeCardRowSpan: stackStripeRowSpan,
      stripeCardOrder: stackStripeOrder,
    };

    if (id) {
      // Mise à jour d'une stack existante
      await db.update(techStack).set(stackData).where(eq(techStack.id, id));
      currentStack = await db.query.techStack.findFirst({
        where: eq(techStack.id, id),
      });
    } else {
      // Aucun ID de stack fourni dans la requête.
      // On vérifie si l'utilisateur a déjà une stack.
      // Si oui, on la met à jour. Si non, on en crée une.
      let existingStackForUser = await db.query.techStack.findFirst({
        where: eq(techStack.userId, session.user.id),
      });

      if (existingStackForUser) {
        // L'utilisateur a déjà une stack, on la met à jour.
        // On utilise l'ID de sa stack existante.
        await db
          .update(techStack)
          .set(stackData) // stackData contient userId, name, updatedAt, et les props Stripe
          .where(eq(techStack.id, existingStackForUser.id));
        currentStack = await db.query.techStack.findFirst({
          where: eq(techStack.id, existingStackForUser.id),
        });
        console.log(
          `[DEBUG API POST - UPSERT] User ${session.user.id} already has stack (ID: ${existingStackForUser.id}). Updated it.`
        );
      } else {
        // L'utilisateur n'a pas de stack, on en crée une nouvelle.
        const newStacks = await db
          .insert(techStack)
          .values({
            ...(stackData as typeof techStack.$inferInsert), // Contient userId, name, updatedAt, props Stripe
            createdAt: new Date(), // Seule la création nécessite createdAt explicitement ici
          })
          .returning();
        currentStack = newStacks[0];
        console.log(
          `[DEBUG API POST - UPSERT] User ${session.user.id} has no stack. Created new one (ID: ${currentStack?.id}).`
        );
      }
    }

    if (!currentStack) {
      return NextResponse.json(
        { error: "Impossible de créer ou mettre à jour la stack" },
        { status: 500 }
      );
    }

    const finalItemDbIds: number[] = [];

    if (technologies && technologies.length > 0) {
      for (const tech of incomingTechnologies) {
        let shouldInsert = true;
        let existingItemId = NaN;

        if (tech.id) {
          const parsedId = parseInt(tech.id, 10);
          if (!isNaN(parsedId)) {
            existingItemId = parsedId;
            const found = await db.query.stackTechnologyItem.findFirst({
              where: eq(stackTechnologyItem.id, existingItemId),
            });
            if (found) {
              shouldInsert = false;
            }
          }
        }

        if (!shouldInsert && !isNaN(existingItemId)) {
          // C'est un élément existant, on le met à jour
          await db
            .update(stackTechnologyItem)
            .set({
              name: tech.name,
              color: tech.color,
              technologyId: tech.technologyId,
              category: tech.category || "Custom",
              gridCols: tech.gridCols || 1,
              gridRows: tech.gridRows || 1,
              isProject: tech.isProject || false,
              favicon: tech.favicon || null,
              url: tech.url || null,
              description: tech.description || null,
              order: tech.order !== undefined ? tech.order : 0,
              stars: tech.stars || 0,
              forks: tech.forks || 0,
            })
            .where(eq(stackTechnologyItem.id, existingItemId));
          finalItemDbIds.push(existingItemId);
        } else {
          // C'est un nouvel élément ou l'ID existant n'était pas valide/trouvé, on l'insère
          const newDbItems = await db
            .insert(stackTechnologyItem)
            .values({
              techStackId: currentStack!.id,
              technologyId: tech.technologyId,
              name: tech.name,
              color: tech.color,
              category: tech.category || "Custom",
              gridCols: tech.gridCols || 1,
              gridRows: tech.gridRows || 1,
              isProject: tech.isProject || false,
              favicon: tech.favicon || null,
              url: tech.url || null,
              description: tech.description || null,
              order: tech.order !== undefined ? tech.order : 0,
              stars: tech.stars || 0,
              forks: tech.forks || 0,
            })
            .returning({ insertedId: stackTechnologyItem.id });

          if (newDbItems && newDbItems[0] && newDbItems[0].insertedId) {
            finalItemDbIds.push(newDbItems[0].insertedId);
          } else {
            console.error(
              "Impossible d'insérer la nouvelle technologie ou d'obtenir son ID:",
              tech
            );
          }
        }
      }

      if (currentStack?.id) {
        if (finalItemDbIds.length > 0) {
          await db
            .delete(stackTechnologyItem)
            .where(
              and(
                eq(stackTechnologyItem.techStackId, currentStack.id),
                notInArray(stackTechnologyItem.id, finalItemDbIds)
              )
            );
        } else {
          await db
            .delete(stackTechnologyItem)
            .where(eq(stackTechnologyItem.techStackId, currentStack.id));
        }
      }
    } else {
      if (currentStack?.id) {
        await db
          .delete(stackTechnologyItem)
          .where(eq(stackTechnologyItem.techStackId, currentStack.id));
      }
    }

    const finalTechnologiesFromDb = await db.query.stackTechnologyItem.findMany(
      {
        where: eq(stackTechnologyItem.techStackId, currentStack.id),
        orderBy: (stackTechnologyItem, { asc }) => [
          asc(stackTechnologyItem.order),
        ], // Trier par ordre de la DB initialement
      }
    );

    let responseTechnologies: any[] = [...finalTechnologiesFromDb];

    // Réinjecter la carte Stripe si elle doit être affichée
    if (currentStack.showStripeCard) {
      const stripeTechItemForResponse = {
        id: STRIPE_CARD_ID,
        name: "Stripe MRR",
        color: "#635BFF",
        technologyId: STRIPE_CARD_ID,
        category: "Services",
        gridCols: currentStack.stripeCardColSpan || 1,
        gridRows: currentStack.stripeCardRowSpan || 1,
        isProject: false,
        order:
          currentStack.stripeCardOrder === null ||
          currentStack.stripeCardOrder === undefined
            ? 0
            : currentStack.stripeCardOrder,
        // Autres champs non pertinents pour la réponse ou déjà gérés
      };
      responseTechnologies.push(stripeTechItemForResponse);
    }

    // Trier la liste finale pour la réponse (y compris Stripe si présente)
    responseTechnologies.sort(
      (a, b) => (a.order ?? Infinity) - (b.order ?? Infinity)
    );

    console.log(
      "[DEBUG API POST] Returning stack with Stripe props and (re-injected) StripeTech:",
      currentStack.showStripeCard,
      "ColSpan:",
      currentStack.stripeCardColSpan,
      "RowSpan:",
      currentStack.stripeCardRowSpan,
      "Order:",
      currentStack.stripeCardOrder,
      "Techs in response:",
      responseTechnologies.map((t) => ({
        id: t.id,
        name: t.name,
        order: t.order,
      }))
    );

    return NextResponse.json({
      ...currentStack,
      technologies: responseTechnologies,
    });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de la stack:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement de la stack" },
      { status: 500 }
    );
  }
}

// Supprimer une technologie spécifique ou une stack entière
export async function DELETE(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Vous devez être connecté" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const itemId = searchParams.get("id");

    if (!itemId) {
      return NextResponse.json({ error: "ID manquant" }, { status: 400 });
    }

    const idAsNumber = parseInt(itemId, 10);
    if (isNaN(idAsNumber)) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }

    const isStack = searchParams.has("stackId");

    if (isStack) {
      const stack = await db.query.techStack.findFirst({
        where: (techStack) =>
          eq(techStack.id, idAsNumber) && eq(techStack.userId, session.user.id),
      });

      if (!stack) {
        return NextResponse.json(
          { error: "Stack non trouvée ou vous n'avez pas les droits" },
          { status: 404 }
        );
      }

      const deletedStacks = await db
        .delete(techStack)
        .where(eq(techStack.id, idAsNumber))
        .returning();

      if (deletedStacks.length === 0) {
        return NextResponse.json(
          { error: "Stack non trouvée ou déjà supprimée" },
          { status: 404 }
        );
      }

      return NextResponse.json({ message: "Stack supprimée avec succès" });
    } else {
      const item = await db.query.stackTechnologyItem.findFirst({
        where: eq(stackTechnologyItem.id, idAsNumber),
        with: {
          techStack: true,
        },
      });

      if (!item || item.techStack.userId !== session.user.id) {
        return NextResponse.json(
          { error: "Technologie non trouvée ou vous n'avez pas les droits" },
          { status: 404 }
        );
      }

      const deletedItems = await db
        .delete(stackTechnologyItem)
        .where(eq(stackTechnologyItem.id, idAsNumber))
        .returning();

      if (deletedItems.length === 0) {
        return NextResponse.json(
          { error: "Technologie non trouvée ou déjà supprimée" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        message: "Technologie supprimée avec succès",
      });
    }
  } catch (error) {
    console.error("Erreur lors de la suppression:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}
