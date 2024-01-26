import React from "react";
import { LuBook } from "react-icons/lu";
import Form from "../../common/forms/LogIn/component";
import Input from "../../common/inputs/Input/component";
import Button from "../../common/inputs/Button/component";
import s from "./styles.module.scss";
import { Fields } from "./types";
import Link from "next/link";

const Component = ({ onSubmit, form }: Fields) => {
  const { register } = form;
  return (
    <div className={s.container}>
      <Link className={s.link} href={"/"}>
        <LuBook className={s.logo} />
      </Link>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <Form className="card-body" onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <Input
              placeholder="example@email.com"
              register={register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <Input
              placeholder="shhh it's a secret"
              register={register("password")}
            />
            <label className="label">
              <a
                href="/login/forgotpassword"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Log In
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Component;
