CREATE TABLE "user_tag" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"color" text DEFAULT '#3B82F6' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user_tag" ADD CONSTRAINT "user_tag_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;