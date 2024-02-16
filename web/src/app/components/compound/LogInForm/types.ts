import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
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

export type UseLogInFormData = {
  form: UseFormReturn<
    {
      email: string;
      password: string;
    },
    undefined
  >;
  logIn: (email: string, password: string) => Promise<void>;
  router: AppRouterInstance;
};
