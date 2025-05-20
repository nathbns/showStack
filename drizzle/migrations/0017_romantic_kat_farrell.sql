ALTER TABLE "tech_stack" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "tech_stack" ADD COLUMN "stripe_card_col_span" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "tech_stack" ADD COLUMN "stripe_card_row_span" integer DEFAULT 1 NOT NULL;