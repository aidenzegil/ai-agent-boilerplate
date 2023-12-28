import React from "react";
import s from "./styles.module.scss";
import { InputProps } from "./types";

const Input = ({ register, ...otherProps }: InputProps) => {
  return <input className={s.input} {...otherProps} {...register} />;
};

export default Input;
