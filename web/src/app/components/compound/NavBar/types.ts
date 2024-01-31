import { FakeUser } from "@/app/fakeObjects/fakeUser";
import { ScrollDirection } from "@/app/hooks/useScrollDirection";

export type UseNavBarDataProps = {
  scrollDirection?: ScrollDirection;
};

export type Fields = {
  visible: boolean;
  currentUser: FakeUser;
};
