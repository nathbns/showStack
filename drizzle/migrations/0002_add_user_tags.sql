-- Ajouter la table user_tag
CREATE TABLE IF NOT EXISTS "user_tag" (
  "id" SERIAL PRIMARY KEY,
  "user_id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "color" TEXT NOT NULL DEFAULT '#3B82F6',
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  
  CONSTRAINT "user_tag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE
); 