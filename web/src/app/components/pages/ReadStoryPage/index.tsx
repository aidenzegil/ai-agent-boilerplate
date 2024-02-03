import Component from "@/app/components/pages/ReadStoryPage/component";
import { useReadStoryPageData } from "@/app/components/pages/ReadStoryPage/data";
import {
  FAKE_CHAPTER_1,
  FAKE_CHAPTER_ARRAY,
  FAKE_STORY_1,
} from "@/app/fakeObjects/fakeStory";
import { useFullScreenHandle } from "react-full-screen";

const ReadStoryPage = () => {
  const handle = useFullScreenHandle();
  const storyChapters = FAKE_CHAPTER_ARRAY;
  const { onClick, sortedChapters } = useReadStoryPageData(storyChapters);
  return (
    <div>
      <Component
        handle={handle}
        onClick={onClick}
        storyChapters={sortedChapters}
        story={FAKE_STORY_1}
        chapter={FAKE_CHAPTER_1}
      />
    </div>
  );
};

export default ReadStoryPage;
