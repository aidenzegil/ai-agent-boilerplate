import { agentController } from "@/lib/server/controllers/agent/controller";
import { params } from "@/lib/server/controllers/agent/params";

/**
 * agentController: the composed object I mentioned above, it takes
 * arguments in case you need to pass in an auth token or something
 * similar.
 *
 * params: a composed object containing the type of each params for every
 * defined network call.
 */

/**
 * If route required a parameter, say, "id"
 */

export const network = {
  createChatGeneration: ({
    message,
    authToken,
  }: params.CreateChatGeneration & { authToken: string }) => {
    return agentController({ authToken }).createChatGeneration({ message });
  },
};
