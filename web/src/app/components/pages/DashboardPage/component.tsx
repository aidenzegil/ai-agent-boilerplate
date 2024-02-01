"use client";

import React from "react";
import NavBar from "../../compound/NavBar";
import SectionHeader from "../../common/presentational/SectionHeader/component";
import BannerSelector from "../../common/dataDisplay/BannerSelector/component";
import { Fields } from "./types";
import s from "./styles.module.scss";
import Button from "../../common/inputs/Button/component";
import { Opinion } from "@/app/fakeObjects/fakeStory";
import { ButtonSize } from "../../common/inputs/Button/types";

const Component = ({
  activeStoryId,
  currentUser,
  likedStories,
  authoredStories,
  onClick,
}: Fields) => {
  return (
    <div>
      <NavBar />
      <div className={s.container}>
        <img
          src={currentUser.profilePictureUrl || undefined}
          className={s.userProfile}
        />
        <div className={s.username}>{currentUser.username}</div>
        {/* TODO: Make button link to create story page */}
        <Button
          size={ButtonSize.MEDIUM}
          className={s.button}
          onClick={() => {
            console.log("naviage to create a story page");
          }}
        >
          Create a Story
        </Button>
      </div>
      <SectionHeader children="My Stories" />
      {authoredStories.map((story) => (
        <BannerSelector
          key={story.id}
          likes={
            story.reactions.filter(
              (reaction) => reaction.opinion == Opinion.LIKE
            ).length
          }
          title={story.title}
          onClick={() => onClick(story.id)}
          active={story.id === activeStoryId}
        />
      ))}
      <SectionHeader children="Liked Stories" />
      {likedStories.map((story) => (
        <BannerSelector
          key={story.id}
          likes={
            story.reactions.filter(
              (reaction) => reaction.opinion == Opinion.LIKE
            ).length
          }
          title={story.title}
          onClick={() => onClick(story.id)}
          active={story.id === activeStoryId}
        />
      ))}
    </div>
  );
};

export default Component;
