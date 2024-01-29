import { Ok, Err } from "@/app/common/types/result";
import { POST, GET } from "../../api/axiosInstance";
import { ApiResponse } from "../../types/apiResponse";
import {
  ChapterOutputDto,
  StoryListItemOutputDto,
  StoryOutputDto,
} from "../../../../../../../api-v1/src/controllers/stories/dto/output.dto";
import { ResponseStatus } from "../../../../../../../api-v1/src/common/types/enums/responseStatus";
import { params } from "./params";

interface Dependencies {
  authToken?: string;
}

interface Methods {
  createChapter: (
    params: params.CreateChapter
  ) => Promise<ApiResponse<ChapterOutputDto>>;
  createStory: (
    params: params.CreateStory
  ) => Promise<ApiResponse<StoryOutputDto>>;
  deleteChapter: (
    params: params.DeleteChapter
  ) => Promise<ApiResponse<ResponseStatus>>;
  deleteStory: (
    params: params.DeleteStory
  ) => Promise<ApiResponse<ResponseStatus>>;
  getChapter: (
    params: params.GetChapter
  ) => Promise<ApiResponse<ChapterOutputDto>>;
  getStory: (params: params.GetStory) => Promise<ApiResponse<StoryOutputDto>>;
  reactToStory: (
    params: params.ReactToStory
  ) => Promise<ApiResponse<StoryOutputDto>>;
  searchStories: (
    params: params.SearchStories
  ) => Promise<ApiResponse<StoryListItemOutputDto[]>>;
  updateChapter: (
    params: params.UpdateChapter
  ) => Promise<ApiResponse<ChapterOutputDto>>;
  updateStory: (
    params: params.UpdateStory
  ) => Promise<ApiResponse<StoryOutputDto>>;
}

type StoriesController = (deps: Dependencies) => Methods;

/**
 * Stories Controller
 * @param authToken The authentication token
 * @returns An object containing various controller methods for managing stories and chapters
 */
