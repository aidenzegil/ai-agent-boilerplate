import { useState } from "react";

export const useDashboardPageData = () => {
  const [activeStoryId, setActiveStoryId] = useState<string | undefined>();
  const onClick = (storyId: string) => {
    if (storyId === activeStoryId) {
      console.log("navigate");
      return;
    }
    setActiveStoryId(storyId);
  };
  return { onClick, activeStoryId };
};
