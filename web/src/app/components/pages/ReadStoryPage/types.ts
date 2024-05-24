import { ChapterOutputDto, StoryOutputDto } from "@/app/fakeObjects/fakeStory";

export type Fields = {
  storyChapters?: ChapterOutputDto[];
  story: StoryOutputDto;
  chapter?: ChapterOutputDto;
  onClick: (chapterId: string) => void;
  isLoggedIn: boolean;
};
