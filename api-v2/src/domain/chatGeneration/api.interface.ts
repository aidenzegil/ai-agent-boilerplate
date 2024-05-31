import { params } from "./api.params";
import { ChatGeneration } from "./models/chatGeneration";

export interface ChatGenerationApi {
    generateChat(params: params.GenerateChat): Promise<ChatGeneration>;
}