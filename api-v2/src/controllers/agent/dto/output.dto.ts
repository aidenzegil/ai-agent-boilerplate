/**
 * This file contains the output DTOs for the AgentController
 * Each output DTO should be a class that is constructed from service model
 */

import { ChatGeneration } from "$domain/chatGeneration/models/chatGeneration";
import { ChatGenerationSource } from "@prisma/client";

export class ChatGenerationOutputDTO {
  id: string;
  source: ChatGenerationSource;
  response: string;
  createdAt: Date;

  constructor(chatGeneration: ChatGeneration) {
    this.id = chatGeneration.id;
    this.source = chatGeneration.source;
    this.response = chatGeneration.response;
    this.createdAt = chatGeneration.createdAt;
  }
}
