import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { fetchMrrForUser } from "@/lib/stripe-mrr"; // Importer le helper

export async function GET(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
    const userId = session.user.id;

    const mrrData = await fetchMrrForUser(userId);

    if (mrrData === null || mrrData.total === undefined) {
      // Vérifier si mrrData est null ou invalide
      // fetchMrrForUser gère déjà les erreurs et retourne { total: 0, currency: "USD" } en cas de problème
      // donc ce cas ne devrait pas arriver si fetchMrrForUser est bien implémenté pour toujours retourner un objet.
      // Cependant, par sécurité, si fetchMrrForUser retournait null explicitement dans un futur changement:
      return NextResponse.json(
        { error: "Impossible de récupérer les données MRR via le helper." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "MRR total du compte récupéré avec succès.",
      total: mrrData.total,
      currency: mrrData.currency,
    });
  } catch (error) {
    // Ce bloc catch devient moins probable si fetchMrrForUser gère ses propres erreurs,
    // mais gardé pour des erreurs inattendues au niveau de cette route (ex: session).
    console.error("[API /api/stripe/mrr] Erreur inattendue:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Une erreur interne est survenue.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
