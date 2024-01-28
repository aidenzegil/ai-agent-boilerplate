import { StoryListItemOutputDto } from "@/app/fakeObjects/fakeStory";
import { FakeUser } from "@/app/fakeObjects/fakeUser";

export type Fields = {
  currentUser: FakeUser;
  likedStories: StoryListItemOutputDto[];
  authoredStories: StoryListItemOutputDto[];
  onClick: (storyId: string) => void;
};
