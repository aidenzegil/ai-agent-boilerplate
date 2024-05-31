import { ChatGenerationService } from "$domain/chatGeneration/chatGeneration.service";
import { ChatGeneration } from "$domain/chatGeneration/models/chatGeneration";
import { Injectable } from "@nestjs/common";
import { GenerateChat } from "./api.interface";

@Injectable()
export class AgentService {
  constructor(private chatGenerationService: ChatGenerationService) {}

  async generateChat(params: GenerateChat): Promise<ChatGeneration> {
    return await this.chatGenerationService.generateChat(params);
  }
}
