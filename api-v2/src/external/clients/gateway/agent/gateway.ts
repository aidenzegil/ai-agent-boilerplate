import { Injectable } from "@nestjs/common";
import {
  AgentGatewayAPI,
  AgentProviders,
  CreateChatGeneration,
} from "./api.interface";
import { ChatGenerationDTO } from "./dto/ChatGenerationDTO";
import { OpenAiClient } from "./providers/openAi/client";

@Injectable()
export class AgentGatewayClient implements AgentGatewayAPI {
  private agentProviderMap: Map<AgentProviders, AgentGatewayAPI>;

  constructor(openAiClient: OpenAiClient) {
    this.agentProviderMap = new Map();
    this.agentProviderMap.set(AgentProviders.OPEN_AI, openAiClient);
  } // extend as needed

  createChatGeneration: (
    params: CreateChatGeneration
  ) => Promise<ChatGenerationDTO> = async (params) => {
    const provider = this.agentProviderMap.get(params.provider);

    if (!provider) {
      throw new Error("Provider not found");
    }

    const res = await provider.createChatGeneration(params); // if you're having issues having visibility external errors, you can add a try catch and console.log here

    return res;
  };
}
