import { PrivateUser } from "@/app/common/types/user";
import { StoryListItemOutputDto } from "@/app/fakeObjects/fakeStory";

export type Fields = {
  isLoggedIn: boolean;
  user?: PrivateUser;
  likedStories: StoryListItemOutputDto[];
  authoredStories: StoryListItemOutputDto[];
  onClick: (storyId: string) => void;
};
