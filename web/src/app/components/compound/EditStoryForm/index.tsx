import { useStoryProviderContext } from "@/app/providers/StoryProvider/provider";
import { useForm } from "react-hook-form";
import Component from "./component";
import { formConfig, useEditStoryFormData } from "./data";

const EditStoryForm = () => {
  const form = useForm(formConfig);
  const { storyFunctions, state: storyState } = useStoryProviderContext();

  const { onSubmit, errors } = useEditStoryFormData({
    form: form,
    storyFunctions,
    activeStory: storyState.activeStory,
    activeChapter: storyState.activeChapter,
  });
  return (
    <div>
      <Component form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default EditStoryForm;
