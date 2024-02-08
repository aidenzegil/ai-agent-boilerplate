import { PrivateUser } from "@/app/common/types/user";
import { ScrollDirection } from "@/app/hooks/useScrollDirection";

export type UseNavBarDataProps = {
  scrollDirection?: ScrollDirection;
};

export type Fields = {
  visible: boolean;
  isLoggedIn: boolean;
  user: PrivateUser | undefined;
};
