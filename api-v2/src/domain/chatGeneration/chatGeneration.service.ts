import { AgentGatewayClient } from "$external/clients/gateway/agent/gateway";
import { Injectable } from "@nestjs/common";
import { command } from "./repository/command";
// import { query } from "./repository/query";
import { transform } from "./transform";
import type { ChatGenerationApi } from "./api.interface";
import type { params } from "./api.params";
import type { ChatGeneration } from "./models/chatGeneration";
import { AgentProviders } from "$external/clients/gateway/agent/api.interface";

@Injectable()
export class ChatGenerationService implements ChatGenerationApi {
  constructor(private agentGatewayClient: AgentGatewayClient) {}

  async generateChat(params: params.GenerateChat): Promise<ChatGeneration> {
    const agentResponse = await this.agentGatewayClient.createChatGeneration({
      provider: AgentProviders.OPEN_AI,
      message: params.message,
    });
    const dBChatGeneration = await command.createChatGeneration({
      prompt: params.message,
      response: agentResponse.reply,
      userId: params.userId,
      source: AgentProviders.OPEN_AI,
    });
    const chatGeneration = transform.chatGeneration(dBChatGeneration);

    return chatGeneration;
  }
}
