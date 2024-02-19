import { StoryListItemOutputDto } from "@/app/fakeObjects/fakeStory";
import { StoryProviderState } from "@/app/providers/StoryProvider/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type Fields = {
  popularStories: StoryListItemOutputDto[] | undefined;
  onClick: (storyId: string, chapterIds: string[]) => void;
};

export type useHomePageDataProps = {
  router: AppRouterInstance;
  state: StoryProviderState;
};
