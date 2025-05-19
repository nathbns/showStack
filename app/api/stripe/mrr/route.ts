import { NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // Supposant que auth() retourne la session/utilisateur
import { db } from "@/drizzle/db";
import { stripeConnection } from "@/drizzle/db/schema";
import { eq } from "drizzle-orm";
import Stripe from "stripe";

// TODO: Implémenter une solution de chiffrement/déchiffrement sécurisée pour les tokens
async function getDecryptedAccessToken(
  encryptedToken: string
): Promise<string> {
  // Pour l'instant, retourne le token tel quel (NON SÉCURISÉ POUR LA PRODUCTION)
  console.warn(
    " avertissement de sécurité: le token d'accès Stripe n'est pas déchiffré."
  );
  return encryptedToken;
}

// Fonction simplifiée pour calculer le MRR à partir des abonnements
// Ceci est un exemple et pourrait nécessiter une logique plus complexe
// en fonction des types de produits, des remises, des taxes, etc.
function calculateMrrFromSubscriptions(subscriptions: Stripe.Subscription[]): {
  total: number;
  currency: string;
} {
  let totalMrr = 0;
  let currency: string | null = null;

  subscriptions.forEach((sub) => {
    if (sub.status === "active" || sub.status === "trialing") {
      sub.items.data.forEach((item: Stripe.SubscriptionItem) => {
        if (item.price && item.price.unit_amount && item.price.recurring) {
          // Assumons que le prix est par mois.
          // Pour d\'autres intervalles (année, semaine), il faudrait convertir.
          if (item.price.recurring.interval === "month") {
            totalMrr += item.price.unit_amount * (item.quantity || 1);
            if (!currency && item.price.currency) {
              currency = item.price.currency;
            }
          } else if (item.price.recurring.interval === "year") {
            totalMrr += (item.price.unit_amount / 12) * (item.quantity || 1);
            if (!currency && item.price.currency) {
              currency = item.price.currency;
            }
          }
          // Ajouter d\'autres logiques pour d\'autres intervales si nécessaire
        }
      });
    }
  });

  const finalCurrency = currency || "USD";
  return { total: Math.round(totalMrr), currency: finalCurrency.toUpperCase() };
}

// Changé en GET, plus besoin de request body
export async function GET(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
    const userId = session.user.id;

    const userStripeConnection = await db
      .select()
      .from(stripeConnection)
      .where(eq(stripeConnection.userId, userId))
      .limit(1);

    if (!userStripeConnection || userStripeConnection.length === 0) {
      return NextResponse.json(
        { error: "Connexion Stripe non trouvée pour cet utilisateur." },
        { status: 404 }
      );
    }

    const connection = userStripeConnection[0];
    if (!connection.accessToken || !connection.stripeUserId) {
      return NextResponse.json(
        { error: "Configuration de la connexion Stripe incomplète." },
        { status: 500 }
      );
    }

    // const accessToken = await getDecryptedAccessToken(connection.accessToken);
    // Utiliser la clé secrète de la plateforme pour initialiser Stripe
    // car l'accessToken du compte connecté ne permet pas de lister les subscriptions directement pour le compte connecté de cette manière.
    // La requête sera faite AU NOM du compte connecté via le paramètre stripeAccount.
    const platformStripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!platformStripeSecretKey) {
      console.error("Clé secrète Stripe de la plateforme non configurée.");
      return NextResponse.json(
        {
          error:
            "Configuration Stripe incomplète côté serveur (secret plateforme).",
        },
        { status: 500 }
      );
    }

    const stripe = new Stripe(platformStripeSecretKey!, {
      typescript: true,
    });

    const subscriptions = await stripe.subscriptions.list(
      {
        limit: 100,
        status: "all", // ou 'active'
      },
      {
        stripeAccount: connection.stripeUserId, // Important: effectue la requête pour le compte connecté
      }
    );

    const { total, currency } = calculateMrrFromSubscriptions(
      subscriptions.data
    );

    // Ne plus mettre à jour un stackTechnologyItem spécifique
    // Retourner directement le MRR total du compte
    return NextResponse.json({
      message: "MRR total du compte récupéré avec succès.",
      total: total,
      currency: currency,
    });
  } catch (error) {
    console.error("Erreur API MRR Stripe:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Une erreur interne est survenue.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
