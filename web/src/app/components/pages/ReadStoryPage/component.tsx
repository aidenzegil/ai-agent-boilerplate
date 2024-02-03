import StoryCard from "@/app/components/common/dataDisplay/StoryCard/component";
import Footer from "@/app/components/common/surfaces/Footer/component";
import NavBar from "@/app/components/compound/NavBar";
import { FIELDS } from "@/app/components/pages/ReadStoryPage/types";
import s from "./styles.module.scss";

const Component = ({ onClick, storyChapters, story, chapter }: FIELDS) => {
  return (
    <div>
      <NavBar />
      <div className="flex mx-4">
        <div className="grid flex-grow card w-fit overflow-scroll h-[89vh] bg-base-300 rounded-box place-items-start">
          <h2 className="card-title">{story.title}</h2>
          <div>
            {storyChapters.map((chapter) => (
              <StoryCard
                key={chapter.id}
                title={chapter.title}
                onClick={() => onClick(chapter.id)}
              />
            ))}
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid flex-grow card w-96 overflow-scroll h-[89vh] bg-base-300 rounded-box place-items-center">
          <div className="card-body">
            <div className={s.readingHeader}>
              <h2 className="card-title">{chapter.title}</h2>
              <div className={s.fullscreenButton}>
                <button>
                  <img src="/fullscreen.svg" className={s.fullscreen} />
                </button>
              </div>
            </div>

            <p>
              {chapter.content}
              anLorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum etContrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum etContrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum etContrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum etContrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum etContrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et
            </p>
            <div className="card-actions justify-end">
              <Footer visible={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
