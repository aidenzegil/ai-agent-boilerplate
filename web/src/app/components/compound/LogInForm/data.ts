import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormReturn } from "react-hook-form";
import { object, string } from "yup";
import { UseLogInFormState } from "./types";

export const useLogInFormState = ({ form, logIn }: UseLogInFormState) => {
  const errors = form.formState.errors;

  const fireOffForm = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await logIn(email, password);
  };

  const onSubmit = async () => {
    await form.handleSubmit(fireOffForm)();
  };

  return { onSubmit, errors };
};

/* NOTE: config should include form: "". However, currently it works without it */
export const formConfig = {
  defaultValues: {
    email: "",
    password: "",
  },
  mode: "onChange",
  resolver: yupResolver(
    object({
      email: string().trim().email().required(),
      password: string().trim().required().min(8),
    })
  ),
} as const;
