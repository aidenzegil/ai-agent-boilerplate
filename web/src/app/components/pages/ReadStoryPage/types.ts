import { ChapterOutputDto, StoryOutputDto } from "@/app/fakeObjects/fakeStory";
import { FullScreenHandle } from "react-full-screen";

export type Fields = {
  storyChapters: ChapterOutputDto[];
  story: StoryOutputDto;
  chapter: ChapterOutputDto;
  handle: FullScreenHandle;
  onClick: (chapterId: string) => void;
};
