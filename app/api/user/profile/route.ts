import { auth } from "@/lib/auth";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Obtenir la session de l'utilisateur
    const session = await auth.api.getSession({ headers: req.headers });

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    // Récupérer les données de l'utilisateur
    const userData = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        description: user.description,
      })
      .from(user)
      .where(eq(user.id, session.user.id))
      .then((res) => res[0]);

    if (!userData) {
      return NextResponse.json(
        { error: "Utilisateur non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données utilisateur:",
      error
    );
    return NextResponse.json(
      { error: "Erreur lors de la récupération des données utilisateur" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    // Obtenir la session de l'utilisateur
    const session = await auth.api.getSession({ headers: req.headers });

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    // Extraire la description du corps de la requête
    const body = await req.json();
    const { description } = body;

    if (description === undefined) {
      return NextResponse.json(
        { error: "La description est requise" },
        { status: 400 }
      );
    }

    // Mettre à jour la description de l'utilisateur dans la base de données
    await db
      .update(user)
      .set({ description })
      .where(eq(user.id, session.user.id));

    return NextResponse.json({ success: true, description }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la description:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour de la description" },
      { status: 500 }
    );
  }
}
