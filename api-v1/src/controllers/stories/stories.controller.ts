import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import type { Story } from "domain/story/models/story";
import { LiteratureService } from "orchestration/literature/service";

import { ChapterOutputDto } from "#controllers/stories/dto/output.dto";
import { StoryOutputDto } from "#controllers/stories/dto/output.dto";

import * as InputDto from "./dto/input.dto";

@ApiTags("stories")
@Controller("stories")
export class StoriesController {
  constructor(private readonly service: LiteratureService) {}

  @Post("chapter")
  async CreateChapter(
    @Body() inputDto: InputDto.CreateChapter,
  ): Promise<ChapterOutputDto> {
    const chapter = await this.service.CreateChapter({
      content: inputDto.content,
      index: inputDto.index,
      storyId: inputDto.storyId,
      title: inputDto.title,
    });
    return new ChapterOutputDto(chapter);
  }

  @Post()
  async CreateStory(
    @Headers("userId") userId: string,
    @Body() inputDto: InputDto.CreateStory,
  ): Promise<StoryOutputDto> {
    const story = await this.service.CreateStory({
      authorUserId: userId,
      title: inputDto.title,
    });
    return new StoryOutputDto(story);
  }

  @Delete("/chapter/:chapterId")
  async DeleteChapter(@Param("chapterId") chapterId: string): Promise<void> {
    await this.service.DeleteChapter({ id: chapterId });
    return;
  }

  @Delete(":storyId")
  async DeleteStory(@Param("storyId") storyId: string): Promise<void> {
    await this.service.DeleteStory({ id: storyId });
    return;
  }

  @Get("/chapter/:chapterId")
  async GetChapter(
    @Param("chapterId") chapterId: string,
  ): Promise<ChapterOutputDto> {
    const chapter = await this.service.GetChapter({ id: chapterId });
    return new ChapterOutputDto(chapter);
  }

  @Get(":storyId")
  async GetStory(@Param("storyId") storyId: string): Promise<StoryOutputDto> {
    const story = await this.service.GetStory({ id: storyId });
    return new StoryOutputDto(story);
  }

  @Put(":storyId/react")
  async ReactToStory(
    @Headers("userId") userId: string,
    @Param("storyId") storyId: string,
    @Body() inputDto: InputDto.ReactToStory,
  ): Promise<StoryOutputDto> {
    const story = await this.service.ReactToStory({
      opinion: inputDto.opinion,
      storyId,
      userId,
    });
    return new StoryOutputDto(story);
  }

  @Get()
  async SearchStories(
    @Query("page") page?: number,
    @Query("limit") limit?: number,
  ): Promise<Story[]> {
    const stories = await this.service.SearchStories({
      limit,
      page,
    });
    return stories;
  }

  @Put("/chapter/:chapterId")
  async UpdateChapter(
    @Param("chapterId") chapterId: string,
    @Body() inputDto: InputDto.UpdateChapter,
  ): Promise<ChapterOutputDto> {
    const chapter = await this.service.UpdateChapter({
      content: inputDto.content,
      id: chapterId,
      index: inputDto.index,
      title: inputDto.title,
    });
    return new ChapterOutputDto(chapter);
  }

  @Put(":storyId")
  async UpdateStory(
    @Param("storyId") storyId: string,
    @Body() inputDto: InputDto.UpdateStory,
  ): Promise<StoryOutputDto> {
    const story = await this.service.UpdateStory({
      id: storyId,
      title: inputDto.title,
    });
    return new StoryOutputDto(story);
  }
}
