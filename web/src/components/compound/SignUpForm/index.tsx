import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { useAuthContext } from "@/providers/authProvider/provider";

import Component from "./component";
import { formConfig, useSignUpFormData } from "./data";

const SignUpForm = () => {
  const form = useForm(formConfig);
  const { authFunctions } = useAuthContext();
  const router = useRouter();
  const signUp = authFunctions.signUp;
  const { onSubmit, errors } = useSignUpFormData({
    form: form,
    router,
    signUp: signUp,
  });

  return <Component form={form} onSubmit={onSubmit} errors={errors} />;
};

export default SignUpForm;
