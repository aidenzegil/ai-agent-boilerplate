import { Injectable } from "@nestjs/common";

import type { ChapterApi } from "#services/domain/chapter/api.interface";
import type { params } from "#services/domain/chapter/api.params";
import type { Chapter } from "#services/domain/chapter/models/chapter";
const stubChapter: Chapter = {
  content: "string",
  id: "string",
  index: 0,
  storyId: "string",
  title: "string",
};

@Injectable()
export class ChapterService implements ChapterApi {
  CreateChapter: (params: params.CreateChapter) => Promise<Chapter> = async (
    params,
  ) => {
    console.log(params);
    return stubChapter;
  };
  DeleteChapter: (params: params.DeleteChapter) => Promise<Chapter> = async (
    params,
  ) => {
    console.log(params);
    return stubChapter;
  };
  GetChapter: (params: params.GetChapter) => Promise<Chapter> = async (
    params,
  ) => {
    console.log(params);
    return stubChapter;
  };
  SearchChapters: (params: params.SearchChapters) => Promise<Chapter[]> = async (
    params,
  ) => {
    console.log(params);
    return [stubChapter];
  };
  UpdateChapter: (params: params.UpdateChapter) => Promise<Chapter> = async (
    params,
  ) => {
    console.log(params);
    return stubChapter;
  };
}
