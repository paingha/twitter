CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "handle" varchar,
  "role" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "tweets" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "content" varchar,
  "media" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "roles" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "name" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "followers" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "follower_id" int,
  "created_at" timestamp,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

ALTER TABLE "tweets" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "roles" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "followers" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
