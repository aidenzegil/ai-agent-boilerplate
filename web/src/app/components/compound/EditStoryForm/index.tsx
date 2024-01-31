import React from "react";
import Component from "./component";
import { formConfig, useEditStoryFormState } from "./data";
import { useForm } from "react-hook-form";
import { EDITSTORY } from "@/app/fakeObjects/fakeStory";

const EditStoryForm = () => {
  const form = useForm(formConfig);
  const editStory = EDITSTORY;
  const { onSubmit, errors } = useEditStoryFormState({ form: form, editStory });
  return (
    <div>
      <Component form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default EditStoryForm;
