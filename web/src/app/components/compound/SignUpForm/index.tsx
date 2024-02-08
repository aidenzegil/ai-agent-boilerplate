import { useForm } from "react-hook-form";

import { useAuthContext } from "@/app/providers/AuthProvider/provider";

import Component from "./component";
import { formConfig, useSignUpFormData } from "./data";

const SignUpForm = () => {
  const form = useForm(formConfig);
  const { authFunctions } = useAuthContext();
  const signUp = authFunctions.signUp;
  const { onSubmit, errors } = useSignUpFormData({
    form: form,
    signUp: signUp,
  });

  return <Component form={form} onSubmit={onSubmit} />;
};

export default SignUpForm;
