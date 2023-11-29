import { ScrollDirection } from "@/app/hooks/useScrollDirection";
import { NavBarStateProps } from "./types";

export const useNavBarState = ({scrollDirection}: NavBarStateProps ) => {
  const visible = scrollDirection === ScrollDirection.Up || !scrollDirection
  return {visible}
}

