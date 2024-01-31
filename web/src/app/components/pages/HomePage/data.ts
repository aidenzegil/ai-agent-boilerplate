export const useHomePageData = () => {
  const onClick = (storyId: string) => {
    console.log(storyId);
  };

  return { onClick };
};
