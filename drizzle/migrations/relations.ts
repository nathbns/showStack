import { relations } from "drizzle-orm/relations";
import { user, session, account, userStackTechnology, techStack, stackTechnologyItem } from "./schema";

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	sessions: many(session),
	accounts: many(account),
	userStackTechnologies: many(userStackTechnology),
	techStacks: many(techStack),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));

export const userStackTechnologyRelations = relations(userStackTechnology, ({one}) => ({
	user: one(user, {
		fields: [userStackTechnology.userId],
		references: [user.id]
	}),
}));

export const techStackRelations = relations(techStack, ({one, many}) => ({
	user: one(user, {
		fields: [techStack.userId],
		references: [user.id]
	}),
	stackTechnologyItems: many(stackTechnologyItem),
}));

export const stackTechnologyItemRelations = relations(stackTechnologyItem, ({one}) => ({
	techStack: one(techStack, {
		fields: [stackTechnologyItem.techStackId],
		references: [techStack.id]
	}),
}));