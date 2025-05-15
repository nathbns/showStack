import { NextResponse } from "next/server";
// import { headers } from "next/headers"; // Plus besoin si request.headers fonctionne
import { auth } from "@/lib/auth";
import { db } from "@/drizzle/db";
import { techStack, stackTechnologyItem } from "@/drizzle/db/schema";
import { eq } from "drizzle-orm";

interface ApiTechItem {
  id: string; // Correspond à stackTechnologyItem.id si existant, ou tech.id du frontend pour les nouveaux
  name: string;
  color: string;
  technologyId: string; // L'ID de la technologie (ex: "typescript", "react")
  category: string;
  gridCols: number;
  gridRows: number;
}

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
      orderBy: (techStack, { asc }) => [asc(techStack.createdAt)],
    });

    // Retourner toutes les stacks trouvées pour l'utilisateur
    return NextResponse.json(userStacksResults);
  } catch (error) {
    console.error("Erreur lors de la récupération des stacks:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des stacks" },
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

    const { id, name, technologies } = (await request.json()) as {
      id?: number; // ID de la techStack existante (optionnel)
      name: string;
      technologies: ApiTechItem[];
    };

    let currentStack: typeof techStack.$inferSelect | undefined | null;

    const stackData = {
      userId: session.user.id,
      name: name,
      updatedAt: new Date(),
    };

    if (id) {
      // Mise à jour d'une stack existante
      await db.update(techStack).set(stackData).where(eq(techStack.id, id));
      currentStack = await db.query.techStack.findFirst({
        where: eq(techStack.id, id),
      });
    } else {
      // Création d'une nouvelle stack
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
      // Log pour vérifier les données avant insertion
      console.log(
        "Données des technologies à insérer:",
        technologies.map((tech: ApiTechItem) => ({
          techStackId: currentStack!.id,
          technologyId: tech.technologyId || tech.id,
          name: tech.name,
          color: tech.color,
          category: tech.category || "Custom",
          gridCols: tech.gridCols,
          gridRows: tech.gridRows,
        }))
      );

      const techItems = technologies.map((tech: ApiTechItem) => ({
        techStackId: currentStack!.id,
        technologyId: tech.technologyId || tech.id,
        name: tech.name,
        color: tech.color,
        category: tech.category || "Custom",
        gridCols: tech.gridCols || 1,
        gridRows: tech.gridRows || 1,
      }));
      await db.insert(stackTechnologyItem).values(techItems);
    }

    // Utiliser une requête manuelle pour s'assurer que toutes les colonnes sont incluses
    const techItems = await db.query.stackTechnologyItem.findMany({
      where: eq(stackTechnologyItem.techStackId, currentStack.id),
    });

    console.log("Technologies récupérées directement:", techItems);

    const updatedStackWithTechnologies = {
      ...currentStack,
      technologies: techItems,
    };

    console.log(
      "Technologies renvoyées par l'API:",
      updatedStackWithTechnologies.technologies
    );

    return NextResponse.json(updatedStackWithTechnologies);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de la stack:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement de la stack" },
      { status: 500 }
    );
  }
}

// Supprimer une technologie spécifique ou une stack entière
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
    const itemId = searchParams.get("id");

    if (!itemId) {
      return NextResponse.json({ error: "ID manquant" }, { status: 400 });
    }

    // Tentative de conversion en nombre
    const idAsNumber = parseInt(itemId, 10);
    if (isNaN(idAsNumber)) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }

    // Vérifier si le paramètre stackId est présent pour savoir si on supprime une stack entière
    const isStack = searchParams.has("stackId");

    if (isStack) {
      // Vérifier que la stack appartient bien à l'utilisateur
      const stack = await db.query.techStack.findFirst({
        where: (techStack) =>
          eq(techStack.id, idAsNumber) && eq(techStack.userId, session.user.id),
      });

      if (!stack) {
        return NextResponse.json(
          { error: "Stack non trouvée ou vous n'avez pas les droits" },
          { status: 404 }
        );
      }

      // Supprimer la stack (les technologies associées seront supprimées automatiquement grâce à onDelete: "cascade")
      const deletedStacks = await db
        .delete(techStack)
        .where(eq(techStack.id, idAsNumber))
        .returning();

      if (deletedStacks.length === 0) {
        return NextResponse.json(
          { error: "Stack non trouvée ou déjà supprimée" },
          { status: 404 }
        );
      }

      return NextResponse.json({ message: "Stack supprimée avec succès" });
    } else {
      // Vérifier que l'item appartient bien à une stack de l'utilisateur actuel
      const item = await db.query.stackTechnologyItem.findFirst({
        where: eq(stackTechnologyItem.id, idAsNumber),
        with: {
          techStack: true,
        },
      });

      if (!item || item.techStack.userId !== session.user.id) {
        return NextResponse.json(
          { error: "Technologie non trouvée ou vous n'avez pas les droits" },
          { status: 404 }
        );
      }

      // Supprimer la technologie
      const deletedItems = await db
        .delete(stackTechnologyItem)
        .where(eq(stackTechnologyItem.id, idAsNumber))
        .returning();

      if (deletedItems.length === 0) {
        return NextResponse.json(
          { error: "Technologie non trouvée ou déjà supprimée" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        message: "Technologie supprimée avec succès",
      });
    }
  } catch (error) {
    console.error("Erreur lors de la suppression:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}
