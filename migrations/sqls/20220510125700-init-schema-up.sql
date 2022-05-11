/* Replace with your SQL commands */
CREATE TABLE "category" (
  "id" bigserial PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "product" (
  "id" bigserial PRIMARY KEY,
  "name" varchar NOT NULL,
  "category_id" bigint NOT NULL,
  "stock" integer NOT NULL,
  "price" integer NOT NULL,
  "supplier" varchar NOT NULL
);

CREATE INDEX ON "category" ("name");

CREATE INDEX ON "product" ("name");

ALTER TABLE "product" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");