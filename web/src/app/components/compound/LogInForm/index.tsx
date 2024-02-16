import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { useAuthContext } from "@/app/providers/AuthProvider/provider";

import Component from "./component";
import { formConfig, useLogInFormData } from "./data";

const LogInForm = () => {
  const form = useForm(formConfig);
  const { authFunctions } = useAuthContext();
  const router = useRouter();
  const logIn = authFunctions.logIn;
  const { onSubmit, errors } = useLogInFormData({
    form: form,
    logIn,
    router,
  });

  return <Component form={form} onSubmit={onSubmit} />;
};
export default LogInForm;
