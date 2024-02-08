import { ChapterOutputDto } from "@/app/fakeObjects/fakeStory";

export const useReadStoryPageData = (storyChapters: ChapterOutputDto[]) => {
  const onClick = (chapterId: string) => {
    console.log(chapterId);
  };

  const sortedChapters = storyChapters.sort((a, b) => a.index - b.index);

  return { onClick, sortedChapters };
};
