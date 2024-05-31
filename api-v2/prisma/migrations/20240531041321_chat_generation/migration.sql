/*
  Warnings:

  - The values [USER] on the enum `ChatGenerationSource` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `message` on the `chat generation` table. All the data in the column will be lost.
  - Added the required column `prompt` to the `chat generation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `response` to the `chat generation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ChatGenerationSource_new" AS ENUM ('OPEN_AI');
ALTER TABLE "chat generation" ALTER COLUMN "source" TYPE "ChatGenerationSource_new" USING ("source"::text::"ChatGenerationSource_new");
ALTER TYPE "ChatGenerationSource" RENAME TO "ChatGenerationSource_old";
ALTER TYPE "ChatGenerationSource_new" RENAME TO "ChatGenerationSource";
DROP TYPE "ChatGenerationSource_old";
COMMIT;

-- AlterTable
ALTER TABLE "chat generation" DROP COLUMN "message",
ADD COLUMN     "prompt" TEXT NOT NULL,
ADD COLUMN     "response" TEXT NOT NULL;
