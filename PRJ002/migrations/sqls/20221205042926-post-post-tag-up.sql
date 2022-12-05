/* Replace with your SQL commands */
CREATE TABLE "blogging"."post_tags" (
  "id" SERIAL PRIMARY KEY,
  "post_id" int NOT NULL,
  "tag_id" int NOT NULL,
  "create_ts" timestamp NOT NULL DEFAULT (now()),
  "update_ts" timestamp NOT NULL DEFAULT (now()),
  "delete_ts" timestamp DEFAULT null
);

ALTER TABLE "blogging"."post_tags" ADD FOREIGN KEY ("post_id") REFERENCES "blogging"."posts" ("id");

ALTER TABLE "blogging"."post_tags" ADD FOREIGN KEY ("tag_id") REFERENCES "blogging"."tags" ("id");