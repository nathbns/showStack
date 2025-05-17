import { auth } from "@/lib/auth";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/db/schema"; // Uniquement besoin de 'user' grâce à onDelete: "cascade"
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
// import { headers } from "next/headers"; // Plus besoin si on utilise req.headers

export async function DELETE(req: Request) {
  try {
    // Utilisation de auth.api.getSession avec req.headers
    const sessionData = await auth.api.getSession({ headers: req.headers });

    if (!sessionData?.user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const userId = sessionData.user.id;

    // Grâce à onDelete: "cascade" dans le schéma Drizzle pour les tables liées (session, account, userTag, techStack, userStackTechnologies),
    // il suffit de supprimer l'utilisateur, et la base de données gérera la suppression des données associées.
    await db.delete(user).where(eq(user.id, userId));

    // La déconnexion est généralement gérée par la suppression du cookie de session,
    // ce que better-auth devrait faire si on interagissait avec ses endpoints de déconnexion.
    // Ici, comme on supprime l'utilisateur, la session devient invalide.
    // On pourrait vouloir explicitement supprimer le cookie ici si nécessaire.
    // Pour l'instant, on s'attend à ce que le client gère la redirection/état de déconnexion.

    // Il est important de s'assurer que les cookies de session sont bien effacés.
    // La documentation de better-auth suggère que les actions API peuvent retourner des headers Set-Cookie.
    // Une suppression propre impliquerait de retourner un header pour effacer le cookie de session.
    // Pour l'instant, on retourne juste un succès.
    // Une approche plus robuste serait d'appeler une fonction de déconnexion de better-auth si elle existe
    // ou de construire une réponse qui efface le cookie.

    const response = NextResponse.json(
      { message: "Account deleted successfully" },
      { status: 200 }
    );
    // TODO: S'assurer que le cookie de session est bien supprimé côté client ou par un header ici.
    // La documentation de better-auth ou une inspection des cookies de session serait utile pour connaître son nom exact.
    // Exemple: response.cookies.delete('nom-du-cookie-de-session');

    return response;
  } catch (error) {
    console.error("Error deleting account:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: "Error deleting account", details: errorMessage },
      { status: 500 }
    );
  }
}
