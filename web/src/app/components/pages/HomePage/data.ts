import { useHomePageDataProps } from "@/app/components/pages/HomePage/types";
import "react-toastify/dist/ReactToastify.css";

export const useHomePageData = ({ router, state }: useHomePageDataProps) => {
  const onClick = (storyId: string) => {
    router.push(`/readstory/${storyId}`);
  };

  return { onClick };
};
