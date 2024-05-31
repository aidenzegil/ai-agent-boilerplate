import { dbClient } from "$database/dbClient";
import { AgentProviders } from "$external/clients/gateway/agent/api.interface";
import { DBChatGeneration } from "./chatGeneration";

/**
 * A composed object for ChatGenerationService database write functions.
 */
export const command = {
  createChatGeneration: async ({
    prompt,
    response,
    userId,
    source,
  }: {
    prompt: string;
    response: string;
    userId: string;
    source: AgentProviders;
  }): Promise<DBChatGeneration> => {
    const chatGeneration = await dbClient.chatGeneration.create({
      data: {
        prompt,
        response,
        userRefId: userId,
        source,
      },
    });
    return chatGeneration;
  },
};
