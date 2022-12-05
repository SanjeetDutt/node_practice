/* Replace with your SQL commands */

CREATE TABLE "blogging"."post_metas" (
  "id" SERIAL PRIMARY KEY,
  "post_id" int NOT NULL,
  "key" varchar NOT NULL,
  "content" text NOT NULL,
  "create_ts" timestamp NOT NULL DEFAULT (now()),
  "update_ts" timestamp NOT NULL DEFAULT (now()),
  "delete_ts" timestamp DEFAULT null
);

ALTER TABLE "blogging"."post_metas" ADD FOREIGN KEY ("post_id") REFERENCES "blogging"."posts" ("id");