import { useForm } from "react-hook-form";
import Component from "./component";
import { formConfig, useSignUpFormState } from "./data";
import { useAuthContext } from "@/app/providers/AuthProvider/provider";

const SignUpForm = () => {
  const form = useForm(formConfig);
  const { authFunctions } = useAuthContext();
  const signUp = authFunctions.signUp;
  const { onSubmit, errors } = useSignUpFormState({
    form: form,
    signUp,
  });

  return <Component form={form} onSubmit={onSubmit} />;
};

export default SignUpForm;
