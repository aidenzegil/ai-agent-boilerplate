import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UseSignUpFormDataParams } from "./types";
import { object, string } from "yup";

export const useSignUpFormData = ({
  form,
  signUp,
  router,
}: UseSignUpFormDataParams) => {
  const errors = form.formState.errors;

  const fireOffForm = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await signUp(email, password);
  };

  const onSubmit = async () => {
    try {
      if (!errors.email && !errors.password) {
        await form.handleSubmit(fireOffForm)();
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      toast("Could not create user, username may be unavailable");
    }
  };

  return { onSubmit, errors };
};

export const formConfig = {
  defaultValues: {
    form: "",
    email: "",
    password: "",
  },
  mode: "onChange",
  resolver: yupResolver(
    object({
      email: string().trim().email().required(),
      password: string().trim().required().min(8).max(24),
    })
  ),
} as const;
