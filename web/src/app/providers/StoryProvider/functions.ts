import { Opinion } from "@/app/common/types/outputDtos";
import { auth } from "@/app/lib/firebase/config";
import { network } from "./network";
import { StoryProviderStateController } from "./types";

export const useStoryProviderFunctions = (
  stateController: StoryProviderStateController
) => {
  const refreshLikedStories = async () => {};
  const refreshAuthoredStories = async () => {};
  const refreshAllStories = async () => {
    stateController.setLoading.setAllStoriesLoading(true);
    try {
      const res = await network.searchStories({});
      if (res.isErr()) {
        console.error(res.error);
        stateController.setLoading.setAllStoriesLoading(false);
        return;
      }
      const wetStories = res.value;
      stateController.set.setAllStories(wetStories);
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setAllStoriesLoading(false);
  };

  const createStory = async ({ title }: { title: string }) => {
    stateController.setLoading.setCreateStoryLoading(true);
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      console.error("No user logged in");
      stateController.setLoading.setCreateStoryLoading(false);
      return;
    }
    try {
      const authToken = await firebaseUser.getIdToken();
      const res = await network.createStory({ title, authToken });
      if (res.isErr()) {
        console.error(res.error);
        stateController.setLoading.setCreateStoryLoading(false);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setCreateStoryLoading(false);
  };

  const createChapter = async ({
    title,
    content,
    storyId,
    index,
  }: {
    title: string;
    content: string;
    storyId: string;
    index: number;
  }) => {
    stateController.setLoading.setCreateChapterLoading(true);
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      console.error("No user logged in");
      stateController.setLoading.setCreateChapterLoading(false);
      return;
    }
    try {
      const authToken = await firebaseUser.getIdToken();
      const res = await network.createChapter({
        title,
        content,
        storyId,
        index,
        authToken,
      });
      if (res.isErr()) {
        console.error(res.error);
        stateController.setLoading.setCreateChapterLoading(false);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setCreateChapterLoading(false);
  };

  const deleteStory = async ({ id }: { id: string }) => {
    stateController.setLoading.setDeleteStoryLoading(true);
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      stateController.setLoading.setDeleteStoryLoading(false);

      console.error("No user logged in");
      return;
    }
    try {
      const authToken = await firebaseUser.getIdToken();
      const res = await network.deleteStory({ id, authToken });
      if (res.isErr()) {
        console.error(res.error);
        stateController.setLoading.setDeleteStoryLoading(false);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setDeleteStoryLoading(false);
  };

  const deleteChapter = async ({ id }: { id: string }) => {
    stateController.setLoading.setDeleteChapterLoading(true);
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      stateController.setLoading.setDeleteChapterLoading(false);
      console.error("No user logged in");
      return;
    }
    const authToken = await firebaseUser.getIdToken();
    try {
      const res = await network.deleteChapter({ id, authToken });
      if (res.isErr()) {
        console.error(res.error);
        stateController.setLoading.setDeleteChapterLoading(false);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setDeleteChapterLoading(false);
  };

  const updateStory = async ({ id, title }: { id: string; title: string }) => {
    stateController.setLoading.setUpdateStoryLoading(true);
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      console.error("No user logged in");
      stateController.setLoading.setUpdateStoryLoading(false);
      return;
    }
    const authToken = await firebaseUser.getIdToken();
    try {
      const res = await network.updateStory({ id, title, authToken });
      if (res.isErr()) {
        console.error(res.error);
        stateController.setLoading.setUpdateStoryLoading(false);

        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setUpdateStoryLoading(false);
  };

  const updateChapter = async ({
    id,
    title,
    content,
    index,
  }: {
    id: string;
    title?: string;
    content?: string;
    index?: number;
  }) => {
    stateController.setLoading.setUpdateChapterLoading(true);
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      console.error("No user logged in");
      stateController.setLoading.setUpdateChapterLoading(false);
      return;
    }
    try {
      const authToken = await firebaseUser.getIdToken();
      const res = await network.updateChapter({
        id,
        title,
        content,
        index,
        authToken,
      });
      if (res.isErr()) {
        console.error(res.error);
        stateController.setLoading.setUpdateChapterLoading(false);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setUpdateChapterLoading(false);
  };

  const reactToStory = async ({
    id,
    opinion,
  }: {
    id: string;
    opinion: Opinion;
  }) => {
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      console.error("No user logged in");
      return;
    }
    try {
      const authToken = await firebaseUser.getIdToken();
      const res = await network.reactToStory({ id, opinion, authToken });
      if (res.isErr()) {
        console.error(res.error);
        return;
      }
      refreshLikedStories();
    } catch (e) {
      console.error(e);
    }
  };

  return {
    refreshLikedStories,
    refreshAuthoredStories,
    refreshAllStories,
    createStory,
    createChapter,
    deleteStory,
    deleteChapter,
    updateStory,
    updateChapter,
    reactToStory,
  };
};
