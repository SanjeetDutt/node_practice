/* Replace with your SQL commands */

CREATE TABLE "blogging"."meta_keys" (
  "id" SERIAL PRIMARY KEY,
  "key" varchar UNIQUE NOT NULL,
  "name" varchar NOT NULL,
  "info" varchar,
  "create_ts" timestamp NOT NULL DEFAULT (now()),
  "update_ts" timestamp NOT NULL DEFAULT (now()),
  "delete_ts" timestamp DEFAULT null
);

ALTER TABLE "blogging"."post_metas" ADD FOREIGN KEY ("key") REFERENCES "blogging"."meta_keys" ("key");