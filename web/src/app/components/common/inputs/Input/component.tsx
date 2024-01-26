import React from "react";
import { InputProps } from "./types";

const Input = ({ register, ...otherProps }: InputProps) => {
  return (
    <input
      {...otherProps}
      className={`input input-bordered ${otherProps.className}`}
      {...register}
    />
  );
};

export default Input;
