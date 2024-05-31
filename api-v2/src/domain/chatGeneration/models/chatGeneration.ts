import { ChatGenerationSource } from "@prisma/client";

/**
 * The core data model for the ChatGenerationService.
 */
export type ChatGeneration = {
  id: string;
  source: ChatGenerationSource;
  response: string;
  createdAt: Date;
};
