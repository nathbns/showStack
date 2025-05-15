import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/drizzle/db";
import { userTag } from "@/drizzle/db/schema";
import { eq } from "drizzle-orm";

// Récupérer tous les tags de l'utilisateur connecté
export async function GET(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const tags = await db.query.userTag.findMany({
      where: eq(userTag.userId, session.user.id),
      orderBy: (userTag, { asc }) => [asc(userTag.name)],
    });

    return NextResponse.json(tags);
  } catch (error) {
    console.error("Erreur lors de la récupération des tags:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des tags" },
      { status: 500 }
    );
  }
}

// Créer un nouveau tag
export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const { name, color } = await request.json();

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Nom de tag requis" }, { status: 400 });
    }

    // Vérifier si ce tag existe déjà pour l'utilisateur
    const existingTags = await db.query.userTag.findMany({
      where: (userTag) =>
        eq(userTag.userId, session.user.id) && eq(userTag.name, name),
    });

    if (existingTags.length > 0) {
      return NextResponse.json(
        { error: "Ce tag existe déjà" },
        { status: 400 }
      );
    }

    // Créer le nouveau tag
    const newTag = await db
      .insert(userTag)
      .values({
        userId: session.user.id,
        name,
        color: color || "#3B82F6", // Couleur par défaut si non spécifiée
      })
      .returning();

    return NextResponse.json(newTag[0]);
  } catch (error) {
    console.error("Erreur lors de la création du tag:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du tag" },
      { status: 500 }
    );
  }
}

// Supprimer un tag
export async function DELETE(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const tagId = searchParams.get("id");

    if (!tagId) {
      return NextResponse.json({ error: "ID du tag requis" }, { status: 400 });
    }

    // Vérifier que le tag appartient à l'utilisateur
    const tag = await db.query.userTag.findFirst({
      where: (userTag) =>
        eq(userTag.id, parseInt(tagId)) && eq(userTag.userId, session.user.id),
    });

    if (!tag) {
      return NextResponse.json(
        { error: "Tag non trouvé ou vous n'avez pas les droits" },
        { status: 404 }
      );
    }

    // Supprimer le tag
    await db.delete(userTag).where(eq(userTag.id, parseInt(tagId)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de la suppression du tag:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression du tag" },
      { status: 500 }
    );
  }
}

// Mettre à jour un tag (couleur)
export async function PUT(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const { id, color } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID du tag requis" }, { status: 400 });
    }

    // Vérifier que le tag appartient à l'utilisateur
    const tag = await db.query.userTag.findFirst({
      where: (userTag) =>
        eq(userTag.id, id) && eq(userTag.userId, session.user.id),
    });

    if (!tag) {
      return NextResponse.json(
        { error: "Tag non trouvé ou vous n'avez pas les droits" },
        { status: 404 }
      );
    }

    // Mettre à jour le tag
    const updatedTag = await db
      .update(userTag)
      .set({ color })
      .where(eq(userTag.id, id))
      .returning();

    return NextResponse.json(updatedTag[0]);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du tag:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour du tag" },
      { status: 500 }
    );
  }
}
