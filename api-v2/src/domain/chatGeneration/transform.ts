import { ChatGeneration } from "./models/chatGeneration";
import { DBChatGeneration } from "./repository/chatGeneration";

export const transform = {
  chatGeneration: (chatGeneration: DBChatGeneration): ChatGeneration => {
    return {
      id: chatGeneration.id,
      response: chatGeneration.response,
      source: chatGeneration.source,
      createdAt: chatGeneration.createdAt,
    };
  },
};
