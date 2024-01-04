import { forwardRef, useRef, useEffect } from "react";
import { LogInProps } from "./types";

const Form = forwardRef<HTMLFormElement, LogInProps>(
  (
    {
      children,
      clearErrors,
      onSubmit,
      errors,
      autoFocus = true,
      ...otherProps
    },
    ref
  ) => {
    const formRef = useRef<HTMLFormElement>(null);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      clearErrors?.("form");
      e.preventDefault();
      onSubmit?.(e);
    };

    useEffect(() => {
      if (formRef && ref) {
        if (typeof ref === "function") {
          ref(formRef.current);
        } else {
          ref.current = formRef.current;
        }
      }
    });

    return (
      <form onSubmit={handleSubmit} ref={formRef} {...otherProps}>
        {errors?.form && errors.form.message}
        {children}
      </form>
    );
  }
);

export default Form;
