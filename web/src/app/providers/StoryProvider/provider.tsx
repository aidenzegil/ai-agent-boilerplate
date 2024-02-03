import { createRegisteredContext } from "react-singleton-context";
import {
  StoryProviderFunctions,
  StoryProviderLoading,
  StoryProviderState,
  StoryProviderStateController,
} from "./types";
import { useStoryProviderStateController } from "./state";
import { useStoryProviderFunctions } from "./functions";
import { useMemo } from "react";
import { Opinion } from "@/app/common/types/outputDtos";

type StoryProviderContext = Omit<
  StoryProviderStateController,
  "set" | "setLoading"
> & {
  storyFunctions: StoryProviderFunctions;
};

const defaultProvider: StoryProviderContext = {
  state: {
    likedStories: undefined,
    authoredStories: undefined,
    allStories: undefined,
    activeStory: undefined,
    activeChapter: undefined,
  },
  loading: {
    loading: false,
    allStoriesLoading: false,
    likedStoriesLoading: false,
    authoredStoriesLoading: false,
    activeChapterLoading: false,
    createChapterLoading: false,
    updateChapterLoading: false,
    deleteChapterLoading: false,
    activeStoryLoading: false,
    createStoryLoading: false,
    updateStoryLoading: false,
    deleteStoryLoading: false,
  },
  storyFunctions: {
    refreshLikedStories: async () => {},
    refreshAuthoredStories: async () => {},
    refreshAllStories: async () => {},
    createStory: async (title: string) => {},
    createChapter: async (
      storyId: string,
      title: string,
      content: string,
      index: number
    ) => {},
    deleteStory: async (id: string) => {},
    deleteChapter: async (id: string) => {},
    updateStory: async (id: string, title: string) => {},
    updateChapter: async (
      id: string,
      title?: string,
      content?: string,
      index?: string
    ) => {},
    reactToStory: async (storyId: string, opinion: Opinion) => {},
  },
};

const StoryConstext = createRegisteredContext<StoryProviderContext>(
  "story-provider-context",
  defaultProvider
);

export const StoryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const stateController = useStoryProviderStateController();
  const storyFunctions = useStoryProviderFunctions(stateController);

  const value = useProviderInterface(
    stateController.state,
    storyFunctions,
    stateController.loading
  );

  // Wrap the children with the context provider
  return (
    <StoryConstext.Provider value={value}>{children}</StoryConstext.Provider>
  );
};

const useProviderInterface = (
  state: StoryProviderState,
  storyFunctions: StoryProviderFunctions,
  loading: StoryProviderLoading
): StoryProviderContext => {
  return useMemo(
    () => ({
      state,
      storyFunctions,
      loading,
    }),
    [state, loading.loading]
  );
};
