import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FieldErrors, UseFormReturn } from "react-hook-form";

export type Fields = {
  form: UseFormReturn<
    {
      email: string;
      password: string;
    },
    undefined
  >;
  onSubmit: () => void;
  errors: FieldErrors<{
    email: string;
    password: string;
  }>;
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
