import { FAKE_STORY_LIST } from "@/app/fakeObjects/fakeStory";
import { AuthContextProvider } from "@/app/providers/AuthProvider/provider";
import Component from "./component";
import { useHomePageData } from "./data";

const HomePage = () => {
  const { onClick } = useHomePageData();
  return (
    <div>
      <AuthContextProvider>
        <Component onClick={onClick} popularStories={FAKE_STORY_LIST} />
      </AuthContextProvider>
    </div>
  );
};

export default HomePage;
