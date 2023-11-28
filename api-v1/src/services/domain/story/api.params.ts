export namespace params {
  export type CreateStory = {
    title: string;
  };

  export type DeleteStory = {
    id: string;
  };

  export type GetStory = { id: string };

  export type SearchStories = {
    limit?: number;
    page?: number;
  };

  export type UpdateStory = {
    title?: string;
  };
}
