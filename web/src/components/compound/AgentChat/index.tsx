import { useAgentContext } from "@/providers/agentProvider/provider";
import Component from "./component";
import { useData } from "./data";

const AgentChat = () => {
  const { functions, state, loading } = useAgentContext();
  const { chatGeneration } = state;
  const { createChatGeneration } = functions;
  const { chatGenerationLoading } = loading;

  const data = useData({
    createChatGeneration,
    chatGeneration,
    chatGenerationLoading,
  });

  return <Component {...data} />;
};

export default AgentChat;
