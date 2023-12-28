import { UseFormReturn } from "react-hook-form";

export type Fields = {
  form: UseFormReturn<
    {
      email: string;
      password: string;
      username: string;
    },
    any,
    undefined
  >;
  onSubmit: () => void;
};
