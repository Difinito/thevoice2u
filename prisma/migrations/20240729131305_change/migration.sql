/*
  Warnings:

  - Added the required column `aboutYourself` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOnline` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "aboutYourself" TEXT NOT NULL,
ADD COLUMN     "friends" TEXT[],
ADD COLUMN     "isOnline" BOOLEAN NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL;
