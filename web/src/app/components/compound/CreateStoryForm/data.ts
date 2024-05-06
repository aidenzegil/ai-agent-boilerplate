import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { UseCreateStoryFormData } from "./types";

export const useCreateStoryFormData = ({
  form,
  storyFunctions,
  activeStory,
}: UseCreateStoryFormData) => {
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
    await storyFunctions.createStory({ title: storyTitle });

    if (!activeStory) {
      toast("Could not create story, please refresh the page");
      return;
    }

    // NOTE: index is set to zero because this form will always only create the first chapter of a new story

    await storyFunctions.createChapter({
      title: chapterTitle,
      content: markdown,
      index: 0,
      storyId: activeStory.id,
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
