import React from "react";
import s from "./styles.module.scss";
import { LuBook } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { Fields } from "./types";
import Link from "next/link";
// import { MdOutlineSearch } from "react-icons/md";

const Component = ({ visible }: Fields) => {
  return (
    <div className={`${s.container} ${!visible && s.hidden}`}>
      <Link href={"/pages/homepage"}>
        <div className={s.leftContainer}>
          <LuBook className={s.logo} />
          <div className={s.title}>Wet Pages</div>
        </div>
      </Link>

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

export default Component;
