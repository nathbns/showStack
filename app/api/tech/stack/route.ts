import { NextResponse } from "next/server";
// import { headers } from "next/headers"; // Plus besoin si request.headers fonctionne
import { auth } from "@/lib/auth";
import { db } from "@/drizzle/db";
import { techStack, stackTechnologyItem } from "@/drizzle/db/schema";
import { eq, and, notInArray } from "drizzle-orm";

interface ApiTechItem {
  id: string; // Correspond à stackTechnologyItem.id si existant, ou tech.id du frontend pour les nouveaux
  name: string;
  color: string;
  technologyId: string; // L'ID de la technologie (ex: "typescript", "react")
  category: string;
  gridCols: number;
  gridRows: number;
  isProject?: boolean; // Pour les projets
  favicon?: string; // URL du favicon pour les projets
  url?: string; // URL du projet
  description?: string; // Description du projet
  order?: number; // Ordre pour le tri
  stars?: number;
  forks?: number;
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

    const finalItemDbIds: number[] = [];

    if (technologies && technologies.length > 0) {
      for (const tech of technologies) {
        let shouldInsert = true;
        let existingItemId = NaN;

        if (tech.id) {
          const parsedId = parseInt(tech.id, 10);
          if (!isNaN(parsedId)) {
            existingItemId = parsedId;
            const found = await db.query.stackTechnologyItem.findFirst({
              where: eq(stackTechnologyItem.id, existingItemId),
            });
            if (found) {
              shouldInsert = false;
            }
          }
        }

        if (!shouldInsert && !isNaN(existingItemId)) {
          // C'est un élément existant, on le met à jour
          await db
            .update(stackTechnologyItem)
            .set({
              name: tech.name,
              color: tech.color,
              technologyId: tech.technologyId,
              category: tech.category || "Custom",
              gridCols: tech.gridCols || 1,
              gridRows: tech.gridRows || 1,
              isProject: tech.isProject || false,
              favicon: tech.favicon || null,
              url: tech.url || null,
              description: tech.description || null,
              order: tech.order !== undefined ? tech.order : 0,
              stars: tech.stars || 0,
              forks: tech.forks || 0,
            })
            .where(eq(stackTechnologyItem.id, existingItemId));
          finalItemDbIds.push(existingItemId);
        } else {
          // C'est un nouvel élément ou l'ID existant n'était pas valide/trouvé, on l'insère
          const newDbItems = await db
            .insert(stackTechnologyItem)
            .values({
              techStackId: currentStack!.id,
              technologyId: tech.technologyId,
              name: tech.name,
              color: tech.color,
              category: tech.category || "Custom",
              gridCols: tech.gridCols || 1,
              gridRows: tech.gridRows || 1,
              isProject: tech.isProject || false,
              favicon: tech.favicon || null,
              url: tech.url || null,
              description: tech.description || null,
              order: tech.order !== undefined ? tech.order : 0,
              stars: tech.stars || 0,
              forks: tech.forks || 0,
            })
            .returning({ insertedId: stackTechnologyItem.id });

          if (newDbItems && newDbItems[0] && newDbItems[0].insertedId) {
            finalItemDbIds.push(newDbItems[0].insertedId);
          } else {
            console.error(
              "Impossible d'insérer la nouvelle technologie ou d'obtenir son ID:",
              tech
            );
          }
        }
      }

      if (currentStack?.id) {
        if (finalItemDbIds.length > 0) {
          await db
            .delete(stackTechnologyItem)
            .where(
              and(
                eq(stackTechnologyItem.techStackId, currentStack.id),
                notInArray(stackTechnologyItem.id, finalItemDbIds)
              )
            );
        } else {
          await db
            .delete(stackTechnologyItem)
            .where(eq(stackTechnologyItem.techStackId, currentStack.id));
        }
      }
    } else {
      if (currentStack?.id) {
        await db
          .delete(stackTechnologyItem)
          .where(eq(stackTechnologyItem.techStackId, currentStack.id));
      }
    }

    const techItems = await db.query.stackTechnologyItem.findMany({
      where: eq(stackTechnologyItem.techStackId, currentStack.id),
    });

    const updatedStackWithTechnologies = {
      ...currentStack,
      technologies: techItems,
    };

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

    const idAsNumber = parseInt(itemId, 10);
    if (isNaN(idAsNumber)) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }

    const isStack = searchParams.has("stackId");

    if (isStack) {
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
