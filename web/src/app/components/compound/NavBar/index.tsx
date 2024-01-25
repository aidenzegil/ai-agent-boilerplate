import React from "react";
import Component from "./component";
import { useNavBarState } from "./data";
import useScrollController from "@/app/hooks/useScrollDirection";
import { FAKE_USER_1 } from "@/app/fakeObjects/fakeUser";

const NavBar = () => {
  const { scrollDirection } = useScrollController();
  const { visible } = useNavBarState({ scrollDirection });
  return <Component visible={visible} currentUser={FAKE_USER_1} />;
};

export default NavBar;
