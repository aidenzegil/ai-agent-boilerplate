import { ToolType } from "./tool_type";

export type Choice = {
  finish_reason: string;
  index: number;
  message: MessageChoice;
  logprobs: LogprobsContent | null;
};

export type LogprobsContent = {
  content:
    | {
        token: string;
        logprob: number;
        bytes: number[] | null;
        top_logprobs: {
          token: string;
          logprob: number;
          bytes: number[] | null;
        }[];
      }[]
    | null;
};

export type MessageChoice = {
  content: string;
  tool_calls: ToolCall[];
  role: string;
};

export type ToolCall = {
  id: string;
  type: ToolType;
  function: {
    name: string;
    arguments: string;
  };
};
