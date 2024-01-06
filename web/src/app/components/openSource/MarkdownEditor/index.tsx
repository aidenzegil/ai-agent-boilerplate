import React from "react";
import Component from "./component";
import { newMarkdown } from "./data";

const MarkdownEditor = () => {
  const { onChange, markdown } = newMarkdown();
  return (
    <div>
      <Component onChange={onChange} value={markdown} />
    </div>
  );
};

export default MarkdownEditor;
