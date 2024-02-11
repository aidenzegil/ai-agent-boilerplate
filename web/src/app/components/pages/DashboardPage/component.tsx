"use client";

import StoryCard from "@/app/components/common/dataDisplay/StoryCard/component";
import SectionHeader from "@/app/components/common/presentational/SectionHeader/component";
import NavBar from "@/app/components/compound/NavBar";
import ClientWrapper from "@/app/components/wrappers/ClientWrapper";
import { Opinion } from "@/app/fakeObjects/fakeStory";
import Link from "next/link";
import s from "./styles.module.scss";
import { Fields } from "./types";

const Component = ({
  user,
  isLoggedIn,
  likedStories,
  authoredStories,
  onClick,
}: Fields) => {
  return (
    <div>
      {isLoggedIn && (
        <div>
          <NavBar />

          <div className={s.container}>
            <img src={user?.profilePictureUrl} className={s.userProfile} />
            <div className={s.secondContainer}>
              <h1 className="text-2xl font-bold mt-2 mb-4">{user?.username}</h1>
              {/* TODO: Make button link to create story page */}
              <Link href={`/dashboard/${user?.username}/createstory`}>
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
      )}
    </div>
  );
};

export default ClientWrapper(Component);
