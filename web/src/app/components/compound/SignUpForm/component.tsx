import React from "react";
import { Fields } from "./types";
import s from "./styles.module.scss";
import { LuBook } from "react-icons/lu";
import Input from "@/app/components/common/inputs/Input/component";
import Form from "@/app/components/common/forms/GenericForm/component";
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
              <span className="label-text">Username</span>
            </label>
            <Input
              placeholder="6 character min"
              register={register("username")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <Input
              placeholder="8 character min"
              register={register("password")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Component;
