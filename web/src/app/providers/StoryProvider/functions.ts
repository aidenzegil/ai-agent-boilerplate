import { auth } from "@/app/lib/firebase/config";
import { network } from "./network";
import { StoryProviderStateController } from "./types";
import { Opinion } from "../../../../../api-v1/src/common/types/enums/opinion";

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
        return;
      }
      const wetStories = res.value;
      stateController.set.setAllStories(wetStories);
    } catch (e) {
      console.error(e);
    }
  };

  const createStory = async ({ title }: { title: string }) => {
    stateController.setLoading.setCreateStoryLoading(true);
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      console.error("No user logged in");
      return;
    }
    const authToken = await firebaseUser.getIdToken();
    try {
      const res = await network.createStory({ title, authToken });
      if (res.isErr()) {
        console.error(res.error);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
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
      return;
    }
    const authToken = await firebaseUser.getIdToken();
    try {
      const res = await network.createChapter({
        title,
        content,
        storyId,
        index,
        authToken,
      });
      if (res.isErr()) {
        console.error(res.error);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
  };

  const deleteStory = async ({ id }: { id: string }) => {
    stateController.setLoading.setDeleteStoryLoading(true);
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      console.error("No user logged in");
      return;
    }
    const authToken = await firebaseUser.getIdToken();
    try {
      const res = await network.deleteStory({ id, authToken });
      if (res.isErr()) {
        console.error(res.error);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
  };

  const deleteChapter = async ({ id }: { id: string }) => {
    stateController.setLoading.setDeleteChapterLoading(true);
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      console.error("No user logged in");
      return;
    }
    const authToken = await firebaseUser.getIdToken();
    try {
      const res = await network.deleteChapter({ id, authToken });
      if (res.isErr()) {
        console.error(res.error);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
  };

  const updateStory = async ({ id, title }: { id: string; title: string }) => {
    stateController.setLoading.setUpdateStoryLoading(true);
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) {
      console.error("No user logged in");
      return;
    }
    const authToken = await firebaseUser.getIdToken();
    try {
      const res = await network.updateStory({ id, title, authToken });
      if (res.isErr()) {
        console.error(res.error);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
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
      return;
    }
    const authToken = await firebaseUser.getIdToken();
    try {
      const res = await network.updateChapter({
        id,
        title,
        content,
        index,
        authToken,
      });
      if (res.isErr()) {
        console.error(res.error);
        return;
      }
      refreshAuthoredStories();
    } catch (e) {
      console.error(e);
    }
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
    const authToken = await firebaseUser.getIdToken();
    try {
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
