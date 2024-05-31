/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user_phoneNumber_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "phoneNumber";
