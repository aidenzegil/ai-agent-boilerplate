import { ChatGeneration } from "$domain/chatGeneration/models/chatGeneration";

export interface AgentApi {
  generateChat(params: GenerateChat): Promise<ChatGeneration>;
}

export type GenerateChat = {
  userId: string;
  message: string;
};
