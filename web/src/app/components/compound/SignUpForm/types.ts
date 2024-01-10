import { UseFormReturn } from "react-hook-form";

export type Fields = {
  form: UseFormReturn<
    {
      email: string;
      password: string;
      username: string;
    },
    undefined
  >;
  onSubmit: () => void;
};

export type UseSignUpFormStateParams = {
  form: UseFormReturn<
    {
      email: string;
      password: string;
      username: string;
    },
    undefined
  >;
  signUp: (email: string, password: string) => Promise<void>;
};
