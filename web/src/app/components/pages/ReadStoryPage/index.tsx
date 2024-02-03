import Component from "@/app/components/pages/ReadStoryPage/component";
import { useReadStoryPageData } from "@/app/components/pages/ReadStoryPage/data";
import {
  FAKE_CHAPTER_1,
  FAKE_CHAPTER_ARRAY,
  FAKE_STORY_1,
} from "@/app/fakeObjects/fakeStory";

const ReadStoryPage = () => {
  const { onClick } = useReadStoryPageData();
  return (
    <div>
      <Component
        onClick={onClick}
        storyChapters={FAKE_CHAPTER_ARRAY}
        story={FAKE_STORY_1}
        chapter={FAKE_CHAPTER_1}
      />
    </div>
  );
};

export default ReadStoryPage;
