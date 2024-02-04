import ChapterReader from "@/app/components/compound/ChapterReader";
import NavBar from "@/app/components/compound/NavBar";
import { Fields } from "@/app/components/pages/ReadStoryPage/types";

const Component = ({ onClick, storyChapters, story }: Fields) => {
  return (
    <div>
      <NavBar />
      <h2 className="card-title pl-4 pb-6">{story.title}</h2>
      <div className="flex mx-4">
        <div className="grid flex-grow card w-[20%] overflow-scroll rounded-box place-items-start">
          <div className="collapse bg-base-300 collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Chapters</div>
            <div className="collapse-content">
              <ul className="menu p-4 overflow-scroll text-base-content text-base">
                {storyChapters.map((chapter) => (
                  <li
                    className="bg-secondary rounded-box mb-3"
                    key={chapter.id}
                  >
                    <a onClick={() => onClick(chapter.id)}>{chapter.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>

        <ChapterReader />
      </div>
    </div>
  );
};

export default Component;
