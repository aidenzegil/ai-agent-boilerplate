import { StoryListItemOutputDto } from "@/app/fakeObjects/fakeStory";

export type FIELDS = {
  popularStories: StoryListItemOutputDto[];
  onClick: (storyId: string) => void;
  activeStoryId?: string;
};
