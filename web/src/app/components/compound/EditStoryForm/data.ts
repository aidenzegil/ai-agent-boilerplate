import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormReturn } from "react-hook-form";
import { object, string } from "yup";
import { UseEditStoryFormState } from "./types";

export const useEditStoryFormState = ({
  form,
  editStory,
}: UseEditStoryFormState) => {
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
    await editStory(storyTitle, chapterTitle, markdown);
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
