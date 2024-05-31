import { ChatGenerationOutputDto } from "@/common/types/outputDtos";
import { ApiResponse } from "../../types/apiResponse";
import { params } from "./params";
import { POST } from "../../api/axiosInstance";
import { Err, Ok } from "@/common/types/result";

interface Dependencies {
  authToken?: string;
}
interface Methods {
  createChatGeneration: (
    params: params.CreateChatGeneration
  ) => Promise<ApiResponse<ChatGenerationOutputDto>>;
}

type Agent = (deps: Dependencies) => Methods;

/**
 * @returns Controller object
 */
export const agentController: Agent = ({ authToken }) => ({
  createChatGeneration: async ({
    message,
  }: params.CreateChatGeneration): Promise<
    ApiResponse<ChatGenerationOutputDto>
  > => {
    const res = await POST<ChatGenerationOutputDto>({
      authToken,
      body: { message },
      path: "/agent/chat-generation",
      requiresAuth: true,
    });

    if (res.isOk()) {
      return Ok(res.value);
    }

    return Err(res.error);
  },
});
