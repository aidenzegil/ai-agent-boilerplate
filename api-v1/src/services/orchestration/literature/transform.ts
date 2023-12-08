import type { Chapter } from "domain/chapter/models/chapter";
import type { Story } from "domain/story/models/story";
import type { OrchestratedStory } from "orchestration/literature/models/completeStory";

export const transform = {
  orchestratedStory: (story: Story, chapters: Chapter[]): OrchestratedStory => {
    return {
      ...story,
      chapters,
    };
  },
};
