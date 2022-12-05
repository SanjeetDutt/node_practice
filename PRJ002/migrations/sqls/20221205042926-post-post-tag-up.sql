/* Replace with your SQL commands */
CREATE TABLE "blogging"."post_tag" (
  "id" SERIAL PRIMARY KEY,
  "post_id" int NOT NULL,
  "tag_id" int NOT NULL
);

ALTER TABLE "blogging"."post_tag" ADD FOREIGN KEY ("post_id") REFERENCES "blogging"."posts" ("id");

ALTER TABLE "blogging"."post_tag" ADD FOREIGN KEY ("tag_id") REFERENCES "blogging"."tags" ("id");