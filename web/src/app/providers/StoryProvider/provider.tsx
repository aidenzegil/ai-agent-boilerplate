import { usePathname } from "next/navigation";
import { useContext, useMemo } from "react";
import { createRegisteredContext } from "react-singleton-context";
import { useStoryProviderFunctions } from "./functions";
import { useStoryProviderStateController } from "./state";
import {
  StoryProviderFunctions,
  StoryProviderLoading,
  StoryProviderState,
  StoryProviderStateController,
} from "./types";

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
    createStory: async () => {},
    createChapter: async () => {},
    deleteStory: async () => {},
    deleteChapter: async () => {},
    updateStory: async () => {},
    updateChapter: async () => {},
    reactToStory: async () => {},
  },
};

const StoryContext = createRegisteredContext<StoryProviderContext>(
  "story-provider-context",
  defaultProvider
);

export const StoryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const currentUrl = usePathname();

  const stateController = useStoryProviderStateController();
  const storyFunctions = useStoryProviderFunctions(stateController, currentUrl);

  const value = useProviderInterface(
    stateController.state,
    storyFunctions,
    stateController.loading
  );

  // Wrap the children with the context provider
  return (
    <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
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

export const useStoryProviderContext = () => useContext(StoryContext);
