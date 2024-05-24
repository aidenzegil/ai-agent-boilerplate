import {
  ChapterOutputDto,
  StoryOutputDto,
} from "@/app/common/types/outputDtos";
import { StoryProviderFunctions } from "@/app/providers/StoryProvider/types";
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
  storyFunctions: StoryProviderFunctions;
  activeStory?: StoryOutputDto;
  activeChapter?: ChapterOutputDto;
};