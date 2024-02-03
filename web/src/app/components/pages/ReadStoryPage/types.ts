import { ChapterOutputDto, StoryOutputDto } from "@/app/fakeObjects/fakeStory";
import { FullScreenHandle } from "react-full-screen";

export type FIELDS = {
  storyChapters: ChapterOutputDto[];
  story: StoryOutputDto;
  chapter: ChapterOutputDto;
  handle: FullScreenHandle;
  onClick: (chapterId: string) => void;
};
