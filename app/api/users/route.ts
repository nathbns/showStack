import { NextResponse } from "next/server";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/db/schema";
// Vous pourriez vouloir ajouter une authentification ou une restriction ici
// si vous ne voulez pas que cette liste soit complètement publique.

export async function GET(request: Request) {
  try {
    const allUsers = await db.query.user.findMany({
      // Vous pouvez ajouter des options ici si nécessaire, par exemple :
      // orderBy: (user, { asc }) => [asc(user.name)],
      // columns: { id: true, name: true, email: true, image: true }, // Pour ne sélectionner que certains champs
    });

    return NextResponse.json(allUsers);
  } catch (error) {
    console.error("Error fetching all users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
