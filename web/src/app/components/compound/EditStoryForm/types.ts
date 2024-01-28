import { UseFormReturn } from "react-hook-form";

export type Fields = {
  form: UseFormReturn<
    {
      storyTitle: string;
      chapterTitle: string;
      markdown: string;
    },
    undefined
  >;
  onSubmit: () => void;
};

export type UseEditStoryFormState = {
  form: UseFormReturn<
    {
      storyTitle: string;
      chapterTitle: string;
      markdown: string;
    },
    undefined
  >;
  editStory: (
    storyTitle: string,
    chapterTitle: string,
    markdown: string
  ) => Promise<void>;
};
