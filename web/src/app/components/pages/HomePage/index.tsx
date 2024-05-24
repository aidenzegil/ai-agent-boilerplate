import { useRouter } from "next/navigation";

import { useStoryProviderContext } from "@/app/providers/StoryProvider/provider";

import Component from "./component";
import { useHomePageData } from "./data";

const HomePage = () => {
  const router = useRouter();
  const { state } = useStoryProviderContext();
  const { onClick } = useHomePageData({
    router,
    state,
  });

  return (
    <div>
      <Component onClick={onClick} popularStories={state.allStories} />
    </div>
  );
};

export default HomePage;
