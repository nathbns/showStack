import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/lib/auth"; // Assurez-vous que le chemin est correct

const f = createUploadthing();

// Middleware d'authentification simulé - Adaptez avec votre vraie logique d'auth
// Normalement, vous récupéreriez la session de l'utilisateur ici.
async function authenticateUser(req: Request) {
  console.log("[UPLOADTHING_CORE] Attempting to authenticate user...");
  const requestHeaders = Object.fromEntries(req.headers.entries());
  console.log(
    "[UPLOADTHING_CORE] Request headers:",
    JSON.stringify(requestHeaders, null, 2)
  );
  console.log(
    "[UPLOADTHING_CORE] Cookie header from req:",
    req.headers.get("cookie")
  );

  try {
    const session = await auth.api.getSession({ headers: req.headers });

    if (!session?.user?.id) {
      console.log(
        "[UPLOADTHING_CORE] Authentication failed: No session or user ID returned by auth.api.getSession()."
      );
      // Lancer une UploadThingError spécifique pour que le client puisse potentiellement la gérer
      throw new UploadThingError({
        code: "FORBIDDEN",
        message: "No active session found. Please log in.",
      });
    }
    console.log(
      "[UPLOADTHING_CORE] Authentication successful. User ID:",
      session.user.id
    );
    return { id: session.user.id };
  } catch (error) {
    // Si l'erreur est déjà une UploadThingError (par exemple, celle que nous avons lancée ci-dessus), la relancer telle quelle.
    if (error instanceof UploadThingError) {
      console.error(
        "[UPLOADTHING_CORE] UploadThingError during authentication:",
        error.code,
        error.message
      );
      throw error;
    }
    // Pour toute autre erreur (par exemple, une erreur interne dans auth.api.getSession)
    console.error(
      "[UPLOADTHING_CORE] CRITICAL ERROR in authentication middleware:",
      error
    );
    throw new UploadThingError({
      code: "INTERNAL_SERVER_ERROR",
      message:
        "Authentication failed due to an unexpected server error. Check server logs for details.",
      cause: error, // Inclure l'erreur originale comme cause
    });
  }
}

// FileRouter pour votre application, peut contenir plusieurs FileRoutes
export const ourFileRouter = {
  // Définissez autant de FileRoutes que nécessaire, chacune avec un nom unique

  // Uploader pour les utilisateurs déjà authentifiés (tableau de bord, profil, etc.)
  profileImageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // Mettez en place les permissions et la logique pour ce FileRoute
    .middleware(async ({ req }) => {
      console.log(
        "[UPLOADTHING_CORE] Middleware started for profileImageUploader."
      );
      const user = await authenticateUser(req);
      if (!user) {
        console.log("[UPLOADTHING_CORE] Middleware: User unauthorized.");
        throw new UploadThingError({
          code: "FORBIDDEN",
          message: "User unauthorized in middleware.",
        });
      }
      console.log(
        "[UPLOADTHING_CORE] Middleware: User authenticated. User ID:",
        user.id
      );
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log(
        "[UPLOADTHING_CORE] Upload complete for userId:",
        metadata.userId
      );
      console.log("[UPLOADTHING_CORE] File url:", file.url);
      return { uploadedBy: metadata.userId, fileUrl: file.url };
    }),

  // Uploader spécifique pour l'inscription - ne nécessite pas d'authentification
  signupProfileImageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async ({ req }) => {
      console.log(
        "[UPLOADTHING_CORE] Middleware started for signupProfileImageUploader (no auth required)."
      );
      // Pour éviter les abus, on pourrait ajouter un système de limitation de requêtes ici
      // ou un jeton CSRF, mais pour l'instant on permet simplement l'upload
      return { isSignup: true };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("[UPLOADTHING_CORE] Upload complete for signup image.");
      console.log("[UPLOADTHING_CORE] File url:", file.url);
      return { fileUrl: file.url };
    }),
  // Ajoutez d'autres uploaders si nécessaire (par ex. pour des images de posts, etc.)
  // anotherUploader: f ...
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
