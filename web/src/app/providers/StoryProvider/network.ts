import { storiesController } from "@/app/lib/server/controllers/stories/controller";
import { params } from "@/app/lib/server/controllers/stories/params";

export const network = {
  createChapter: ({
    title,
    content,
    index,
    storyId,
    authToken,
  }: params.CreateChapter & { authToken: string }) => {
    return storiesController({ authToken }).createChapter({
      title,
      content,
      index,
      storyId,
    });
  },
  createStory: ({
    title,
    authToken,
  }: params.CreateStory & { authToken: string }) => {
    return storiesController({ authToken }).createStory({
      title,
    });
  },
  deleteChapter: ({
    id,
    authToken,
  }: params.DeleteChapter & { authToken: string }) => {
    return storiesController({ authToken }).deleteChapter({
      id,
    });
  },
  deleteStory: ({
    id,
    authToken,
  }: params.DeleteStory & { authToken: string }) => {
    return storiesController({ authToken }).deleteStory({
      id,
    });
  },
  getChapter: ({ id }: params.GetChapter) => {
    return storiesController({}).getChapter({
      id,
    });
  },
  getStory: ({ id }: params.GetStory) => {
    return storiesController({}).getStory({
      id,
    });
  },
  reactToStory: ({
    id,
    opinion,
    authToken,
  }: params.ReactToStory & { authToken: string }) => {
    return storiesController({ authToken }).reactToStory({
      id,
      opinion,
    });
  },
  searchStories: ({ limit, page }: params.SearchStories) => {
    return storiesController({}).searchStories({
      limit,
      page,
    });
  },
  updateChapter: ({
    id,
    title,
    content,
    index,
    authToken,
  }: params.UpdateChapter & { authToken: string }) => {
    return storiesController({ authToken }).updateChapter({
      id,
      title,
      content,
      index,
    });
  },
  updateStory: ({
    id,
    title,
    authToken,
  }: params.UpdateStory & { authToken: string }) => {
    return storiesController({ authToken }).updateStory({
      id,
      title,
    });
  },
};
