import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

// Vérifier si DATABASE_URL est définie
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL environment variable is not set or accessible."
  );
}

// Créer un Pool de connexions
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // DATABASE_URL doit contenir ?sslmode=require
});

// Initialiser Drizzle avec le pool et le schéma
export const db = drizzle(pool, { schema });
