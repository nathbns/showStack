import { db } from "@/drizzle/db";
import { stripeConnection } from "@/drizzle/db/schema";
import { eq } from "drizzle-orm";
import Stripe from "stripe";

// Fonction pour calculer le MRR à partir des abonnements Stripe
// (Cette fonction est identique à celle déjà utilisée)
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
          if (item.price.recurring.interval === "month") {
            totalMrr += item.price.unit_amount * (item.quantity || 1);
          } else if (item.price.recurring.interval === "year") {
            totalMrr += (item.price.unit_amount / 12) * (item.quantity || 1);
          }
          if (!currency && item.price.currency) {
            currency = item.price.currency;
          }
        }
      });
    }
  });
  const finalCurrency = currency || "USD"; // Monnaie par défaut si aucune n'est trouvée
  return { total: Math.round(totalMrr), currency: finalCurrency.toUpperCase() };
}

// Fonction exportée pour récupérer le MRR pour un utilisateur spécifique
export async function fetchMrrForUser(
  userId: string
): Promise<{ total: number; currency: string } | null> {
  try {
    // 1. Récupérer la connexion Stripe de l'utilisateur depuis la table stripeConnection
    const userStripeConn = await db.query.stripeConnection.findFirst({
      where: eq(stripeConnection.userId, userId),
      columns: {
        // accessToken: true, // L'accessToken du compte connecté n'est pas utilisé pour lister les abos de cette manière
        stripeUserId: true, // C'est l'ID du compte Stripe connecté (acct_...)
      },
    });

    if (!userStripeConn || !userStripeConn.stripeUserId) {
      console.warn(
        `[fetchMrrForUser] Connexion Stripe (stripeUserId) non trouvée pour l'utilisateur ${userId}. Impossible de calculer le MRR.`
      );
      return { total: 0, currency: "USD" }; // Retourner 0 si pas de connexion
    }

    // 2. Utiliser la clé secrète de la plateforme Stripe
    const platformStripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!platformStripeSecretKey) {
      console.error(
        "[fetchMrrForUser] La variable d'environnement STRIPE_SECRET_KEY n'est pas configurée."
      );
      throw new Error("Configuration Stripe incomplète côté serveur.");
    }

    const stripe = new Stripe(platformStripeSecretKey, { typescript: true });

    // 3. Récupérer les abonnements Stripe pour le compte connecté spécifié
    const subscriptions = await stripe.subscriptions.list(
      { limit: 100, status: "all" }, // 'status: "all"' car calculateMrrFromSubscriptions filtre déjà par 'active' ou 'trialing'
      { stripeAccount: userStripeConn.stripeUserId } // Crucial: effectuer la requête AU NOM du compte connecté
    );

    // 4. Calculer le MRR
    return calculateMrrFromSubscriptions(subscriptions.data);
  } catch (error) {
    console.error(
      `[fetchMrrForUser] Erreur lors de la récupération du MRR pour l'utilisateur ${userId}:`,
      error
    );
    // En cas d'erreur pendant l'appel à Stripe ou autre, retourner 0 pour éviter de casser le reste.
    return { total: 0, currency: "USD" };
  }
}
