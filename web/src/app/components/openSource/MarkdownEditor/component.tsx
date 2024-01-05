import React from "react";
import { ForwardRefEditor } from "./utils/ForwardRefEditor";

const MarkdownEditor = () => {
  return (
    <div>
      <ForwardRefEditor markdown="Create a Story" />
    </div>
  );
};

export default MarkdownEditor;
