import React from "react";
import s from "./styles.module.scss";

import { Fields } from "./types";
import Link from "next/link";

const Component = ({ visible, currentUser }: Fields) => {
  return (
    <div
      className={`${s.container} ${!visible && s.hidden} navbar bg-base-100`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/homepage">Homepage</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/login">Log In</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl" href="/homepage">
          WetPages
        </a>
      </div>
      <div className="navbar-end">
        {/* <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button> */}
        <Link href="/dashboard">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <img src={currentUser.profilePictureUrl || undefined} />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </Link>
      </div>
    </div>
    // <div className={`${s.container} ${!visible && s.hidden}`}>
    //   <Link href={"/pages/homepage"}>
    //     <div className={s.leftContainer}>
    //       <LuBook className={s.logo} />
    //       <div className={s.title}>Wet Pages</div>
    //     </div>
    //   </Link>

    //   <div className={s.rightContainer}>
    //     {/* <div className={s.search}>
    //       <MdOutlineSearch className={s.searchLogo} />
    //     </div> */}
    //     <div className={s.profile}>
    //       <CgProfile
    //         onClick={() => console.log("navigate to profile")}
    //         className={s.profileLogo}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Component;
