import { dbClient } from "$database/dbClient";
import { DBChatGeneration, typesafeChatGeneration } from "./chatGeneration";

/**
 * A composed object for ChatGenerationService database read functions.
 */
export const query = {
  getChatGenerationsByUserId: async (
    userId: string
  ): Promise<DBChatGeneration[]> => {
    const chatGenerations = await dbClient.chatGeneration.findMany({
      where: { userRefId: userId },
      ...typesafeChatGeneration,
    });
    return chatGenerations;
  },
};
