import FormWrapper from "@/components/wrappers/FormWrapper/component";
import Input from "@/components/common/inputs/Input/component";
import s from "./styles.module.scss";
import { Fields } from "./types";

const Component = ({ onSubmit, form, errors }: Fields) => {
  const { register } = form;
  return (
    <div>
      <div className={s.container}>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <FormWrapper className="card-body" onSubmit={onSubmit}>
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
            <div className="form-control"></div>
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
          </FormWrapper>
        </div>
      </div>
    </div>
  );
};

export default Component;
