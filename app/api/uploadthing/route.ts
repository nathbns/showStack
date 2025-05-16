import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Exporter les gestionnaires de route pour l'App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  // Passez vos variables d'environnement ici si elles ne sont pas détectées automatiquement
  // config: { ... },
});
