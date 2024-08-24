-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyAffirmation" (
    "id" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "memorise" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "prayer" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "dailyReading" TEXT NOT NULL,
    "propheticDeclaration" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyAffirmation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PastorsModel" (
    "id" TEXT NOT NULL,
    "pastorName" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL,
    "urlAvatar" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL,

    CONSTRAINT "PastorsModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyVerse" (
    "id" TEXT NOT NULL,
    "bible" TEXT NOT NULL,
    "writeUp" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyVerse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "writeUp" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
