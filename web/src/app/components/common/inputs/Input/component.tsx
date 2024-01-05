import React from "react";
import s from "./styles.module.scss";
import { InputProps } from "./types";
import classNames from "classnames";

const Input = ({ register, ...otherProps }: InputProps) => {
  return (
    <input
      {...otherProps}
      className={classNames([s.input, otherProps.className])}
      {...register}
    />
  );
};

export default Input;
