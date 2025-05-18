import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.redirect("/dashboard?error=no_code");
    }

    // Échange du code contre un access token
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      console.error("Erreur lors de l'échange du code:", tokenData);
      return NextResponse.redirect("/dashboard?error=token_exchange_failed");
    }

    // Récupération des données utilisateur GitHub
    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const userData = await userResponse.json();

    // Récupération des repos de l'utilisateur
    const reposResponse = await fetch(
      "https://api.github.com/user/repos?sort=updated&per_page=100",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    const reposData = await reposResponse.json();

    // Stockage des données dans la session ou redirection avec les données
    // Pour l'instant, on redirige vers le dashboard avec les données en paramètres
    const redirectParams = new URLSearchParams({
      github_connected: "true",
      username: userData.login,
      repos: JSON.stringify(reposData),
    });

    return NextResponse.redirect(`/dashboard?${redirectParams.toString()}`);
  } catch (error) {
    console.error("Erreur lors du callback GitHub:", error);
    return NextResponse.redirect("/dashboard?error=callback_failed");
  }
}
