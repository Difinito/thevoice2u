/*
  Warnings:

  - You are about to drop the column `aboutYourself` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `backgroundImage` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `church` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `friends` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `isOnline` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `relationship` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `urlAvatar` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `Users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChurchPage" DROP CONSTRAINT "ChurchPage_userId_fkey";

-- DropForeignKey
ALTER TABLE "Counsellors" DROP CONSTRAINT "Counsellors_userId_fkey";

-- DropForeignKey
ALTER TABLE "GroupFamily" DROP CONSTRAINT "GroupFamily_userId_fkey";

-- DropForeignKey
ALTER TABLE "Pastors" DROP CONSTRAINT "Pastors_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "aboutYourself",
DROP COLUMN "backgroundImage",
DROP COLUMN "church",
DROP COLUMN "country",
DROP COLUMN "friends",
DROP COLUMN "gender",
DROP COLUMN "isOnline",
DROP COLUMN "number",
DROP COLUMN "relationship",
DROP COLUMN "urlAvatar",
DROP COLUMN "username",
DROP COLUMN "verified";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "aboutYourself" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL,
    "urlAvatar" TEXT NOT NULL,
    "backgroundImage" TEXT NOT NULL,
    "church" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "friends" TEXT[],
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChurchPage" ADD CONSTRAINT "ChurchPage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Counsellors" ADD CONSTRAINT "Counsellors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pastors" ADD CONSTRAINT "Pastors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupFamily" ADD CONSTRAINT "GroupFamily_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
