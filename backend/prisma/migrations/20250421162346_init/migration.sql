/* WARNING
When doing this you need to be sure that the length of the IDs you are creating is sufficient 
to avoid collisions over time as the number of objects you've created grows, which can be 
counter-intuitive because of the Birthday Paradox. So you will likely want a length 
greater (or much greater) than 6 for any reasonably commonly created object.
*/
CREATE OR REPLACE FUNCTION gen_random_slug(size INT) RETURNS TEXT AS $$
DECLARE
  characters TEXT := 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  bytes BYTEA := gen_random_bytes(size);
  l INT := length(characters);
  i INT := 0;
  output TEXT := '';
BEGIN
  WHILE i < size LOOP
    output := output || substr(characters, get_byte(bytes, i) % l + 1, 1);
    i := i + 1;
  END LOOP;
  RETURN output;
END;
$$ LANGUAGE plpgsql VOLATILE;

/*
This is an extension for PostgreSQL that provides a uri data type. Advantages over using plain text for storing URIs include:
- URI syntax checking
- functions for extracting URI components
- human-friendly sorting
*/
--CREATE EXTENSION uri;

-- CreateTable
CREATE TABLE "short_urls" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    "name" TEXT,
    "url" TEXT NOT NULL,
    -- This is a 6 character slug, which is 62^6 = 56,800,235,584 combinations
    -- Read the WARNING above for more details
    "slug" TEXT NOT NULL DEFAULT gen_random_slug(6) UNIQUE,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "removed_at" TIMESTAMPTZ(6),
    "owner_id" TEXT NOT NULL DEFAULT 'NULL',

    CONSTRAINT "short_urls_pkey" PRIMARY KEY ("uuid")
);
