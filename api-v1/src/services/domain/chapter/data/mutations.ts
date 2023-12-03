/* eslint-disable @typescript-eslint/naming-convention */

import type { params } from "domain/chapter/api.params";
import type { DBChapter } from "domain/chapter/data/chapter";
import { typesafeChapter } from "domain/chapter/data/chapter";

import { wetDBClient } from "#lib/wetDBClient";

export const mutations = {
  createChapter: async (params: params.CreateChapter): Promise<DBChapter> => {
    const chapter = await wetDBClient.chapter.create({
      data: {
        ChapterStory: {
          create: { chapterIndex: params.index, storyId: params.storyId },
        },
        content: params.content,
        title: params.title,
      },
      ...typesafeChapter,
    });
    return chapter;
  },
  deleteChapter: async (params: params.DeleteChapter): Promise<DBChapter> => {
    const chapter = await wetDBClient.chapter.delete({
      where: { id: params.id },
      ...typesafeChapter,
    });
    return chapter;
  },
  updateChapter: async (params: params.UpdateChapter): Promise<DBChapter> => {
    const chapter = await wetDBClient.chapter.update({
      data: {
        content: params.content,
        title: params.title,
        ...params.index && {
          ChapterStory: { update: { chapterIndex: params.index } },
        },
      },
      where: { id: params.id },
      ...typesafeChapter,
    });
    return chapter;
  },
};
