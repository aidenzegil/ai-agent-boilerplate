"use client";
import React, { useState } from "react";
import Component from "./component";
import { useRouter } from "next/router";
import { useDashboardPageData } from "./data";
import { FAKE_STORY_LIST } from "@/app/fakeObjects/fakeStory";
import { FAKE_USER_1 } from "@/app/fakeObjects/fakeUser";

const Dashboard = () => {
  // const router = useRouter();
  // const navigateToPage = () => router.push(`${router.basePath}/page`);
  const { onClick, activeStoryId } = useDashboardPageData();

  return (
    <div>
      <Component
        currentUser={FAKE_USER_1}
        activeStoryId={activeStoryId}
        onClick={onClick}
        likedStories={FAKE_STORY_LIST}
        authoredStories={FAKE_STORY_LIST}
      />
    </div>
  );
};

export default Dashboard;
