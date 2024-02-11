import useScrollController from "@/app/hooks/useScrollDirection";
import { useAuthContext } from "@/app/providers/AuthProvider/provider";

import Component from "./component";
import { useNavBarData } from "./data";

const NavBar = () => {
  const { scrollDirection } = useScrollController();
  const { state } = useAuthContext();
  const { visible } = useNavBarData({ scrollDirection });

  return (
    <Component
      visible={visible}
      isLoggedIn={state.loggedIn}
      user={state.user}
    />
  );
};

export default NavBar;
