import { NextResponse } from "next/server";
import { db } from "@/drizzle/db";
import { user, techStack, stackTechnologyItem } from "@/drizzle/db/schema";
import { eq, asc } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    // 1. Récupérer les informations de l'utilisateur
    const userInfo = await db.query.user.findFirst({
      where: eq(user.id, userId),
      columns: {
        id: true,
        name: true,
        email: true, // Optionnel: décidez si l'email doit être public
        image: true,
        description: true,
        createdAt: true,
        layoutConfig: true,
      },
    });

    if (!userInfo) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 2. Récupérer les stacks technologiques de l'utilisateur
    //    Pour l'instant, on récupère toutes les stacks. On pourrait ajouter une notion de "stack publique" plus tard.
    const userStacks = await db.query.techStack.findMany({
      where: eq(techStack.userId, userId),
      with: {
        technologies: {
          // Ici, stackTechnologyItem est la table de jonction qui contient les détails de la techno dans la stack
          // Assurez-vous que les relations sont correctement définies dans Drizzle pour que cela fonctionne.
          // On récupère tous les champs de stackTechnologyItem. L'hydratation côté client se chargera des icônes etc.
          columns: {
            id: true,
            name: true,
            color: true,
            technologyId: true, // L'ID de la technologie globale (ex: 'react', 'javascript')
            category: true,
            gridCols: true,
            gridRows: true,
          },
        },
      },
      orderBy: (techStack, { asc }) => [asc(techStack.createdAt)],
    });

    return NextResponse.json({
      user: userInfo,
      stacks: userStacks,
    });
  } catch (error) {
    console.error(`Error fetching profile data for user ${userId}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch profile data" },
      { status: 500 }
    );
  }
}
