import { forwardRef, useRef, useEffect } from "react";
import { SignUpProps } from "./types";

const Form = forwardRef<HTMLFormElement, SignUpProps>(
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
      // If a ref value has been forwarded, we need to share current
      // formRef value with it on every render.
      if (formRef && ref) {
        if (typeof ref === "function") {
          ref(formRef.current);
        } else {
          // eslint-disable-next-line no-param-reassign
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

/**
 
Form is a simple wrapper around an HTML <form> element, with a set of props
designed for use with "react-hook-form". More specifically:
*
The form component contains styles for arranging inputs vertically with a
standard gap amount.
The form component will redirect focus to the first focusable element in
the Form after mounting.
The form component will handle rendering form-level errors when a
"react-hook-form" errors object is passed with a error key with the
name "form".
The form component will handle clearing "form" errors on submit events,
when a "react-hook-form" clearErrors fn is passed.
*/

export default Form;
