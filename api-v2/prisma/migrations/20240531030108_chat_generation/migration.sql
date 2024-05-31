-- CreateEnum
CREATE TYPE "ChatGenerationSource" AS ENUM ('USER', 'OPEN_AI');

-- CreateTable
CREATE TABLE "chat generation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "userRefId" TEXT NOT NULL,
    "source" "ChatGenerationSource" NOT NULL,

    CONSTRAINT "chat generation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "chat generation" ADD CONSTRAINT "chat generation_userRefId_fkey" FOREIGN KEY ("userRefId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
