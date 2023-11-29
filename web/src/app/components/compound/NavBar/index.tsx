import React from "react";
import Component from "./component";
import { useNavBarState } from "./data";
import useScrollController from "@/app/hooks/useScrollDirection";

const NavBar = () => {
  const { scrollDirection } = useScrollController();
  const { visible } = useNavBarState({ scrollDirection });
  return <Component visible={visible} />;
};

export default NavBar;
