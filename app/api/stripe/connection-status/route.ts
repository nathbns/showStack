import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/drizzle/db";
import { stripeConnection } from "@/drizzle/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
    const userId = session.user.id;

    const connection = await db
      .select({
        id: stripeConnection.id, // Sélectionner au moins un champ pour vérifier l'existence
      })
      .from(stripeConnection)
      .where(eq(stripeConnection.userId, userId))
      .limit(1);

    if (connection && connection.length > 0) {
      return NextResponse.json({ isConnected: true });
    } else {
      return NextResponse.json({ isConnected: false });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la vérification du statut de connexion Stripe:",
      error
    );
    return NextResponse.json(
      { error: "Erreur interne du serveur.", isConnected: false },
      { status: 500 }
    );
  }
}
