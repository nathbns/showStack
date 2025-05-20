import { NextResponse } from "next/server";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/db/schema";
import { eq, sql } from "drizzle-orm";

export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    // Vérifier si l'utilisateur existe
    const existingUser = await db.query.user.findFirst({
      where: eq(user.id, userId),
      columns: { id: true },
    });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Incrémenter le shareCount
    await db
      .update(user)
      .set({ shareCount: sql`${user.shareCount} + 1` })
      .where(eq(user.id, userId));

    // Récupérer le nouveau shareCount pour le retourner (optionnel, mais peut être utile pour le client)
    const updatedUser = await db.query.user.findFirst({
      where: eq(user.id, userId),
      columns: { shareCount: true },
    });

    return NextResponse.json({
      message: "Share count incremented successfully",
      shareCount: updatedUser?.shareCount,
    });
  } catch (error) {
    console.error(`Error incrementing share count for user ${userId}:`, error);
    return NextResponse.json(
      { error: "Failed to increment share count" },
      { status: 500 }
    );
  }
}
