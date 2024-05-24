import React from "react";
import s from "./styles.module.scss";
import { TextAreaProps } from "./types";

const TextArea = ({ ...otherProps }: TextAreaProps) => {
  return <textarea className={s.textArea} {...otherProps} />;
};

export default TextArea;
