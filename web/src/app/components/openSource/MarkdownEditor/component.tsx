import React from "react";
import { ForwardRefEditor } from "./utils/ForwardRefEditor";
import s from "./styles.module.scss";

const MarkdownEditor = () => {
  return (
    <div className={s.container}>
      <ForwardRefEditor markdown="Create a Story" />
    </div>
  );
};

export default MarkdownEditor;
