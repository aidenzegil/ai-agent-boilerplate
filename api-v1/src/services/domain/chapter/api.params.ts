export namespace params {
  export type CreateChapter = {
    content: string;
    index: number;
    storyId: string;
    title: string;
  };

  export type DeleteChapter = {
    id: string;
  };

  export type GetChapter = { id: string };

  export type SearchChapters = {
    limit?: number;
    page?: number;
  };

  export type UpdateChapter = {
    content?: string;
    index?: number;
    title?: string;
  };
}
