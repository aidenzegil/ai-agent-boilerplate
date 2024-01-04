import { useForm } from "react-hook-form";
import Component from "./component";
import { formConfig, useLogInFormState } from "./data";

const LogInForm = () => {
  const form = useForm(formConfig);
  const { onSubmit, errors } = useLogInFormState({ form: form });
  return <Component form={form} onSubmit={onSubmit} />;
};
export default LogInForm;
