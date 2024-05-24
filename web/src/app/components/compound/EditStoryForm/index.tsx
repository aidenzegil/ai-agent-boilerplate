import { useForm } from "react-hook-form";

import { useStoryProviderContext } from "@/app/providers/StoryProvider/provider";

import Component from "./component";
import { formConfig, useEditStoryFormData } from "./data";

const EditStoryForm = () => {
  const form = useForm(formConfig);
  const { storyFunctions, state: storyState } = useStoryProviderContext();

  const { onSubmit, errors } = useEditStoryFormData({
    activeChapter: storyState.activeChapter,
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

export default EditStoryForm;
