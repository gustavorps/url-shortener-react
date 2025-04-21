-- CreateTable
CREATE TABLE "short_urls" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT,
    "url" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "removed_at" TIMESTAMPTZ(6),
    "owner_id" TEXT NOT NULL DEFAULT 'NULL',

    CONSTRAINT "short_urls_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "short_urls_slug_key" ON "short_urls"("slug");
