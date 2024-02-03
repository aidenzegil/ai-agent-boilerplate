import { ChapterOutputDto, StoryOutputDto } from "@/app/fakeObjects/fakeStory";

export type FIELDS = {
  storyChapters: ChapterOutputDto[];
  story: StoryOutputDto;
  chapter: ChapterOutputDto;
  onClick: (chapterId: string) => void;
};
