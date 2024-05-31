import React, { useContext, useMemo } from "react";
import { useAgentProviderStateController } from "./state";
import { useAgentProviderFunctions } from "./functions";
import {
  AgentProviderFunctions,
  AgentProviderLoading,
  AgentProviderState,
  AgentProviderStateController,
} from "./types";
import { createRegisteredContext } from "react-singleton-context";

/**
 * Defining what our context has access to, we want our context to be
 * able to give us the state, the loading state, and the functions,
 * but we do not want to be able to mess with state willy nilly.
 * So, we remove set and setLoading from the controller and
 * append the functions so we don't have to repeat typing.
 * I would have put this in the types file but I wanted this to be
 * straightforward.
 */
type AgentProviderContext = Omit<
  AgentProviderStateController,
  "set" | "setLoading"
> & {
  functions: AgentProviderFunctions;
};

const defaultProvider: AgentProviderContext = {
  state: {
    chatGeneration: undefined,
  },
  loading: {
    loading: false,
    chatGenerationLoading: false,
  },
  functions: {
    createChatGeneration: async () => {},
  },
};

const AgentRegisteredContext = createRegisteredContext<AgentProviderContext>(
  "agent-provider-context",
  defaultProvider
);

// export the provider
export const AgentProvider = ({ children }: { children: React.ReactNode }) => {
  const stateController = useAgentProviderStateController();
  const functions = useAgentProviderFunctions(stateController);

  // Define providers value (context)
  const value = useProviderInterface(
    stateController.state,
    functions,
    stateController.loading
  );

  // Wrap the children with the context provider
  return (
    <AgentRegisteredContext.Provider value={value}>
      {children}
    </AgentRegisteredContext.Provider>
  );
};

// composes and updates provider's values
const useProviderInterface = (
  state: AgentProviderState,
  functions: AgentProviderFunctions,
  loading: AgentProviderLoading
): AgentProviderContext => {
  // update providers values on state and loading changes
  return useMemo(
    () => ({
      state,
      functions,
      loading,
    }),
    [state, loading.loading]
  );
};

export const useAgentContext = () => useContext(AgentRegisteredContext);
