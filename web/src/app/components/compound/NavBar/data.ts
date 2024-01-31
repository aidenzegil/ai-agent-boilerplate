import { ScrollDirection } from "@/app/hooks/useScrollDirection";
import { UseNavBarDataProps } from "./types";

export const useNavBarData = ({ scrollDirection }: UseNavBarDataProps) => {
  const visible = scrollDirection === ScrollDirection.Up || !scrollDirection;
  return { visible };
};
