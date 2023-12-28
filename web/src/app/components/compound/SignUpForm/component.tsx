import React, { forwardRef, useEffect, useRef } from "react";
import { Fields } from "./types";

import Button from "../../common/inputs/Button/component";
import Input from "../../common/inputs/Input/component";

const Component = ({ onSubmit, form }: Fields) => {
  const { register } = form;
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input register={register("username")} />
        <Input register={register("email")} />
        <Input register={register("password")} />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

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
interface Props extends React.ComponentPropsWithRef<"form"> {
  clearErrors?: (name?: "form") => void;
  errors?: { [N: "form" | string]: { message?: string } | undefined };
}

const Form = forwardRef<HTMLFormElement, Props>(
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

export default Component;
