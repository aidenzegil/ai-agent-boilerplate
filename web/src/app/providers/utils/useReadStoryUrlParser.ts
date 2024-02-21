const useReadStoryUrlParser = (
  currentUrl: string
): { chapterId?: string; storyId?: string } => {
  const urlSegments = currentUrl.split("/");
  const indexOfReadStory = urlSegments.indexOf("readstory");
  const indexOfReadStoryHealthy = indexOfReadStory !== -1;
  const indexOfChapter = urlSegments.indexOf("chapter");
  const indexOfChapterHealthy = indexOfChapter !== -1;

  const chapterIdIndex = indexOfChapter + 1;
  const storyIdIndex = indexOfReadStory + 1;

  if (!indexOfReadStoryHealthy) {
    return { chapterId: undefined, storyId: undefined };
  }

  if (!indexOfChapterHealthy && storyIdIndex) {
    return { chapterId: undefined, storyId: urlSegments[storyIdIndex] };
  }

  if (indexOfChapterHealthy && chapterIdIndex) {
    return {
      chapterId: urlSegments[chapterIdIndex],
      storyId: urlSegments[storyIdIndex],
    };
  }
  return { chapterId: undefined, storyId: undefined };
};

export default useReadStoryUrlParser;
