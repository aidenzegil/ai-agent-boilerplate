import useScrollController from "@/app/hooks/useScrollDirection";
import { useAuthProviderStateController } from "@/app/providers/AuthProvider/state";

import Component from "./component";
import { useNavBarData } from "./data";

const NavBar = () => {
  const { scrollDirection } = useScrollController();
  const { state } = useAuthProviderStateController();
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
