/* Replace with your SQL commands */
create schema blogging;


CREATE TABLE "blogging"."posts" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "title" varchar NOT NULL,
  "slug" varchar UNIQUE NOT NULL,
  "summary" text NOT NULL,
  "content" text,
  "effective_date" date DEFAULT (current_date),
  "end_date" date default '2199-12-31'::date,
  "create_ts" timestamp NOT NULL DEFAULT (now()),
  "update_ts" timestamp NOT NULL DEFAULT (now()),
  "delete_ts" timestamp DEFAULT null
);

ALTER TABLE "blogging"."posts" ADD FOREIGN KEY ("user_id") REFERENCES public."users" ("id");