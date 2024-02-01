import { ChapterOutputDto, StoryListItemOutputDto, StoryOutputDto } from "@/app/common/types/outputDtos";
import { Dispatch, SetStateAction } from "react";

export type StoryProviderState = {
  likedStories: StoryListItemOutputDto[] | undefined;
  authoredStories: StoryListItemOutputDto[] | undefined;
  allStories: StoryListItemOutputDto[] | undefined;
  activeStory: StoryOutputDto | undefined;
  activeChapter: ChapterOutputDto | undefined;
};

export type StoryProviderLoading = {
  loading: boolean;
  allStoriesLoading: boolean;
  likedStoriesLoading: boolean;
  authoredStoriesLoading: boolean;
  activeChapterLoading: boolean;
  createChapterLoading: boolean;
  updateChapterLoading: boolean;
  deleteChapterLoading: boolean;
  activeStoryLoading: boolean;
  createStoryLoading: boolean;
  updateStoryLoading: boolean;
  deleteStoryLoading: boolean;
};

export type StoryProviderSetLoading = {
  setAllStoriesLoading: Dispatch<SetStateAction<boolean>>;
  setLikedStoriesLoading: Dispatch<SetStateAction<boolean>>;
  setAuthoredStoriesLoading: Dispatch<SetStateAction<boolean>>;
  setActiveChapterLoading: Dispatch<SetStateAction<boolean>>;
  setCreateChapterLoading: Dispatch<SetStateAction<boolean>>;
  setUpdateChapterLoading: Dispatch<SetStateAction<boolean>>;
  setDeleteChapterLoading: Dispatch<SetStateAction<boolean>>;
  setActiveStoryLoading: Dispatch<SetStateAction<boolean>>;
  setCreateStoryLoading: Dispatch<SetStateAction<boolean>>;
  setUpdateStoryLoading: Dispatch<SetStateAction<boolean>>;
  setDeleteStoryLoading: Dispatch<SetStateAction<boolean>>;
};

export type StoryProviderStateController = {
  state: StoryProviderState;
  set: StoryProviderSet;
  // Network State
  setLoading: StoryProviderSetLoading;
  loading: StoryProviderLoading;
};

export type StoryProviderSet = {
  setLikedStories: Dispatch<
    SetStateAction<StoryListItemOutputDto[] | undefined>
  >;
  setAuthoredStories: Dispatch<
    SetStateAction<StoryListItemOutputDto[] | undefined>
  >;
  setAllStories: Dispatch<SetStateAction<StoryListItemOutputDto[] | undefined>>;
  setActiveStory: Dispatch<SetStateAction<StoryListItemOutputDto | undefined>>;
  setActiveChapter: Dispatch<SetStateAction<string | undefined>>;
};

export type StoryProviderFunctions = {};
