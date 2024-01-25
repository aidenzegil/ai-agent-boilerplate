import { useState } from "react";

// export const useDashboardPageData = () => {
//   const [activeStoryId, setActiveStoryId] = useState<string | undefined>();
//   const onClick = (storyId: string) => {
//     if (storyId === activeStoryId) {
//       console.log("navigate");
//       return;
//     }
//     setActiveStoryId(storyId);
//   };
//   return { onClick, activeStoryId };
// };

export const useDashboardPageData = () => {
  const onClick = () => {
    console.log("navigate");
  };
  return { onClick };
};
