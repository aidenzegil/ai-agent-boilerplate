import React from "react";
import { LuBook } from "react-icons/lu";
import Form from "../../common/forms/LogIn/component";
import Input from "../../common/inputs/Input/component";
import Button from "../../common/inputs/Button/component";
import s from "./styles.module.scss";
import { Fields } from "./types";

const Component = ({ onSubmit, form }: Fields) => {
  const { register } = form;
  return (
    <div className={s.container}>
      <LuBook className={s.logo} />
      <Form className={s.form} onSubmit={onSubmit}>
        <label className={s.label}>EMAIL</label>
        <Input
          placeholder="example@email.com"
          className={s.inputs}
          register={register("email")}
        />
        <label className={s.label}>PASSWORD</label>
        <Input
          placeholder="shhh it's a secret"
          className={s.inputs}
          register={register("password")}
        />
        <Button className={s.button} type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};
export default Component;
