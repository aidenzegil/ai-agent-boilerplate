import React from "react";
import { Fields } from "./types";
import s from "./styles.module.scss";
import { LuBook } from "react-icons/lu";
import Button from "../../common/inputs/Button/component";
import Input from "../../common/inputs/Input/component";
import Form from "../../common/forms/SignUp/component";

const Component = ({ onSubmit, form }: Fields) => {
  const { register } = form;
  return (
    <div className={s.container}>
      <LuBook className={s.logo} />
      <Form className={s.form} onSubmit={onSubmit}>
        <label className={s.label}>EMAIL</label>
        <Input className={s.inputs} register={register("email")} />
        <label className={s.label}>USERNAME</label>
        <Input className={s.inputs} register={register("username")} />
        <label className={s.label}>PASSWORD</label>
        <Input className={s.inputs} register={register("password")} />
        <Button className={s.button} type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Component;
