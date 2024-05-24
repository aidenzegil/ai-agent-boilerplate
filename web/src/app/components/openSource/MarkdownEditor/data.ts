import { useState } from "react";

export const newMarkdown = () => {
  const [markdown, setMarkdown] = useState("");
  // console.log(markdown);
  const onChange = (markdown: string) => {
    setMarkdown(markdown);
  };
  return { onChange, markdown };
};
