import React from "react";
import StoryCard from "@/app/components/common/dataDisplay/StoryCard/component";
import SectionHeader from "@/app/components/common/presentational/SectionHeader/component";
import NavBar from "@/app/components/compound/NavBar";
import { Opinion } from "@/app/fakeObjects/fakeStory";
import { FIELDS } from "./types";
import s from "./styles.module.scss";

const Component = ({ popularStories, onClick }: FIELDS) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default Component;
