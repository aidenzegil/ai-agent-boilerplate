import { StoryListItemOutputDto } from "@/app/fakeObjects/fakeStory";

export type Fields = {
  popularStories: StoryListItemOutputDto[];
  onClick: (storyId: string) => void;
};
