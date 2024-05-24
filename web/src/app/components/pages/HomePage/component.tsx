import { Opinion } from "@/app/common/types/outputDtos";
import StoryCard from "@/app/components/common/dataDisplay/StoryCard/component";
import SectionHeader from "@/app/components/common/presentational/SectionHeader/component";
import ClientWrapper from "@/app/components/wrappers/ClientWrapper";
import s from "./styles.module.scss";
import { Fields } from "./types";

const Component = ({ popularStories, onClick }: Fields) => {
  return (
    <div>
      <SectionHeader children="Popular Titles" />

      <div className={s.mapContainer}>
        {popularStories ? (
          Object.values(popularStories).map((story) => (
            <StoryCard
              key={story.id}
              likes={
                story.reactions.filter(
                  (reaction) => reaction.opinion == Opinion.LIKE
                ).length
              }
              title={story.title}
              onClick={() => onClick(story.id, story.chapterIds)}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ClientWrapper(Component);
