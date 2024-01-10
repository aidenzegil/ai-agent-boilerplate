import { UseFormReturn } from "react-hook-form";

export type Fields = {
  form: UseFormReturn<
    {
      email: string;
      password: string;
    },
    undefined
  >;
  onSubmit: () => void;
};

export type UseLogInFormState = {
  form: UseFormReturn<
    {
      email: string;
      password: string;
    },
    undefined
  >;
  logIn: (email: string, password: string) => Promise<void>;
};
