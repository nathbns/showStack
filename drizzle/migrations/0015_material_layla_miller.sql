CREATE TABLE "stripe_connection" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"stripe_user_id" text NOT NULL,
	"access_token" text NOT NULL,
	"refresh_token" text,
	"scope" text,
	"livemode" boolean NOT NULL,
	"stripe_publishable_key" text,
	"access_token_expires_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "stripe_connection_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
ALTER TABLE "stack_technology_item" ADD COLUMN "mrr" integer;--> statement-breakpoint
ALTER TABLE "stack_technology_item" ADD COLUMN "mrr_currency" text;--> statement-breakpoint
ALTER TABLE "stripe_connection" ADD CONSTRAINT "stripe_connection_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;