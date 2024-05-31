import { ChatGenerationOutputDto } from "@/common/types/outputDtos";

export type Fields = {
  message?: string;
  agentResponse?: string;
  agentResponseLoading?: boolean;
  triggerAgentResponse: () => void;
  handleMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export type DataInputs = {
  createChatGeneration: ({ message }: { message: string }) => Promise<void>;
  chatGeneration?: ChatGenerationOutputDto;
  chatGenerationLoading: boolean;
};

export type DataOutputs = {
  message: string;
  agentResponse?: string;
  agentResponseLoading: boolean;
  triggerAgentResponse: () => void;
  handleMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
