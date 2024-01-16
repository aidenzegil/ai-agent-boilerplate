"use client";

import React from "react";
import NavBar from "../NavBar";
import SectionHeader from "../../common/presentational/SectionHeader/component";
import BannerSelector from "../../common/dataDisplay/BannerSelector/component";

const Component = () => {
  return (
    <div>
      <NavBar />
      <img alt="user profile image" />
      <div>Username Example with profile pic above</div>
      <SectionHeader children="Continue Stories" />
      <BannerSelector
        likes={333}
        title="this story about something"
        onClick={() => console.log("hello")}
        active={false}
      />
      <SectionHeader children="Liked Stories" />
      <BannerSelector
        likes={333}
        title="this story about something"
        onClick={() => console.log("hello")}
        active={false}
      />
    </div>
  );
};

export default Component;
