import ChapterReader from "@/app/components/compound/ChapterReader";
import { Fields } from "@/app/components/pages/ReadStoryPage/types";
import ClientWrapper from "@/app/components/wrappers/ClientWrapper";
import Link from "next/link";

const Component = ({ onClick, storyChapters, story, isLoggedIn }: Fields) => {
  return (
    <div>
      {/* should be isAuthor here, not isLoggedIn */}
      {isLoggedIn ? (
        <div>
          <h2 className="card-title pl-4 pb-6">{story.title}</h2>
          <div className="flex mx-4">
            <div className="grid flex-grow card w-[20%] overflow-scroll rounded-box place-items-start">
              <div className="collapse bg-base-300 collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Chapters
                </div>
                <div className="collapse-content">
                  <ul className="menu p-4 overflow-scroll text-base-content text-base">
                    {storyChapters &&
                      storyChapters.map((chapter) => (
                        <button
                          key={chapter.id}
                          className="btn btn-secondary shadow w-full place-items-center rounded-full mb-3"
                          onClick={() => onClick(chapter.id)}
                        >
                          {chapter.title}
                        </button>
                      ))}
                    <Link href="/dashboard/editstory/story/chapter">
                      <button className="btn btn-secondary shadow w-full place-items-center rounded-full">
                        Add Chapter +
                      </button>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="divider divider-horizontal"></div>

            <ChapterReader />
          </div>
        </div>
      ) : (
        <div>
          <h2 className="card-title pl-4 pb-6">{story.title}</h2>
          <div className="flex mx-4">
            <div className="grid flex-grow card w-[20%] overflow-scroll rounded-box place-items-start">
              <div className="collapse bg-base-300 collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Chapters
                </div>
                <div className="collapse-content">
                  <ul className="menu p-4 overflow-scroll text-base-content text-base">
                    {storyChapters &&
                      storyChapters.map((chapter) => (
                        <button
                          key={chapter.id}
                          className="btn btn-secondary shadow w-full place-items-center rounded-full mb-3"
                          onClick={() => onClick(chapter.id)}
                        >
                          {chapter.title}
                        </button>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="divider divider-horizontal"></div>

            <ChapterReader />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientWrapper(Component);