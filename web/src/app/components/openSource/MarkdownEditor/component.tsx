import React from "react";
import { ForwardRefEditor } from "./utils/ForwardRefEditor";
import s from "./styles.module.scss";
import { Fields } from "./types";

const Component = ({ onChange, value }: Fields) => {
  return (
    <div className={s.container}>
      <ForwardRefEditor
        onChange={onChange}
        markdown={value}
        placeholder="Begin typing..."
      />
    </div>
  );
};

export default Component;
