import { NextResponse } from "next/server";
import { db } from "@/drizzle/db";
import { stripeConnection } from "@/drizzle/db/schema";
import { auth } from "@/lib/auth";
import Stripe from "stripe";

// TODO: Chiffrer accessToken et refreshToken avant de les stocker en BDD en production

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const errorParam = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const dashboardUrl = new URL("/dashboard", appUrl);

  if (errorParam) {
    dashboardUrl.searchParams.set(
      "stripe_error",
      errorDescription || errorParam
    );
    return NextResponse.redirect(dashboardUrl.toString());
  }

  if (!code) {
    dashboardUrl.searchParams.set(
      "stripe_error",
      "Aucun code d'autorisation fourni par Stripe."
    );
    return NextResponse.redirect(dashboardUrl.toString());
  }

  try {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session || !session.user || !session.user.id) {
      // Rediriger vers la page de connexion si non authentifié, avec un message
      // Ou gérer l'erreur différemment
      const loginUrl = new URL("/login", appUrl); // Suppose une page /login
      loginUrl.searchParams.set(
        "error",
        "Session invalide lors du callback Stripe."
      );
      return NextResponse.redirect(loginUrl.toString());
    }
    const userId = session.user.id;

    const { STRIPE_SECRET_KEY } = process.env;
    if (!STRIPE_SECRET_KEY) {
      console.error("Clé secrète Stripe non configurée.");
      dashboardUrl.searchParams.set(
        "stripe_error",
        "Configuration Stripe incomplète côté serveur (secret)."
      );
      return NextResponse.redirect(dashboardUrl.toString());
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY, {
      typescript: true,
      // apiVersion: "2023-10-16", // Facultatif, Stripe utilise la dernière par défaut
    });

    const response = await stripe.oauth.token({
      grant_type: "authorization_code",
      code: code,
    });

    const {
      access_token,
      refresh_token,
      stripe_user_id,
      scope,
      livemode,
      stripe_publishable_key,
    } = response;

    // @ts-ignore // Permet d'accéder à expires_in qui n'est pas dans le type OAuthToken officiel
    const expiresInFromResponse = response.expires_in;
    const expiresInNum = Number(expiresInFromResponse);
    const accessTokenExpiresAt =
      expiresInNum && !isNaN(expiresInNum)
        ? new Date(Date.now() + expiresInNum * 1000)
        : null;

    if (!access_token || !stripe_user_id) {
      console.error(
        "Token d'accès ou ID utilisateur Stripe manquant dans la réponse OAuth."
      );
      dashboardUrl.searchParams.set(
        "stripe_error",
        "Réponse OAuth invalide de Stripe."
      );
      return NextResponse.redirect(dashboardUrl.toString());
    }

    await db
      .insert(stripeConnection)
      .values({
        userId: userId,
        stripeUserId: stripe_user_id,
        accessToken: access_token,
        refreshToken: refresh_token || null,
        scope: scope || "",
        livemode: livemode !== undefined ? livemode : false,
        stripePublishableKey: stripe_publishable_key || null,
        accessTokenExpiresAt: accessTokenExpiresAt,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: stripeConnection.userId,
        set: {
          stripeUserId: stripe_user_id,
          accessToken: access_token,
          refreshToken: refresh_token || null,
          scope: scope || "",
          livemode: livemode !== undefined ? livemode : false,
          stripePublishableKey: stripe_publishable_key || null,
          accessTokenExpiresAt: accessTokenExpiresAt,
          updatedAt: new Date(),
        },
      });

    dashboardUrl.searchParams.set("stripe_success", "true");
    return NextResponse.redirect(dashboardUrl.toString());
  } catch (err: any) {
    console.error("Erreur interne ou Stripe lors du callback Stripe:", err);
    let errorMessage = "Erreur interne du serveur lors du callback Stripe.";
    if (err instanceof Stripe.errors.StripeError) {
      // Essayer d'obtenir un message d'erreur plus spécifique de Stripe
      const rawError = err.raw as { message?: string }; // Type assertion pour raw
      errorMessage =
        rawError?.message || err.message || "Erreur Stripe inconnue.";
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }
    dashboardUrl.searchParams.set("stripe_error", errorMessage);
    return NextResponse.redirect(dashboardUrl.toString());
  }
}
