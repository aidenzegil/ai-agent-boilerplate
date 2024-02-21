import Component from "@/app/components/pages/ReadStoryPage/component";
import { useReadStoryPageData } from "@/app/components/pages/ReadStoryPage/data";
import { useAuthContext } from "@/app/providers/AuthProvider/provider";
import { useStoryProviderContext } from "@/app/providers/StoryProvider/provider";

const ReadStoryPage = () => {
  const { state: storyProviderState, loading: storyProviderLoading } =
    useStoryProviderContext();
  const { onClick, sortedChapters } = useReadStoryPageData(
    storyProviderState.activeStory?.chapters
  );
  const { state } = useAuthContext();
  if (
    !storyProviderState.activeStory ||
    storyProviderLoading.activeStoryLoading ||
    storyProviderLoading.activeChapterLoading
  ) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Component
        onClick={onClick}
        storyChapters={sortedChapters}
        story={storyProviderState.activeStory}
        chapter={storyProviderState.activeChapter}
        isLoggedIn={state.loggedIn}
      />
    </div>
  );
};

export default ReadStoryPage;
