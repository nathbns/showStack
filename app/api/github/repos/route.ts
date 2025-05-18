import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/drizzle/db";
import { account } from "@/drizzle/db/schema";
import { eq, and } from "drizzle-orm";

export async function GET(req: Request) {
  try {
    const sessionData = await auth.api.getSession({ headers: req.headers });

    if (!sessionData?.user?.id) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    // Récupération du token GitHub depuis la base de données
    const githubAccount = await db.query.account.findFirst({
      where: and(
        eq(account.userId, sessionData.user.id),
        eq(account.providerId, "github")
      ),
    });

    if (!githubAccount?.accessToken) {
      return NextResponse.json(
        { error: "Token GitHub non trouvé" },
        { status: 401 }
      );
    }

    // Récupération des repos de l'utilisateur
    const reposResponse = await fetch(
      "https://api.github.com/user/repos?sort=updated&per_page=100",
      {
        headers: {
          Authorization: `Bearer ${githubAccount.accessToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!reposResponse.ok) {
      throw new Error("Erreur lors de la récupération des repos GitHub");
    }

    const reposData = await reposResponse.json();

    return NextResponse.json(reposData);
  } catch (error) {
    console.error("Erreur lors de la récupération des repos GitHub:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des repos" },
      { status: 500 }
    );
  }
}
