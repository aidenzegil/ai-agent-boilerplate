import { useState } from "react";
import { AgentProviderStateController } from "./types";
import { ChatGenerationOutputDto } from "@/common/types/outputDtos";

export const useAgentProviderStateController =
  (): AgentProviderStateController => {
    // Loading Primitives
    const [chatGenerationLoading, setChatGenerationLoading] = useState(false);

    // a loading constant derived from providers loading states,
    // generally useful info
    const loading = chatGenerationLoading; // || ...otherLoadingState

    // Data (you will likely want to use a persistent version of
    // useState for the actual data)
    const [chatGeneration, setChatGeneration] = useState<
      ChatGenerationOutputDto | undefined
    >();

    // return a stateController
    return {
      state: {
        chatGeneration,
      },
      set: {
        setChatGeneration,
      },
      loading: {
        loading,
        chatGenerationLoading,
      },
      setLoading: {
        setChatGenerationLoading,
      },
    };
  };
