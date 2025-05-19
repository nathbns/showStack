import { NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // Adapter si l'authentification est gérée différemment

export async function GET(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const { STRIPE_CLIENT_ID, STRIPE_REDIRECT_URI } = process.env;

    if (!STRIPE_CLIENT_ID || !STRIPE_REDIRECT_URI) {
      console.error("Stripe Client ID ou Redirect URI non configuré.");
      return NextResponse.json(
        { error: "Configuration Stripe incomplète côté serveur." },
        { status: 500 }
      );
    }

    // Générer un état aléatoire pour la sécurité CSRF (optionnel mais recommandé)
    // const state = crypto.randomUUID();
    // Stocker l'état dans la session ou un cookie pour vérification dans le callback

    const params = new URLSearchParams({
      response_type: "code",
      client_id: STRIPE_CLIENT_ID,
      redirect_uri: STRIPE_REDIRECT_URI,
      scope: "read_write", // Modifié pour demander read_write
      // state: state, // Inclure l'état si généré
    });

    const stripeAuthorizeUrl = `https://connect.stripe.com/oauth/authorize?${params.toString()}`;

    return NextResponse.redirect(stripeAuthorizeUrl);
  } catch (error) {
    console.error(
      "Erreur lors de l'initiation de l'autorisation Stripe:",
      error
    );
    return NextResponse.json(
      { error: "Erreur interne du serveur lors de l'autorisation Stripe." },
      { status: 500 }
    );
  }
}
