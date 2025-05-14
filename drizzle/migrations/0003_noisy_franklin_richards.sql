CREATE TABLE "stack_technology_item" (
	"id" serial PRIMARY KEY NOT NULL,
	"tech_stack_id" integer NOT NULL,
	"technology_id" text NOT NULL,
	"name" text NOT NULL,
	"color" text NOT NULL,
	"category" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tech_stack" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text,
	"description" text,
	"is_public" boolean DEFAULT false NOT NULL,
	"upvotes" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "stack_technology_item" ADD CONSTRAINT "stack_technology_item_tech_stack_id_tech_stack_id_fk" FOREIGN KEY ("tech_stack_id") REFERENCES "public"."tech_stack"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tech_stack" ADD CONSTRAINT "tech_stack_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;