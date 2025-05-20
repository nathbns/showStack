ALTER TABLE "user" DROP CONSTRAINT "user_username_unique";--> statement-breakpoint
ALTER TABLE "tech_stack" DROP COLUMN "name";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "username";--> statement-breakpoint
ALTER TABLE "tech_stack" ADD CONSTRAINT "tech_stack_user_id_unique" UNIQUE("user_id");