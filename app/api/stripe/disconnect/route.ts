import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/drizzle/db";
import { stripeConnection } from "@/drizzle/db/schema";
import { eq } from "drizzle-orm";

export async function DELETE(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
    const userId = session.user.id;

    // Supprimer la connexion Stripe pour cet utilisateur
    await db
      .delete(stripeConnection)
      .where(eq(stripeConnection.userId, userId));

    return NextResponse.json({
      message: "Compte Stripe déconnecté avec succès",
    });
  } catch (error) {
    console.error("Erreur lors de la déconnexion du compte Stripe:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur lors de la déconnexion." },
      { status: 500 }
    );
  }
}
