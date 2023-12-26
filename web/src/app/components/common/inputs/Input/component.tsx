import React from "react";
import s from "./styles.module.scss";
import { InputProps } from "./types";

const Input = ({ ...otherProps }: InputProps) => {
  return <input className={s.input} {...otherProps} />;
};

export default Input;
