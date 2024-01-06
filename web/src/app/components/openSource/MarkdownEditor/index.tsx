import React, { useState } from "react";
import Component from "./component";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  console.log(markdown);
  return (
    <div>
      <Component
        onChange={(markdown: string) => setMarkdown(markdown)}
        value={markdown}
      />
    </div>
  );
};

export default MarkdownEditor;
