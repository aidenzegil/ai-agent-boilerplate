import Form from "@/app/components/common/forms/GenericForm/component";
import LogoIcon from "@/app/components/common/icons/LogoIcon";
import Input from "@/app/components/common/inputs/Input/component";
import Link from "next/link";
import s from "./styles.module.scss";
import { Fields } from "./types";

const Component = ({ onSubmit, form, errors }: Fields) => {
  const { register } = form;
  return (
    <div>
      <div className={s.container}>
        <Link className={s.link} href={"/"}>
          <LogoIcon className={s.logo} />
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
              <label className="input-error text-primary">
                {errors?.email?.message}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <Input
                placeholder="6 character min"
                register={register("username")}
              />
              <label className="input-error text-primary">
                {errors?.username?.message}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <Input
                placeholder="8 character min"
                register={register("password")}
              />
              <label className="input-error text-primary">
                {errors?.password?.message}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Component;
