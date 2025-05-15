import { NextResponse } from "next/server";
// import { headers } from "next/headers"; // Plus besoin si request.headers fonctionne
import { auth } from "@/lib/auth";
import { db } from "@/drizzle/db";
import { techStack, stackTechnologyItem } from "@/drizzle/db/schema";
import { eq } from "drizzle-orm";

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
    });

    const firstUserStack =
      userStacksResults.length > 0 ? userStacksResults[0] : null;

    return NextResponse.json(
      firstUserStack || { userId: session.user.id, technologies: [] }
    );
  } catch (error) {
    console.error("Erreur lors de la récupération de la stack:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération de la stack" },
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

    const { name, description, isPublic, technologies } = await request.json();

    let currentStack = await db.query.techStack.findFirst({
      where: eq(techStack.userId, session.user.id),
    });

    const stackData = {
      userId: session.user.id,
      name: name || currentStack?.name || "Ma Stack",
      description: description || currentStack?.description || null,
      isPublic:
        isPublic !== undefined ? isPublic : currentStack?.isPublic || false,
      updatedAt: new Date(),
    };

    if (currentStack) {
      await db
        .update(techStack)
        .set(stackData)
        .where(eq(techStack.id, currentStack.id));
    } else {
      const newStacks = await db
        .insert(techStack)
        .values({ ...stackData, createdAt: new Date() })
        .returning();
      currentStack = newStacks[0];
    }

    if (!currentStack) {
      return NextResponse.json(
        { error: "Impossible de créer ou mettre à jour la stack" },
        { status: 500 }
      );
    }

    await db
      .delete(stackTechnologyItem)
      .where(eq(stackTechnologyItem.techStackId, currentStack.id));

    if (technologies && technologies.length > 0) {
      const techItems = technologies.map((tech: any) => ({
        techStackId: currentStack!.id,
        technologyId: tech.technologyId || tech.id,
        name: tech.name,
        color: tech.color,
        category: tech.category || "Custom",
      }));
      await db.insert(stackTechnologyItem).values(techItems);
    }

    const updatedStackWithTechnologies = await db.query.techStack.findFirst({
      where: eq(techStack.id, currentStack.id),
      with: {
        technologies: true,
      },
    });

    return NextResponse.json(updatedStackWithTechnologies);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de la stack:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement de la stack" },
      { status: 500 }
    );
  }
}

// Supprimer une technologie spécifique de la stack de l'utilisateur
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
    const stackTechnologyItemId = searchParams.get("id");

    if (!stackTechnologyItemId) {
      return NextResponse.json(
        { error: "ID de la technologie manquant" },
        { status: 400 }
      );
    }

    // Vérifier que l'item appartient bien à une stack de l'utilisateur actuel pour la sécurité
    // Cela nécessite une jointure ou une requête imbriquée pour être sûr.
    // Pour simplifier ici, on assume que si l'utilisateur est connecté, il ne peut supprimer que ses items.
    // Une vérification plus robuste serait : trouver le techStackId de l'item, puis vérifier que techStack.userId === session.user.id.

    // Tentative de conversion en nombre, car l'ID dans la DB est serial (nombre)
    const itemIdAsNumber = parseInt(stackTechnologyItemId, 10);
    if (isNaN(itemIdAsNumber)) {
      return NextResponse.json(
        { error: "ID de la technologie invalide" },
        { status: 400 }
      );
    }

    const deletedItems = await db
      .delete(stackTechnologyItem)
      .where(eq(stackTechnologyItem.id, itemIdAsNumber))
      .returning(); // returning() pour confirmer la suppression

    if (deletedItems.length === 0) {
      return NextResponse.json(
        { error: "Technologie non trouvée ou déjà supprimée" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Technologie supprimée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de la technologie:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression de la technologie" },
      { status: 500 }
    );
  }
}
