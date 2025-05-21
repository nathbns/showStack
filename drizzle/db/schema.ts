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
  username: text("username").unique(),  // Nouveau champ username, unique mais nullable pour la transition
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  description: text("description"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  layoutConfig: text("layout_config"),
  shareCount: integer("share_count").default(0).notNull(),
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
    .unique() // Un seul techStack par utilisateur
    .references(() => user.id, { onDelete: "cascade" }),
  upvotes: integer("upvotes").default(0).notNull(),
  showStripeCard: boolean("show_stripe_card").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  stripeCardColSpan: integer("stripe_card_col_span").default(1).notNull(),
  stripeCardRowSpan: integer("stripe_card_row_span").default(1).notNull(),
  stripeCardOrder: integer("stripe_card_order").default(0).notNull(),
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
  isProject: boolean("is_project").default(false),
  favicon: text("favicon"),
  url: text("url"),
  description: text("description"),
  order: integer("order").default(0),
  stars: integer("stars").default(0),
  forks: integer("forks").default(0),
  mrr: integer("mrr"), // Revenu Mensuel Récurrent en centimes
  mrrCurrency: text("mrr_currency"), // Ex: "USD", "EUR"
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

// Table pour les connexions Stripe
export const stripeConnection = pgTable("stripe_connection", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" })
    .unique(), // Un utilisateur = une connexion Stripe
  stripeUserId: text("stripe_user_id").notNull(), // ID du compte Stripe connecté (acct_...)
  accessToken: text("access_token").notNull(), // DOIT être chiffré en BDD
  refreshToken: text("refresh_token"), // DOIT être chiffré en BDD
  scope: text("scope"), // Permissions accordées
  livemode: boolean("livemode").notNull(),
  stripePublishableKey: text("stripe_publishable_key"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"), // Si applicable
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const stripeConnectionRelations = relations(
  stripeConnection,
  ({ one }) => ({
    user: one(user, {
      fields: [stripeConnection.userId],
      references: [user.id],
    }),
  })
);

// Mettre à jour les relations utilisateur
export const userRelations = relations(user, ({ many, one }) => ({
  sessions: many(session),
  accounts: many(account),
  stackTechnologies: many(userStackTechnologies), // Conserver si c'est une table différente/héritée
  techStack: one(techStack), // Un seul techStack par utilisateur
  stripeConnection: one(stripeConnection), // Ajout de la relation à la connexion Stripe
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