export const storiesController: StoriesController = ({ authToken }) => ({
  /**
   * Create a new chapter
   * @param content The content of the chapter
   * @param index The index of the chapter
   * @param storyId The story id of the chapter
   * @param title The title of the chapter
   * @returns Promise that resolves to an ApiResponse containing a ChapterOutputDto object if successful, otherwise an error
   */
  createChapter: async ({
    content,
    index,
    storyId,
    title,
  }): Promise<ApiResponse<ChapterOutputDto>> => {
    const res = await POST<ChapterOutputDto>({
      authToken,
      body: { content, index, storyId, title },
      path: "/stories/chapter",
      requiresAuth: true,
    });
    if (res.isOk()) {
      const chapterOutputDto: ChapterOutputDto = {
        content: res.value.content,
        id: res.value.id,
        index: res.value.index,
        storyId: res.value.storyId,
        title: res.value.title,
      };
      return Ok(chapterOutputDto);
    }
    return Err(res.error);
  },

  /**
   * Create a new story
   * @param title The title of the story
   * @returns Promise that resolves to an ApiResponse containing a StoryOutputDto object if successful, otherwise an error
   */
  createStory: async ({ title }): Promise<ApiResponse<StoryOutputDto>> => {
    const res = await POST<StoryOutputDto>({
      authToken,
      body: { title },
      path: "/stories",
      requiresAuth: true,
    });
    if (res.isOk()) {
      const storyOutputDto: StoryOutputDto = {
        ...res.value,
      };
      return Ok(storyOutputDto);
    }
    return Err(res.error);
  },

  /**
   * Delete a chapter
   * @param chapterId The chapter id of the chapter to delete
   * @returns Promise that resolves to an ApiResponse containing a ResponseStatus object if successful, otherwise an error
   */
  deleteChapter: async ({
    id: chapterId,
  }): Promise<ApiResponse<ResponseStatus>> => {
    const res = await POST<ResponseStatus>({
      authToken,
      path: `/stories/chapter/${chapterId}`,
      requiresAuth: true,
    });
    if (res.isOk()) {
      const responseStatus = res.value;
      return Ok(responseStatus);
    }
    return Err(res.error);
  },

  /**
   * Delete a story
   * @param id The story id of the story to delete
   */
  deleteStory: async ({
    id: storyId,
  }): Promise<ApiResponse<ResponseStatus>> => {
    const res = await POST<ResponseStatus>({
      authToken,
      path: `/stories/${storyId}`,
      requiresAuth: true,
    });
    if (res.isOk()) {
      const responseStatus = res.value;
      return Ok(responseStatus);
    }
    return Err(res.error);
  },

  /**
   * Get a chapter
   * @param id The chapter id of the chapter to retrieve
   * @returns Promise that resolves to an ApiResponse containing a ChapterOutputDto object if successful, otherwise an error
   */
  getChapter: async ({
    id: chapterId,
  }): Promise<ApiResponse<ChapterOutputDto>> => {
    const res = await GET<ChapterOutputDto>({
      path: `/stories/chapter/${chapterId}`,
      requiresAuth: false,
    });
    if (res.isOk()) {
      const chapterOutputDto: ChapterOutputDto = {
        ...res.value,
      };
      return Ok(chapterOutputDto);
    }
    return Err(res.error);
  },

  /**
   * Get a story
   * @param id The story id of the story to retrieve
   * @returns Promise that resolves to an ApiResponse containing a StoryOutputDto object if successful, otherwise an error
   */
  getStory: async ({ id: storyId }): Promise<ApiResponse<StoryOutputDto>> => {
    const res = await GET<StoryOutputDto>({
      path: `/stories/${storyId}`,
      requiresAuth: false,
    });
    if (res.isOk()) {
      const storyOutputDto: StoryOutputDto = {
        ...res.value,
      };
      return Ok(storyOutputDto);
    }
    return Err(res.error);
  },

  /**
   * React to a story
   * @param id The story id of the story to react to
   * @returns Promise that resolves to an ApiResponse containing a StoryOutputDto object if successful, otherwise an error
   */
  reactToStory: async ({
    id: storyId,
  }): Promise<ApiResponse<StoryOutputDto>> => {
    const res = await POST<StoryOutputDto>({
      authToken,
      path: `/stories/${storyId}/react`,
      requiresAuth: true,
    });
    if (res.isOk()) {
      const storyOutputDto: StoryOutputDto = {
        ...res.value,
      };
      return Ok(storyOutputDto);
    }
    return Err(res.error);
  },

  /**
   * Search for stories
   * @param limit The maximum number of stories to return
   * @param page The page of stories to return
   * @returns Promise that resolves to an ApiResponse containing a StoryOutputDto object if successful, otherwise an error
   */
  searchStories: async ({
    limit,
    page,
  }): Promise<ApiResponse<StoryListItemOutputDto[]>> => {
    const res = await GET<StoryListItemOutputDto[]>({
      path: `/stories/search?limit=${limit}&page=${page}`,
      requiresAuth: false,
    });
    if (res.isOk()) {
      const storyListItems: StoryListItemOutputDto[] = {
        ...res.value,
      };
      return Ok(storyListItems);
    }
    return Err(res.error);
  },

  /**
   * Update a chapter
   * @param id The chapter id of the chapter to update
   * @param content The content of the chapter
   * @param index The index of the chapter
   * @param title The title of the chapter
   * @returns Promise that resolves to an ApiResponse containing a ChapterOutputDto object if successful, otherwise an error
   */
  updateChapter: async ({
    id: chapterId,
    content,
    index,
    title,
  }): Promise<ApiResponse<ChapterOutputDto>> => {
    const res = await POST<ChapterOutputDto>({
      authToken,
      path: `/stories/chapter/${chapterId}`,
      requiresAuth: true,
      body: { content, index, title },
    });
    if (res.isOk()) {
      const chapterOutputDto: ChapterOutputDto = {
        ...res.value,
      };
      return Ok(chapterOutputDto);
    }
    return Err(res.error);
  },

  /**
   * Update a story
   * @param id The story id of the story to update
   * @param title The title of the story
   * @returns Promise that resolves to an ApiResponse containing a StoryOutputDto object if successful, otherwise an error
   */
  updateStory: async ({
    id: storyId,
    title,
  }): Promise<ApiResponse<StoryOutputDto>> => {
    const res = await POST<StoryOutputDto>({
      authToken,
      path: `/stories/${storyId}`,
      requiresAuth: true,
      body: { title },
    });
    if (res.isOk()) {
      const storyOutputDto: StoryOutputDto = {
        ...res.value,
      };
      return Ok(storyOutputDto);
    }
    return Err(res.error);
  },
});
