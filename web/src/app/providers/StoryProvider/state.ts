import { useState } from "react";
import { PrivateUser } from "@/app/common/types/user";
import useLocalStorage from "../utils/useLocalStorage";
import safelyParseJSON from "../utils/safelyParseJson";
import { StoryProviderStateController } from "./types";
import { StoryListItemOutputDto } from "../../../../../api-v1/src/controllers/stories/dto/output.dto";

export const useStoryProviderStateController =
  (): StoryProviderStateController => {
    const [allStoriesLoading, setAllStoriesLoading] = useState(false);
    const [likedStoriesLoading, setLikedStoriesLoading] = useState(false);
    const [authoredStoriesLoading, setAuthoredStoriesLoading] = useState(false);
    const [activeChapterLoading, setActiveChapterLoading] = useState(false);
    const [createChapterLoading, setCreateChapterLoading] = useState(false);
    const [updateChapterLoading, setUpdateChapterLoading] = useState(false);
    const [deleteChapterLoading, setDeleteChapterLoading] = useState(false);
    const [activeStoryLoading, setActiveStoryLoading] = useState(false);
    const [createStoryLoading, setCreateStoryLoading] = useState(false);
    const [updateStoryLoading, setUpdateStoryLoading] = useState(false);
    const [deleteStoryLoading, setDeleteStoryLoading] = useState(false);

    const loading =
      allStoriesLoading ||
      likedStoriesLoading ||
      authoredStoriesLoading ||
      activeChapterLoading ||
      createChapterLoading ||
      updateChapterLoading ||
      deleteChapterLoading ||
      activeStoryLoading ||
      createStoryLoading ||
      updateStoryLoading ||
      deleteStoryLoading;

    const [allStories, setAllStories] = useLocalStorage<
      StoryListItemOutputDto[] | undefined
    >(
      "StoryProviderAllStories",
      safelyParseJSON<StoryListItemOutputDto[] | undefined>(
        sessionStorage.getItem("StoryProviderAllStories") || ""
      ) || undefined
    );

    const [likedStories, setLikedStories] = useLocalStorage<
      StoryListItemOutputDto[] | undefined
    >(
      "StoryProviderLikedStories",
      safelyParseJSON<StoryListItemOutputDto[] | undefined>(
        sessionStorage.getItem("StoryProviderLikedStories") || ""
      ) || undefined
    );

    const [authoredStories, setAuthoredStories] = useLocalStorage<
      StoryListItemOutputDto[] | undefined
    >(
      "StoryProviderAuthoredStories",
      safelyParseJSON<StoryListItemOutputDto[] | undefined>(
        sessionStorage.getItem("StoryProviderAuthoredStories") || ""
      ) || undefined
    );

    const activeStory = undefined; // TODO: Implement this
    const activeChapter = undefined; // TODO: Implement this

    return {
      state: {
        allStories,
        likedStories,
        authoredStories,
        activeStory,
        activeChapter,
      },
      set: {
        setAllStories,
        setLikedStories,
        setAuthoredStories,
        setActiveStory: () => {}, // TODO: Implement this
        setActiveChapter: () => {}, // TODO: Implement this
      },
      // Network State
      setLoading: {
        setAllStoriesLoading,
        setLikedStoriesLoading,
        setAuthoredStoriesLoading,
        setActiveChapterLoading,
        setCreateChapterLoading,
        setUpdateChapterLoading,
        setDeleteChapterLoading,
        setActiveStoryLoading,
        setCreateStoryLoading,
        setUpdateStoryLoading,
        setDeleteStoryLoading,
      },
      loading: {
        loading,
        allStoriesLoading,
        likedStoriesLoading,
        authoredStoriesLoading,
        activeChapterLoading,
        createChapterLoading,
        updateChapterLoading,
        deleteChapterLoading,
        activeStoryLoading,
        createStoryLoading,
        updateStoryLoading,
        deleteStoryLoading,
      },
    };
  };
