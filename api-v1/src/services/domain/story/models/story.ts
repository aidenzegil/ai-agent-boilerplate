import type { StoryReaction } from "domain/story/models/storyReaction";


export type Story = {
  authorUserId: string;
  chapters: string[];
  id: string;
  reactions: StoryReaction[];
  title: string;
};
