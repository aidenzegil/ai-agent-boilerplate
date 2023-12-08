import { Injectable } from "@nestjs/common";
import { ChapterService } from "domain/chapter/chapter.service";
import type { Chapter } from "domain/chapter/models/chapter";
import type { Story } from "domain/story/models/story";
import { StoryService } from "domain/story/story.service";
import type { LiteratureApi } from "orchestration/literature/api.interface";
import type { params } from "orchestration/literature/api.params";
import type { OrchestratedStory } from "orchestration/literature/models/completeStory";
import { transform } from "orchestration/literature/transform";

@Injectable()
export class LiteratureService implements LiteratureApi {
  constructor(
    private readonly chapterService: ChapterService,
    private readonly storyService: StoryService,
  ) {}
  CreateChapter: (params: params.CreateChapter) => Promise<Chapter> = async (params) => {
    const chapter = await this.chapterService.CreateChapter(params);
    return chapter;
  };
  CreateStory: (params: params.CreateStory) => Promise<OrchestratedStory> = async (
    params,
  ) => {
    const story = await this.storyService.CreateStory(params);
    return transform.orchestratedStory(story, []);
  };
  DeleteChapter: (params: params.DeleteChapter) => Promise<void> = async (params) => {
    await this.chapterService.DeleteChapter(params);
    return;
  };
  DeleteStory: (params: params.DeleteStory) => Promise<void> = async (params) => {
    await this.chapterService.DeleteChapters({
      discriminator: "storyId",
      storyId: params.id,
    });
    await this.storyService.DeleteStory(params);
    return;
  };
  GetChapter: (params: params.GetChapter) => Promise<Chapter> = async (params) => {
    const chapter = await this.chapterService.GetChapter(params);
    return chapter;
  };
  GetStory: (params: params.GetStory) => Promise<OrchestratedStory> = async (params) => {
    const story = await this.storyService.GetStory(params);
    const chapters = await this.chapterService.SearchChapters({
      storyId: params.id,
    });
    return transform.orchestratedStory(story, chapters);
  };
  ReactToStory: (params: params.ReactToStory) => Promise<OrchestratedStory> = async (
    params,
  ) => {
    const story = await this.storyService.ReactToStory(params);
    const chapters = await this.chapterService.SearchChapters({
      storyId: params.storyId,
    });
    return transform.orchestratedStory(story, chapters);
  };
  SearchStories: (params: params.SearchStories) => Promise<Story[]> = async (params) => {
    const stories = await this.storyService.SearchStories(params);
    return stories;
  };
  UpdateChapter: (params: params.UpdateChapter) => Promise<Chapter> = async (params) => {
    const chapter = await this.chapterService.UpdateChapter(params);
    return chapter;
  };
  UpdateStory: (params: params.UpdateStory) => Promise<OrchestratedStory> = async (
    params,
  ) => {
    const story = await this.storyService.UpdateStory(params);
    const chapters = await this.chapterService.SearchChapters({
      storyId: params.id,
    });
    return transform.orchestratedStory(story, chapters);
  };
}
