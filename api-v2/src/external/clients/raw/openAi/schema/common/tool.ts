import { ToolType } from "./tool_type";

export type Tool = {
  type: ToolType;
  function: {
    description?: string;
    name: string;
    parameters: {};
  };
};
