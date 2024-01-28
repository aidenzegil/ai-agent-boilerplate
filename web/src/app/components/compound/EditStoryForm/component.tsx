import React from "react";
import Form from "../../common/forms/LogIn/component";
import Input from "../../common/inputs/Input/component";
import s from "./styles.module.scss";
import { Fields } from "./types";
import MarkdownEditor from "../../openSource/MarkdownEditor";

const Component = ({ onSubmit, form }: Fields) => {
  //const { register } = form;
  return (
    <div className={s.container}>
      <div className="card shrink-0 w-full bg-base-100">
        <Form className="card-body" onSubmit={onSubmit}>
          <div className={s.container}>
            <div className={s.inputContainer}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Story Title</span>
                </label>
                <Input
                  placeholder="Get creative"
                  //register={register("storyTitle")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chapter Title</span>
                </label>
                <Input
                  placeholder="Make it good!"
                  //register={register("chapterTitle")}
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Publish Chapter
              </button>
            </div>
          </div>
          <div className="form-control bg-base-200">
            <MarkdownEditor />
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Component;
