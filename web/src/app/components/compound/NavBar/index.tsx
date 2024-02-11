import useScrollController from "@/app/hooks/useScrollDirection";
import Component from "./component";
import { useNavBarData } from "./data";
import { useAuthContext } from "@/app/providers/AuthProvider/provider";

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
