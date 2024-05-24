import Component from "@/app/components/compound/ChapterReader/component";
import { FAKE_CHAPTER_1 } from "@/app/fakeObjects/fakeStory";
import { useFullScreenHandle } from "react-full-screen";

const ChapterReader = () => {
  const handle = useFullScreenHandle();

  return <Component handle={handle} chapter={FAKE_CHAPTER_1} />;
};

export default ChapterReader;
