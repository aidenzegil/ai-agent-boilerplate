import { StoryListItemOutputDto } from "@/app/fakeObjects/fakeStory";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type Fields = {
  popularStories: StoryListItemOutputDto[];
  onClick: (storyId: string) => void;
};

export type useHomePageDataProps = {
  router: AppRouterInstance;
};
