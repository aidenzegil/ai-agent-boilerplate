import React from "react";
import s from "./styles.module.scss";
import { LuBook } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
// import { MdOutlineSearch } from "react-icons/md";
import { NavBarProps } from "./types";

const NavBar = ({ visible }: NavBarProps) => {
  // TODO: Search Functionality
  console.log(visible);
  return (
    <div className={`${s.container} ${!visible && s.hidden}`}>
      <div className={s.leftContainer}>
        <LuBook
          className={s.logo}
          onClick={() => console.log("navigate to homepage")}
        />
        <a
          className={s.title}
          onClick={() => console.log("navigate to homepage")}
        >
          Wet Pages
        </a>
      </div>

      <div className={s.rightContainer}>
        {/* <div className={s.search}>
          <MdOutlineSearch className={s.searchLogo} />
        </div> */}
        <div className={s.profile}>
          <CgProfile
            onClick={() => console.log("navigate to profile")}
            className={s.profileLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
