import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormReturn } from "react-hook-form";
import { object, string } from "yup";

export const useLogInFormState = ({
  form,
}: {
  form: UseFormReturn<
    {
      email: string;
      password: string;
    },
    undefined
  >;
}) => {
  const errors = form.formState.errors;

  const fireOffForm = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log(email, password);
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
