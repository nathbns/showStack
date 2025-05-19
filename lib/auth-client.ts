import { createAuthClient } from "better-auth/react";

const getBaseUrl = () => {
  const appUrlFromEnv = process.env.NEXT_PUBLIC_APP_URL;
  if (appUrlFromEnv) {
    // Si l'URL de l'env commence déjà par http:// ou https://, on la retourne telle quelle.
    if (
      appUrlFromEnv.startsWith("http://") ||
      appUrlFromEnv.startsWith("https://")
    ) {
      return appUrlFromEnv.replace(/\/$/, ""); // Supprimer le slash final si présent
    }
    // Sinon, on assume qu'on est en local et on la préfixe par http, ou on la construit comme avant si c'est juste un hostname.
    // Pour plus de robustesse, on privilégie http en local si aucun protocole n'est donné.
    // Et on garde https pour la construction si c'est juste un hostname (typiquement pour la prod).
    if (appUrlFromEnv.includes("localhost")) {
      return `http://${appUrlFromEnv
        .replace(/^https?:\/\//, "")
        .replace(/\/$/, "")}`;
    }
    // Pour la production ou si ce n'est pas localhost et pas de protocole, on utilise https par défaut.
    return `https://${appUrlFromEnv
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, "")}`;
  }
  // Fallback si NEXT_PUBLIC_APP_URL n'est pas du tout défini
  return "http://localhost:3000";
};

export const {
  signIn,
  useSession,
  signOut,
  getSession,
  //   updateUser,
  //   changePassword,
  //   forgetPassword,
  //   resetPassword,
} = createAuthClient({
  baseURL: getBaseUrl(),
});
