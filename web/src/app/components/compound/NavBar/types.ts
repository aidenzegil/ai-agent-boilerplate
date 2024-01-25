import { FakeUser } from "@/app/fakeObjects/fakeUser";
import { ScrollDirection } from "@/app/hooks/useScrollDirection";

export type NavBarStateProps = {
  scrollDirection?: ScrollDirection;
};

export type Fields = {
  visible: boolean;
  currentUser: FakeUser;
};
