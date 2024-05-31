import { ChatModels } from "./common/chat_models";
import { ToolChoice } from "./common/tool_choice";
import { Tool } from "./common/tool";
import { Choice } from "./common/choices";
import { UsageDetails } from "./common/usage_details";
import { Message } from "./common/messages";

export type CreateChatCompletionRequest = {
  messages: Message[];
  model: ChatModels;
  frequency_penalty?: number | null;
  logit_bias?: JSON | null;
  logprobs?: boolean | null;
  top_logprobs?: number | null;
  max_tokens?: number | null;
  n?: number | null;
  presence_penalty?: number | null;
  response_format?: object;
  seed?: number | null;
  stop?: string | string[] | null;
  stream?: boolean | null;
  stream_options?: object | null;
  temperature?: number | null;
  top_p?: number | null;
  tools?: Tool[];
  tool_choice?: ToolChoice | Tool;
  user?: string;
};

export type CreateChatCompletionResponse = {
  id: string;
  choices: Choice[];
  created: number;
  model: ChatModels;
  system_fingerprint: string;
  object: string;
  usage: UsageDetails;
};
