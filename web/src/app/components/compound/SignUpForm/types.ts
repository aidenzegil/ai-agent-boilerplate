import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FieldErrors, UseFormReturn } from "react-hook-form";

export type Fields = {
  form: UseFormReturn<
    {
      profilePictureUrl: string;
      email: string;
      password: string;
      username: string;
    },
    undefined
  >;
  onSubmit: () => void;
  errors: FieldErrors<{
    profilePictureUrl: string;
    email: string;
    password: string;
    username: string;
  }>;
};

export type UseSignUpFormDataParams = {
  form: UseFormReturn<
    {
      profilePictureUrl: string;
      email: string;
      password: string;
      username: string;
    },
    undefined
  >;
  signUp: (
    email: string,
    password: string,
    username: string,
    profilePictureUrl: string
  ) => Promise<void>;
  router: AppRouterInstance;
};
