import { useEffect } from "react";
import { network } from "./network";
import { AgentProviderFunctions, AgentProviderStateController } from "./types";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebase/config";

export const useAgentProviderFunctions = (
  stateController: AgentProviderStateController
): AgentProviderFunctions => {
  useEffect(() => {
    initializeProviderData();
  }, []);

  const initializeProviderData = async () => {
    // await getInitialAgentData()
  };

  const createChatGeneration = async ({ message }: { message: string }) => {
    stateController.setLoading.setChatGenerationLoading(true);
    try {
      const authToken = await auth.currentUser?.getIdToken();
      if (!authToken) {
        toast("User not authenticated");
        return;
      }
      const chatGenerationRes = await network.createChatGeneration({
        message,
        authToken,
      });
      if (chatGenerationRes.isErr()) {
        toast("Error generating chat");
        return;
      }
      if (chatGenerationRes.isOk()) {
        stateController.set.setChatGeneration(chatGenerationRes.value);
      }
    } catch (e) {
      toast("An unexpected error occurred while generating chat");
    }
    stateController.setLoading.setChatGenerationLoading(false);
  };

  return {
    createChatGeneration,
  };
};
