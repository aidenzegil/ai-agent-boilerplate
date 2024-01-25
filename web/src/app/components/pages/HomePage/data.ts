import { useState } from "react";

// export const useHomePageData = () => {
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

export const useHomePageData = () => {
  const onClick = () => {
    console.log("navigate");
  };
  return { onClick };
};
