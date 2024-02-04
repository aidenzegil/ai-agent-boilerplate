import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { UseEditStoryFormData } from "./types";

export const useEditStoryFormData = ({
  form,
  storyFunctions,
  activeStory,
  activeChapter,
}: UseEditStoryFormData) => {
  const errors = form.formState.errors;

  const fireOffForm = async ({
    storyTitle,
    chapterTitle,
    markdown,
  }: {
    storyTitle: string;
    chapterTitle: string;
    markdown: string;
  }) => {
    if (!activeStory || !activeChapter) {
      toast("Could not find active story or chapter, please refresh the page");
      return;
    }
    await storyFunctions.updateStory({ title: storyTitle, id: activeStory.id });
    await storyFunctions.updateChapter({
      title: chapterTitle,
      content: markdown,
      index: activeChapter.index,
      id: activeChapter.id,
    });
  };

  const onSubmit = async () => {
    await form.handleSubmit(fireOffForm)();
  };

  return { onSubmit, errors };
};

/* NOTE: config should include form: "". However, currently it works without it */
export const formConfig = {
  defaultValues: {
    storyTitle: "",
    chapterTitle: "",
    markdown: "",
  },
  mode: "onChange",
  resolver: yupResolver(
    object({
      storyTitle: string().trim().required().min(1),
      chapterTitle: string().trim().required().min(1),
      markdown: string().trim().required().min(1),
    })
  ),
} as const;
