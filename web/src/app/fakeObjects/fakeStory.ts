export type ChapterOutputDto = {
  content: string;
  id: string;
  index: number;
  storyId: string;
  title: string;
};

export enum Opinion {
  LIKE = "LIKE",
  DISLIKE = "DISLIKE",
  NONE = "NONE",
}

export type StoryReactionOutputDto = {
  opinion: Opinion;
};

export type StoryOutputDto = {
  authorUserId: string;
  chapters: ChapterOutputDto[];
  id: string;
  reactions: StoryReactionOutputDto[];
  title: string;
};

export type StoryListItemOutputDto = {
  authorUserId: string;
  chapterIds: string[];
  id: string;
  reactions: StoryReactionOutputDto[];
  title: string;
};

export const FAKE_CHAPTER_1: ChapterOutputDto = {
  content: "fake chapter one content here!",
  id: "fakechapter1",
  index: 0,
  storyId: "some string 1",
  title: "fake chapter one title",
};

export const FAKE_CHAPTER_2: ChapterOutputDto = {
  content: "fake chapter two content here!",
  id: "fakechapter2",
  index: 1,
  storyId: "some string 2",
  title: "fake chapter two title",
};

export const FAKE_CHAPTER_3: ChapterOutputDto = {
  content: "fake chapter three content here!",
  id: "fakechapter3",
  index: 2,
  storyId: "some string 3",
  title: "fake chapter three title",
};

export const STORY_REACTION_1: StoryReactionOutputDto = {
  opinion: Opinion.LIKE,
};

export const FAKE_CHAPTER_ARRAY: ChapterOutputDto[] = [
  FAKE_CHAPTER_3,
  FAKE_CHAPTER_2,
  FAKE_CHAPTER_1,
];

export const FAKE_STORY_1: StoryOutputDto = {
  authorUserId: "fakeid1",
  chapters: FAKE_CHAPTER_ARRAY,
  id: "fakestory1",
  reactions: [STORY_REACTION_1, STORY_REACTION_1, STORY_REACTION_1],
  title: "this epic title",
};
export const FAKE_STORY_2: StoryOutputDto = {
  authorUserId: "fakeid2",
  chapters: FAKE_CHAPTER_ARRAY,
  id: "fakestory2",
  reactions: [
    STORY_REACTION_1,
    STORY_REACTION_1,
    STORY_REACTION_1,
    STORY_REACTION_1,
  ],
  title: "this epic title2",
};

export const FAKE_STORY_LIST_ITEM_1: StoryListItemOutputDto = {
  authorUserId: "fakeid1",
  chapterIds: ["fakechapter1", "fakechapter2", "fakechapter3"],
  id: "fakestory1",
  reactions: [STORY_REACTION_1, STORY_REACTION_1, STORY_REACTION_1],
  title: "this epic title",
};

export const FAKE_STORY_LIST_ITEM_2: StoryListItemOutputDto = {
  authorUserId: "fakeid2",
  chapterIds: ["fakechapter1", "fakechapter2", "fakechapter3"],
  id: "fakestory2",
  reactions: [
    STORY_REACTION_1,
    STORY_REACTION_1,
    STORY_REACTION_1,
    STORY_REACTION_1,
  ],
  title: "this epic title2",
};

export const FAKE_STORY_LIST: StoryListItemOutputDto[] = [
  FAKE_STORY_LIST_ITEM_1,
  FAKE_STORY_LIST_ITEM_2,
  FAKE_STORY_LIST_ITEM_1,
  FAKE_STORY_LIST_ITEM_2,
  FAKE_STORY_LIST_ITEM_1,
  FAKE_STORY_LIST_ITEM_2,
  FAKE_STORY_LIST_ITEM_1,
  FAKE_STORY_LIST_ITEM_2,
];

export const EDITSTORY = async (): Promise<void> => {
  return console.log("placeholder for story provider");
};
