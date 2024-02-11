import { useForm } from "react-hook-form";

import { useStoryProviderContext } from "@/app/providers/StoryProvider/provider";

import Component from "./component";
import { formConfig, useCreateStoryFormData } from "./data";

const CreateStoryForm = () => {
  const form = useForm(formConfig);
  const { storyFunctions, state: storyState } = useStoryProviderContext();

  const { onSubmit, errors } = useCreateStoryFormData({
    activeStory: storyState.activeStory,
    form: form,
    storyFunctions,
  });
  return (
    <div>
      <Component form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default CreateStoryForm;
