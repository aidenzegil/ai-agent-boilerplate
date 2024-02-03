import Footer from "@/app/components/common/surfaces/Footer/component";
import NavBar from "@/app/components/compound/NavBar";
import { Fields } from "@/app/components/pages/ReadStoryPage/types";
import classNames from "classnames";
import { FullScreen } from "react-full-screen";
import s from "./styles.module.scss";

const Component = ({
  onClick,
  storyChapters,
  story,
  chapter,
  handle,
}: Fields) => {
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
                  <li className="bg-base-100 rounded-box mb-3" key={chapter.id}>
                    <a onClick={() => onClick(chapter.id)}>{chapter.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div
          className={classNames(
            s.viewContainer,
            "grid flex-grow card w-96 overflow-scroll h-[89vh] bg-base-300 rounded-box place-items-center"
          )}
        >
          <div className="card-body">
            <div className={s.readingHeader}>
              <h2 className="card-title">{chapter.title}</h2>
              <div className={s.fullscreenButton}>
                <button onClick={handle.enter}>
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className={s.fullscreen}
                  >
                    <title>fullscreen_line</title>
                    <g
                      id="页面-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Media"
                        transform="translate(-480.000000, 0.000000)"
                        fill-rule="nonzero"
                      >
                        <g
                          id="fullscreen_line"
                          transform="translate(480.000000, 0.000000)"
                        >
                          <path
                            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                            id="MingCute"
                            fill-rule="nonzero"
                          ></path>
                          <path
                            d="M4,15 C4.55228,15 5,15.4477 5,16 L5,19 L8,19 C8.55228,19 9,19.4477 9,20 C9,20.5523 8.55228,21 8,21 L5,21 C3.89543,21 3,20.1046 3,19 L3,16 C3,15.4477 3.44772,15 4,15 Z M20,15 C20.51285,15 20.9355092,15.386027 20.9932725,15.8833761 L21,16 L21,19 C21,20.0543909 20.18415,20.9181678 19.1492661,20.9945144 L19,21 L16,21 C15.4477,21 15,20.5523 15,20 C15,19.48715 15.386027,19.0644908 15.8833761,19.0067275 L16,19 L19,19 L19,16 C19,15.4477 19.4477,15 20,15 Z M19,3 C20.0543909,3 20.9181678,3.81587733 20.9945144,4.85073759 L21,5 L21,8 C21,8.55228 20.5523,9 20,9 C19.48715,9 19.0644908,8.61395571 19.0067275,8.11662025 L19,8 L19,5 L16,5 C15.4477,5 15,4.55228 15,4 C15,3.48716857 15.386027,3.06449347 15.8833761,3.0067278 L16,3 L19,3 Z M8,3 C8.55228,3 9,3.44772 9,4 C9,4.51283143 8.61395571,4.93550653 8.11662025,4.9932722 L8,5 L5,5 L5,8 C5,8.55228 4.55228,9 4,9 C3.48716857,9 3.06449347,8.61395571 3.0067278,8.11662025 L3,8 L3,5 C3,3.94563773 3.81587733,3.08183483 4.85073759,3.00548573 L5,3 L8,3 Z"
                            id="形状"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
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
            <div className="card-actions justify-end pt-4">
              <Footer visible={true} />
            </div>
          </div>
        </div>
      </div>
      <FullScreen handle={handle}>
        <div
          className={classNames(
            s.viewContainerFull,
            `grid flex-grow card overflow-scroll w-96 bg-base-300 place-items-start ${
              !handle.active && "hidden"
            }`
          )}
        >
          <div className="card-body">
            <div className={s.readingHeader}>
              <h2 className="card-title">{chapter.title}</h2>
              <div className={s.fullscreenButton}>
                <button onClick={handle.exit}>
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className={s.fullscreen}
                  >
                    <title>fullscreen_exit_line</title>
                    <g
                      id="页面-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Media"
                        transform="translate(-432.000000, 0.000000)"
                      >
                        <g
                          id="fullscreen_exit_line"
                          transform="translate(432.000000, 0.000000)"
                        >
                          <path
                            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                            id="MingCute"
                            fill-rule="nonzero"
                          ></path>
                          <path
                            d="M20,7 L17,7 L17,4 C17,3.44772 16.5523,3 16,3 C15.4477,3 15,3.44772 15,4 L15,7 C15,8.10457 15.8954,9 17,9 L20,9 C20.5523,9 21,8.55229 21,8 C21,7.44772 20.5523,7 20,7 Z M7,9 C8.10457,9 9,8.10457 9,7 L9,4 C9,3.44772 8.55229,3 8,3 C7.44772,3 7,3.44772 7,4 L7,7 L4,7 C3.44772,7 3,7.44771 3,8 C3,8.55228 3.44772,9 4,9 L7,9 Z M7,17 L4,17 C3.44772,17 3,16.5523 3,16 C3,15.4477 3.44772,15 4,15 L7,15 C8.10457,15 9,15.8954 9,17 L9,20 C9,20.5523 8.55228,21 8,21 C7.44771,21 7,20.5523 7,20 L7,17 Z M17,15 C15.8954,15 15,15.8954 15,17 L15,20 C15,20.5523 15.4477,21 16,21 C16.5523,21 17,20.5523 17,20 L17,17 L20,17 C20.5523,17 21,16.5523 21,16 C21,15.4477 20.5523,15 20,15 L17,15 Z"
                            id="形状"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            <p className="px-10 text">
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
              classical literature, discovered thkham.Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum etContrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered thkham.Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum etContrary to popular belief, Lorem
              Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin
              words, consectetur, from a Lorem Ipsum passage, and going through
              the cites of the word in classical literature, discovered
              thkham.Contrary to popular belief, Lorem Ipsum is not simply
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
            <div className="card-actions justify-end pt-4">
              <Footer visible={true} />
            </div>
          </div>
        </div>
      </FullScreen>
    </div>
  );
};

export default Component;
