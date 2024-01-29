import type { Opinion } from "../../../../../../../api-v1/src/common/types/enums/opinion";

export namespace params {
  export type CreateChapter = {
    content: string;
    index: number;
    storyId: string;
    title: string;
  };

  export type CreateStory = {
    title: string;
  };

  export type ReactToStory = {
    opinion: Opinion;
    id: string;
  };

  export type SearchStories = {
    limit?: number;
    page?: number;
  };

  export type UpdateChapter = {
    content?: string;
    index?: number;
    title?: string;
    id: string;
  };

  export type UpdateStory = {
    title?: string;
    id: string;
  };

  export type DeleteChapter = {
    id: string;
  };
  export type DeleteStory = {
    id: string;
  };
  export type GetChapter = {
    id: string;
  };
  export type GetStory = {
    id: string;
  };
}
