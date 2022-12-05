/* Replace with your SQL commands */
CREATE TABLE "blogging"."tags" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" text default null,
  "create_ts" timestamp NOT NULL DEFAULT (now()),
  "update_ts" timestamp NOT NULL DEFAULT (now()),
  "delete_ts" timestamp DEFAULT null
);


