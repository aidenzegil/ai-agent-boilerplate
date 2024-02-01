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

export type UseEditStoryFormData = {
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
