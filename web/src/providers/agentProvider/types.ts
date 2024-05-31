import { ChatGenerationOutputDto } from "@/common/types/outputDtos";
import { Dispatch, SetStateAction } from "react";

export type AgentProviderState = {
  chatGeneration: ChatGenerationOutputDto | undefined;
};

export type AgentProviderSet = {
  setChatGeneration: Dispatch<
    SetStateAction<ChatGenerationOutputDto | undefined>
  >;
};

export type AgentProviderLoading = {
  loading: boolean;
  chatGenerationLoading: boolean;
};

export type AgentProviderSetLoading = {
  setChatGenerationLoading: Dispatch<SetStateAction<boolean>>;
};

export type AgentProviderStateController = {
  // Data state
  state: AgentProviderState;
  set: AgentProviderSet;
  // Loading state
  loading: AgentProviderLoading;
  setLoading: AgentProviderSetLoading;
};

export type AgentProviderFunctions = {
  createChatGeneration: ({ message }: { message: string }) => Promise<void>;
};
