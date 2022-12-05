/* Replace with your SQL commands */

CREATE TABLE "blogging"."post_category" (
  "id" SERIAL PRIMARY KEY,
  "post_id" int NOT NULL,
  "category_id" int NOT NULL
);

ALTER TABLE "blogging"."post_category" ADD FOREIGN KEY ("post_id") REFERENCES "blogging"."posts" ("id");

ALTER TABLE "blogging"."post_category" ADD FOREIGN KEY ("category_id") REFERENCES "blogging"."categories" ("id");