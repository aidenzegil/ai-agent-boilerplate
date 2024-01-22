import React from "react";
import Component from "./component";
import { useHomePageData } from "./data";
import { FAKE_STORY_LIST } from "@/app/fakeObjects/fakeStory";

const HomePage = () => {
  const { onClick, activeStoryId } = useHomePageData();
  return (
    <div>
      <Component
        onClick={onClick}
        popularStories={FAKE_STORY_LIST}
        activeStoryId={activeStoryId}
      />
    </div>
  );
};

export default HomePage;
