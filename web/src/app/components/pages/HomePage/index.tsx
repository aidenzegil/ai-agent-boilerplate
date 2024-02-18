import { useRouter } from "next/navigation";

import { FAKE_STORY_LIST } from "@/app/fakeObjects/fakeStory";

import Component from "./component";
import { useHomePageData } from "./data";

const HomePage = () => {
  const router = useRouter();
  const { onClick } = useHomePageData({ router });

  return (
    <div>
      <Component onClick={onClick} popularStories={FAKE_STORY_LIST} />
    </div>
  );
};

export default HomePage;
