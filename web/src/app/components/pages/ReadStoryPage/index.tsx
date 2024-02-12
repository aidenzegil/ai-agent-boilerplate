"use client";

import Component from "@/app/components/pages/ReadStoryPage/component";
import { useReadStoryPageData } from "@/app/components/pages/ReadStoryPage/data";
import {
  FAKE_CHAPTER_1,
  FAKE_CHAPTER_ARRAY,
  FAKE_STORY_1,
} from "@/app/fakeObjects/fakeStory";
import { useAuthContext } from "@/app/providers/AuthProvider/provider";

const ReadStoryPage = () => {
  const storyChapters = FAKE_CHAPTER_ARRAY;
  const { onClick, sortedChapters } = useReadStoryPageData(storyChapters);
  const { state } = useAuthContext();
  return (
    <div>
      <Component
        onClick={onClick}
        storyChapters={sortedChapters}
        story={FAKE_STORY_1}
        chapter={FAKE_CHAPTER_1}
        isLoggedIn={state.loggedIn}
      />
    </div>
  );
};

export default ReadStoryPage;
