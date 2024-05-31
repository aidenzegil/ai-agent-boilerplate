import { ToolCall } from "./choices";

export type Message = {
  content: string;
  role: Role;
  name?: string;
  tool_call_id?: string;
  tool_calls?: ToolCall[];
};

export enum Role {
  USER = "user",
  ASSISTANT = "assistant",
  SYSTEM = "system",
  TOOL = "tool",
  FUNCTION = "function",
}
