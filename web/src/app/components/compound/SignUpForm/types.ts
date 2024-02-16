import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { UseFormReturn } from "react-hook-form";

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
