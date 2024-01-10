import { UseFormReturn, ValidationMode } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { UseSignUpFormStateParams } from "./types";

export const useSignUpFormState = ({
  form,
  signUp,
}: UseSignUpFormStateParams) => {
  const errors = form.formState.errors;

  const fireOffForm = async ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) => {
    // TODO: Include username here as well
    await signUp(email, password);
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
    username: "",
  },
  mode: "onChange",
  resolver: yupResolver(
    object({
      email: string().trim().email().required(),
      password: string().trim().required().min(8),
      username: string().min(6).required(),
    })
  ),
} as const;
