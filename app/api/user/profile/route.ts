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
        layoutConfig: user.layoutConfig,
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

    // Extraire la description et layoutConfig du corps de la requête
    const body = await req.json();
    const { description, layoutConfig } = body;

    if (description === undefined && layoutConfig === undefined) {
      return NextResponse.json(
        {
          error:
            "Aucune donnée à mettre à jour (description ou layoutConfig requis)",
        },
        { status: 400 }
      );
    }

    const updateData: any = {};
    if (description !== undefined) updateData.description = description;
    if (layoutConfig !== undefined) updateData.layoutConfig = layoutConfig;

    // Mettre à jour la description et/ou layoutConfig de l'utilisateur dans la base de données
    await db.update(user).set(updateData).where(eq(user.id, session.user.id));

    return NextResponse.json({ success: true, ...updateData }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la description:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour de la description" },
      { status: 500 }
    );
  }
}
