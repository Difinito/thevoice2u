/*
  Warnings:

  - You are about to drop the column `image` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "image",
ALTER COLUMN "urlAvatar" SET DATA TYPE TEXT;
