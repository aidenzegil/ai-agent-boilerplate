import Link from "next/link";
import s from "./styles.module.scss";
import { Fields } from "./types";

const Component = ({ visible, isLoggedIn, user }: Fields) => {
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
              <a href="/">Homepage</a>
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
        <a className="btn btn-ghost text-xl" href="/">
          WetPages
        </a>
      </div>
      <div className="navbar-end">
        <Link href="/dashboard">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              {isLoggedIn ? (
                <img
                  src={
                    "https://wallpapers.com/images/high/smiley-default-pfp-0ujhadx5fhnhydlb.webp"
                  }
                />
              ) : (
                <img src={"/defaultProfilePicture"} />
              )}

              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Component;
