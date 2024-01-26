import React from "react";
import StoryCard from "../../common/dataDisplay/StoryCard/component";
import SectionHeader from "../../common/presentational/SectionHeader/component";
import NavBar from "../../compound/NavBar";
import { Opinion } from "@/app/fakeObjects/fakeStory";
import { FIELDS } from "./types";
import s from "./styles.module.scss";

const Component = ({ popularStories, onClick, activeStoryId }: FIELDS) => {
  return (
    <div>
      <NavBar />
      <SectionHeader children="Popular Titles" />
      <div className={s.mapContainer}>
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
    </div>
  );
};

export default Component;
