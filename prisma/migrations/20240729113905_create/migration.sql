/*
  Warnings:

  - You are about to drop the column `question` on the `Faq` table. All the data in the column will be lost.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `DailyVerse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PastorsModel` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pageId` to the `DailyAffirmation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answer` to the `Faq` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DailyAffirmation" ADD COLUMN     "pageId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Faq" DROP COLUMN "question",
ADD COLUMN     "answer" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Post_id_seq";

-- DropTable
DROP TABLE "DailyVerse";

-- DropTable
DROP TABLE "PastorsModel";

-- CreateTable
CREATE TABLE "ChurchPage" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pageName" TEXT NOT NULL,
    "aboutPage" TEXT NOT NULL,
    "backgroundImage" TEXT NOT NULL,
    "pageImage" TEXT NOT NULL,
    "desciples" TEXT[],
    "webstrings" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "pageverified" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ChurchPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Counsellors" (
    "id" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "followers" TEXT[],
    "about" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "dateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Counsellors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pastors" (
    "id" TEXT NOT NULL,
    "pastorName" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL,
    "urlAvatar" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Pastors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PastorQuotes" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "pastorId" TEXT NOT NULL,

    CONSTRAINT "PastorQuotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupFamily" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groupName" TEXT NOT NULL,
    "groupAbout" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL,
    "familyMembers" TEXT[],
    "rules" TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "GroupFamily_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChurchPage" ADD CONSTRAINT "ChurchPage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyAffirmation" ADD CONSTRAINT "DailyAffirmation_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "ChurchPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Counsellors" ADD CONSTRAINT "Counsellors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pastors" ADD CONSTRAINT "Pastors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PastorQuotes" ADD CONSTRAINT "PastorQuotes_pastorId_fkey" FOREIGN KEY ("pastorId") REFERENCES "Pastors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupFamily" ADD CONSTRAINT "GroupFamily_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
