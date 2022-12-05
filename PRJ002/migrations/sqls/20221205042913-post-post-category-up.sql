/* Replace with your SQL commands */

CREATE TABLE "blogging"."post_categories" (
  "id" SERIAL PRIMARY KEY,
  "post_id" int NOT NULL,
  "category_id" int NOT NULL,
  "create_ts" timestamp NOT NULL DEFAULT (now()),
  "update_ts" timestamp NOT NULL DEFAULT (now()),
  "delete_ts" timestamp DEFAULT null
);

ALTER TABLE "blogging"."post_categories" ADD FOREIGN KEY ("post_id") REFERENCES "blogging"."posts" ("id");

ALTER TABLE "blogging"."post_categories" ADD FOREIGN KEY ("category_id") REFERENCES "blogging"."categories" ("id");