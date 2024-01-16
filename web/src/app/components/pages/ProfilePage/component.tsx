"use client";

import React from "react";
import NavBar from "../../compound/NavBar";
import SectionHeader from "../../common/presentational/SectionHeader/component";
import BannerSelector from "../../common/dataDisplay/BannerSelector/component";
import { BannerFields, StoryFields, UserFields } from "./types";

const Component = ({ active, onClick }: BannerFields) => {
  return (
    <div>
      <NavBar />
      <img alt="user profile image" />
      <div>Username Example with profile pic above</div>
      <SectionHeader children="Continue Stories" />
      <BannerSelector
        likes={333}
        title="this story about something"
        onClick={onClick}
        active={active}
      />
      <SectionHeader children="Liked Stories" />
      <BannerSelector
        likes={333}
        title="this story about something"
        onClick={onClick}
        active={active}
      />
    </div>
  );
};

export default Component;
