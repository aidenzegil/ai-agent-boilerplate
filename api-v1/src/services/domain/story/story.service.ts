import { Injectable } from "@nestjs/common";

import type { StoryApi } from "#services/domain/story/api.interface";
import type { params } from "#services/domain/Story/api.params";
import type { Story } from "#services/domain/story/models/story";

const stubStory: Story = {
  authorUserId: "1",
  chapters: [],
  id: "1",
  reactions: [],
  title: "Story Title",
};

@Injectable()
export class StoryService implements StoryApi {
  CreateStory: (params: params.CreateStory) => Promise<Story> = async (
    params,
  ) => {
    console.log(params);
    return stubStory;
  };
  DeleteStory: (params: params.DeleteStory) => Promise<Story> = async (
    params,
  ) => {
    console.log(params);
    return stubStory;
  };
  GetStory: (params: params.GetStory) => Promise<Story> = async (params) => {
    console.log(params);
    return stubStory;
  };
  ReactToStory: (params: params.ReactToStory) => Promise<Story> = async (
    params,
  ) => {
    console.log(params);
    return stubStory;
  };
  SearchStories: (params: params.SearchStories) => Promise<Story[]> = async (
    params,
  ) => {
    console.log(params);
    return [stubStory];
  };
  UpdateStory: (params: params.UpdateStory) => Promise<Story> = async (
    params,
  ) => {
    console.log(params);
    return stubStory;
  };
}
