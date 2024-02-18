import { useHomePageDataProps } from "@/app/components/pages/HomePage/types";

export const useHomePageData = ({ router }: useHomePageDataProps) => {
  const onClick = (storyId: string) => {
    router.push(`/readstory/${storyId}`);
  };

  const fetchAllStories = () => {};

  return { onClick };
};
