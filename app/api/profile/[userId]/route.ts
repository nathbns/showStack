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
          columns: {
            id: true,
            name: true,
            color: true,
            technologyId: true,
            category: true,
            gridCols: true,
            gridRows: true,
            url: true,
            isProject: true,
            description: true,
            favicon: true,
            order: true,
          },
          orderBy: (stackTechnologyItem, { asc }) => [
            asc(stackTechnologyItem.order),
          ],
        },
      },
      orderBy: (techStack, { asc }) => [asc(techStack.createdAt)],
    });

    // Enrichir les technologies avec les données GitHub si applicable
    const processedStacks = await Promise.all(
      userStacks.map(async (stack) => {
        const processedTechnologies = await Promise.all(
          (stack.technologies || []).map(async (techItem: any) => {
            if (
              techItem.isProject &&
              techItem.url &&
              typeof techItem.url === "string" &&
              techItem.url.startsWith("https://github.com/")
            ) {
              try {
                const match = techItem.url.match(
                  /github\.com\/([^/]+)\/([^/]+)/
                );
                if (match) {
                  const owner = match[1];
                  const repoName = match[2].replace(/\.git$/, "");

                  const githubRes = await fetch(
                    `https://api.github.com/repos/${owner}/${repoName}`,
                    {}
                  );

                  if (githubRes.ok) {
                    const githubData = await githubRes.json();
                    return {
                      ...techItem,
                      description:
                        githubData.description || techItem.description,
                      stars: githubData.stargazers_count,
                      forks: githubData.forks_count,
                    };
                  } else {
                    console.warn(
                      `Failed to fetch GitHub data for ${techItem.url}: ${
                        githubRes.status
                      } ${await githubRes.text()}`
                    );
                  }
                }
              } catch (ghError) {
                console.error(
                  `Error fetching GitHub data for ${techItem.url}:`,
                  ghError
                );
              }
            }
            return {
              ...techItem,
              isProject: techItem.isProject || false,
              url: techItem.url || undefined,
              description: techItem.description || undefined,
              favicon: techItem.favicon || undefined,
              stars: techItem.stars || undefined,
              forks: techItem.forks || undefined,
            };
          })
        );
        return { ...stack, technologies: processedTechnologies };
      })
    );

    return NextResponse.json({
      user: userInfo,
      stacks: processedStacks,
    });
  } catch (error) {
    console.error(`Error fetching profile data for user ${userId}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch profile data" },
      { status: 500 }
    );
  }
}
