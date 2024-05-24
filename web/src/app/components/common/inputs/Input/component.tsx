import React from "react";
import { InputProps } from "./types";
import classNames from "classnames";

const Input = ({ register, ...otherProps }: InputProps) => {
  return (
    <input
      {...otherProps}
      className={classNames(["input input-bordered", otherProps.className])}
      {...register}
    />
  );
};

export default Input;
