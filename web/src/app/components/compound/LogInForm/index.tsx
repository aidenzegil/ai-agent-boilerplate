import { useForm } from "react-hook-form";
import Component from "./component";
import { formConfig, useLogInFormState } from "./data";
import { useAuthContext } from "@/app/providers/AuthProvider/provider";

const LogInForm = () => {
  const form = useForm(formConfig);
  const { authFunctions } = useAuthContext();
  const logIn = authFunctions.logIn;
  const { onSubmit, errors } = useLogInFormState({ form: form, logIn });
  return <Component form={form} onSubmit={onSubmit} />;
};
export default LogInForm;
