import { ChatGenerationDTO } from "./dto/ChatGenerationDTO";

export interface AgentGatewayAPI {
  createChatGeneration: (
    params: CreateChatGeneration
  ) => Promise<ChatGenerationDTO>;
}

export type CreateChatGeneration = {
  provider: AgentProviders;
  message: string;
};

export enum AgentProviders { // extend as needed
  OPEN_AI = "OPEN_AI",
}
