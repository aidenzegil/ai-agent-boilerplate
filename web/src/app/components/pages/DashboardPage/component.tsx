"use client";

import React from "react";
import NavBar from "@/app/components/compound/NavBar";
import SectionHeader from "@/app/components/common/presentational/SectionHeader/component";
import StoryCard from "@/app/components/common/dataDisplay/StoryCard/component";
import { Fields } from "./types";
import s from "./styles.module.scss";
import { Opinion } from "@/app/fakeObjects/fakeStory";
import Link from "next/link";

const Component = ({
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
        <div className={s.secondContainer}>
          <h1 className="text-2xl font-bold mt-2 mb-4">
            {currentUser.username}
          </h1>
          {/* TODO: Make button link to create story page */}
          <Link href={"/dashboard/editstory"}>
            <button className="btn">Create a Story</button>
          </Link>
        </div>
      </div>

      <SectionHeader children="My Stories" />

      <div className={s.mapContainer}>
        {authoredStories.map((story) => (
          <StoryCard
            key={story.id}
            likes={
              story.reactions.filter(
                (reaction) => reaction.opinion == Opinion.LIKE
              ).length
            }
            title={story.title}
            onClick={() => onClick(story.id)}
          />
        ))}
      </div>

      <SectionHeader children="Liked Stories" />

      <div className={s.mapContainer}>
        {likedStories.map((story) => (
          <StoryCard
            key={story.id}
            likes={
              story.reactions.filter(
                (reaction) => reaction.opinion == Opinion.LIKE
              ).length
            }
            title={story.title}
            onClick={() => onClick(story.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Component;
