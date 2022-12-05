/* Replace with your SQL commands */

CREATE TABLE "blogging"."comments" (
  "id" SERIAL PRIMARY KEY,
  "post_id" int,
  "parent_id" int,
  "title" varchar NOT NULL,
  "content" text,
  "approved" boolean DEFAULT false,
  "name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "create_ts" timestamp NOT NULL DEFAULT (now()),
  "update_ts" timestamp NOT NULL DEFAULT (now()),
  "delete_ts" timestamp DEFAULT null
);

ALTER TABLE "blogging"."comments" ADD FOREIGN KEY ("post_id") REFERENCES "blogging"."posts" ("id");

ALTER TABLE "blogging"."comments" ADD FOREIGN KEY ("parent_id") REFERENCES "blogging"."comments" ("id");