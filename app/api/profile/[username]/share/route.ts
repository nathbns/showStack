import { NextResponse } from "next/server";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/db/schema";
import { eq, sql } from "drizzle-orm";

export async function POST(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username;

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    // Vérifier si l'utilisateur existe
    const existingUser = await db.query.user.findFirst({
      where: eq(user.email, username),
      columns: { id: true },
    });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Incrémenter le shareCount
    await db
      .update(user)
      .set({ shareCount: sql`${user.shareCount} + 1` })
      .where(eq(user.id, existingUser.id));

    // Récupérer le nouveau shareCount pour le retourner (optionnel, mais peut être utile pour le client)
    const updatedUser = await db.query.user.findFirst({
      where: eq(user.id, existingUser.id),
      columns: { shareCount: true },
    });

    return NextResponse.json({
      message: "Share count incremented successfully",
      shareCount: updatedUser?.shareCount,
    });
  } catch (error) {
    console.error(
      `Error incrementing share count for user ${username}:`,
      error
    );
    return NextResponse.json(
      { error: "Failed to increment share count" },
      { status: 500 }
    );
  }
}
