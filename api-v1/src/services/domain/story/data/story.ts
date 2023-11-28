import { Prisma } from "@prisma/client";

export const typesafeStory = Prisma.validator<Prisma.StoryDefaultArgs>()({
  include: {
    ChapterStory: true,
    StoryUser: true,
  },
});

export type DBStory = Prisma.StoryGetPayload<typeof typesafeStory>;
