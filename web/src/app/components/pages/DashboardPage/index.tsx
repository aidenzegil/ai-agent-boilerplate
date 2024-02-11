"use client";

import { FAKE_STORY_LIST } from "@/app/fakeObjects/fakeStory";
import { useAuthContext } from "@/app/providers/AuthProvider/provider";

import Component from "./component";
import { useDashboardPageData } from "./data";

const Dashboard = () => {
  const { onClick } = useDashboardPageData();
  const { state } = useAuthContext();

  return (
    <div>
      <Component
        user={state.user}
        isLoggedIn={state.loggedIn}
        onClick={onClick}
        likedStories={FAKE_STORY_LIST}
        authoredStories={FAKE_STORY_LIST}
      />
    </div>
  );
};

export default Dashboard;
