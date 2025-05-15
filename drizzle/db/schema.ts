import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  serial,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { eq } from "drizzle-orm";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  description: text("description"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

// Nouvelle table pour les tags utilisateur
export const userTag = pgTable("user_tag", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  color: text("color").notNull().default("#3B82F6"), // Couleur par défaut (bleu)
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const userStackTechnologies = pgTable("user_stack_technology", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  version: text("version"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
  stackTechnologies: many(userStackTechnologies),
  techStacks: many(techStack),
  tags: many(userTag), // Nouvelle relation
}));

export const userStackTechnologiesRelations = relations(
  userStackTechnologies,
  ({ one }) => ({
    user: one(user, {
      fields: [userStackTechnologies.userId],
      references: [user.id],
    }),
  })
);

export const techStack = pgTable("tech_stack", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  name: text("name"),
  upvotes: integer("upvotes").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const stackTechnologyItem = pgTable("stack_technology_item", {
  id: serial("id").primaryKey(),
  techStackId: integer("tech_stack_id")
    .notNull()
    .references(() => techStack.id, { onDelete: "cascade" }),
  technologyId: text("technology_id").notNull(), // ex: "typescript", "react", or custom ID
  name: text("name").notNull(),
  color: text("color").notNull(),
  category: text("category").notNull(), // ex: "Frontend", "Backend", "Custom"
  gridCols: integer("grid_cols").default(1),
  gridRows: integer("grid_rows").default(1),
});

export const techStackRelations = relations(techStack, ({ one, many }) => ({
  user: one(user, {
    fields: [techStack.userId],
    references: [user.id],
  }),
  technologies: many(stackTechnologyItem),
}));

export const stackTechnologyItemRelations = relations(
  stackTechnologyItem,
  ({ one }) => ({
    techStack: one(techStack, {
      fields: [stackTechnologyItem.techStackId],
      references: [techStack.id],
    }),
  })
);

export const userTagRelations = relations(userTag, ({ one }) => ({
  user: one(user, {
    fields: [userTag.userId],
    references: [user.id],
  }),
}));

/*
// Requête préparée pour récupérer les technologies d'une stack avec toutes les colonnes
export const getTechStackWithTechnologies = (db) => async (stackId) => {
  const result = await db.query.techStack.findFirst({
    where: eq(techStack.id, stackId),
    with: {
      technologies: true
    },
  });
  return result;
};
*/
