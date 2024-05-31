import { Role } from "$external/clients/raw/openAi/schema/common/messages";
import { OpenAIRawClient } from "../../../../raw/openAi/client";
import { ChatModels } from "../../../../raw/openAi/schema/common/chat_models";
import { AgentGatewayAPI, CreateChatGeneration } from "../../api.interface";
import { ChatGenerationDTO } from "../../dto/ChatGenerationDTO";
import { OPEN_AI_API_KEY, OPEN_AI_URL } from "./config";

export class OpenAiClient implements AgentGatewayAPI {
  private rawClient: OpenAIRawClient;
  constructor() {
    this.rawClient = new OpenAIRawClient(OPEN_AI_URL, OPEN_AI_API_KEY);
  }
  createChatGeneration: (
    params: CreateChatGeneration
  ) => Promise<ChatGenerationDTO> = async (params) => {
    const res = await this.rawClient.create_chat_completion({
      messages: [
        {
          role: Role.USER,
          content: params.message,
        },
      ],
      model: ChatModels.GPT_4O,
    });
    const resMessage = res.data.choices[0].message.content; // return the first and possibly only choice.
    return {
      reply: resMessage,
    };
  };
}
