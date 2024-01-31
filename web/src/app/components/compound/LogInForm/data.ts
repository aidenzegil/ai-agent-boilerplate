import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { UseLogInFormData } from "./types";

export const useLogInFormData = ({ form, logIn }: UseLogInFormData) => {
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
