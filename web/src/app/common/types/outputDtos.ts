export type ChapterOutputDto = {
    content: string;
    id: string;
    index: number;
    storyId: string;
    title: string;
}

export type StoryReactionOutputDto = {
    opinion: Opinion;
}

export type StoryOutputDto = {
    authorUserId: string;
    chapters: ChapterOutputDto[];
    id: string;
    reactions: StoryReactionOutputDto[];
    title: string;
}

export type StoryListItemOutputDto = {
    authorUserId: string;
    chapterIds: string[];
    id: string;
    reactions: StoryReactionOutputDto[];
    title: string;
}

export enum ResponseStatus {
  SUCCESS = "SUCCESS",
}

export enum Opinion {
  LIKE = "LIKE",
  DISLIKE = "DISLIKE",
  NONE = "NONE",
}
