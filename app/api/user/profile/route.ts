import { NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // Import de l'instance auth de better-auth
import { db } from "@/drizzle/db"; // Supposant l\'accès à l\'instance db de Drizzle
import { user } from "@/drizzle/db/schema"; // Importer le schéma utilisateur
import { eq } from "drizzle-orm";

export async function PUT(request: Request) {
  // Récupérer la session en utilisant la méthode de better-auth
  const session = await auth.api.getSession({
    headers: request.headers, // Utiliser request.headers directement
  });

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { description } = await request.json();

    if (typeof description !== "string") {
      return NextResponse.json(
        { error: "Description invalide" },
        { status: 400 }
      );
    }

    // S'assurer que session.user.id est bien une string pour la comparaison avec le schéma
    const userId = String(session.user.id);

    await db
      .update(user)
      .set({ description: description, updatedAt: new Date() })
      .where(eq(user.id, userId));

    return NextResponse.json({ message: "Profil mis à jour avec succès" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du profil:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
