import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { object, string } from "yup";
import { UseLogInFormData } from "./types";

export const useLogInFormData = ({ form, logIn, router }: UseLogInFormData) => {
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
    try {
      await form.handleSubmit(fireOffForm)();
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      toast("User not found, double check login");
    }
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
