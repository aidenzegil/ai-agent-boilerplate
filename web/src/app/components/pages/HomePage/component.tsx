import { Opinion } from "@/app/common/types/outputDtos";
import StoryCard from "@/app/components/common/dataDisplay/StoryCard/component";
import SectionHeader from "@/app/components/common/presentational/SectionHeader/component";
import NavBar from "@/app/components/compound/NavBar";
import ClientWrapper from "@/app/components/wrappers/ClientWrapper";
import { ToastContainer } from "react-toastify";
import s from "./styles.module.scss";
import { Fields } from "./types";

const Component = ({ popularStories, onClick }: Fields) => {
  console.log(popularStories);
  return (
    <div>
      <NavBar />
      <ToastContainer />
      <SectionHeader children="Popular Titles" />

      <div className={s.mapContainer}>
        {Object.values(popularStories).map((story) => (
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

export default ClientWrapper(Component);
