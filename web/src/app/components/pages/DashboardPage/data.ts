export const useDashboardPageData = () => {
  const onClick = (storyId: string) => {
    console.log(storyId);
  };
  return { onClick };
};