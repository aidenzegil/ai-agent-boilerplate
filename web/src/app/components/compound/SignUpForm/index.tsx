import { useForm } from "react-hook-form";
import Component from "./component";
import { formConfig, useSignUpFormState } from "./data";

const SignUpForm = () => {
  const form = useForm(formConfig);
  const { onSubmit, errors } = useSignUpFormState({
    form: form,
  });
  return <Component form={form} onSubmit={onSubmit} />;
};

export default SignUpForm;
