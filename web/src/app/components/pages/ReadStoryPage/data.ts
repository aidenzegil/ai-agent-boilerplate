export const useReadStoryPageData = () => {
  const onClick = (chapterId: string) => {
    console.log(chapterId);
  };

  return { onClick };
};
