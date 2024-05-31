import { useState } from "react";
import { DataInputs, DataOutputs } from "./types";

export const useData = ({
  createChatGeneration,
  chatGeneration,
  chatGenerationLoading,
}: DataInputs): DataOutputs => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const triggerAgentResponse = () => {
    createChatGeneration({ message });
  };

  return {
    message,
    agentResponse: chatGeneration?.response,
    agentResponseLoading: chatGenerationLoading,
    triggerAgentResponse,
    handleMessageChange,
  };
};
