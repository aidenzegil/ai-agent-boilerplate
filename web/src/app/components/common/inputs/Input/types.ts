import { RefCallBack, UseFormRegisterReturn } from "react-hook-form";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  register?: UseFormRegisterReturn<string>;
};
