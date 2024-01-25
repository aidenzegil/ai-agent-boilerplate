import React from "react";
import StoryCard from "../../common/dataDisplay/StoryCard/component";
import SectionHeader from "../../common/presentational/SectionHeader/component";
import NavBar from "../../compound/NavBar";
import { Opinion } from "@/app/fakeObjects/fakeStory";
import { FIELDS } from "./types";

const Component = ({ popularStories, onClick, activeStoryId }: FIELDS) => {
  return (
    <div>
      <NavBar />
      <SectionHeader children="Popular Titles" />

      {popularStories.map((story) => (
        <StoryCard
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
