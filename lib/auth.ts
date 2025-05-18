import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/drizzle/db"; // your drizzle instance
// Importer user seulement si vous avez besoin de typer explicitement le retour de mapProfileToUser
// import { user } from "@/drizzle/db/schema";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: false,
    autoSignIn: false,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      overrideUserInfoOnSignIn: true,
      scope: ["user:email", "read:user"],
      mapProfileToUser: (profile: any) => {
        console.log("GitHub Profile Bio:", profile.bio);

        if (profile.bio) {
          setTimeout(async () => {
            try {
              await db.execute(`
                UPDATE "user" 
                SET description = '${profile.bio.replace(/'/g, "''")}'
                WHERE email = '${profile.email}'
              `);
              console.log("✅ Description mise à jour manuellement en DB");
            } catch (e) {
              console.error("❌ Erreur lors de la mise à jour manuelle:", e);
            }
          }, 1000);
        }

        return {
          description: profile.bio,
        };
      },
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  callbacks: {
    session: ({ session, user }: { session: any; user: any }) => {
      console.log("SESSION CALLBACK - USER:", JSON.stringify(user, null, 2));
      console.log(
        "SESSION CALLBACK - ORIGINAL SESSION:",
        JSON.stringify(session, null, 2)
      );

      if (user && user.description) {
        session.user.description = user.description;
        console.log("✅ Description ajoutée à la session:", user.description);
      } else {
        console.log("❌ Pas de description dans l'objet user");
      }

      console.log(
        "SESSION CALLBACK - SESSION FINALE:",
        JSON.stringify(session, null, 2)
      );
      return session;
    },
  },
});
