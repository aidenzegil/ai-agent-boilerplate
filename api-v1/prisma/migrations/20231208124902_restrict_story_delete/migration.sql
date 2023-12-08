-- DropForeignKey
ALTER TABLE "chapter_story" DROP CONSTRAINT "chapter_story_storyId_fkey";

-- AddForeignKey
ALTER TABLE "chapter_story" ADD CONSTRAINT "chapter_story_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
