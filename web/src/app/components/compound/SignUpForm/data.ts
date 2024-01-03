import { UseFormReturn, ValidationMode } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

export const useSignUpFormState = ({
  form,
}: {
  form: UseFormReturn<
    {
      email: string;
      password: string;
      username: string;
    },
    undefined
  >;
}) => {
  const errors = form.formState.errors;

  const fireOffForm = ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) => {
    console.log(email, password, username);
  };

  const onSubmit = async () => {
    await form.handleSubmit(fireOffForm)();
  };

  return { onSubmit, errors };
};

/* NOTE: config should include form: "". However, currently it works without it */
export const formConfig = {
  defaultValues: {
    email: "blah",
    password: "blah",
    username: "blah",
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
