import { defineConfig } from "drizzle-kit";
import "dotenv/config";

console.log("DATABASE_URL from drizzle.config.ts:", process.env.DATABASE_URL); // Ligne de débogage

export default defineConfig({
  out: "./drizzle/migrations",
  schema: "./drizzle/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
