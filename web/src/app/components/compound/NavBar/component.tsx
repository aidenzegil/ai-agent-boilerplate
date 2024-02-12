import ClientWrapper from "@/app/components/wrappers/ClientWrapper";
import { useAuthContext } from "@/app/providers/AuthProvider/provider";
import Link from "next/link";
import s from "./styles.module.scss";
import { Fields } from "./types";

const Component = ({ visible, isLoggedIn, user }: Fields) => {
  const { authFunctions } = useAuthContext();

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
          {!isLoggedIn && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
              <li>
                <Link href="/login">Log In</Link>
              </li>
            </ul>
          )}
          {isLoggedIn && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/" onClick={() => authFunctions.logOut()}>
                  Log Out
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-xl" href="/">
          WetPages
        </Link>
      </div>
      <div className="navbar-end">
        {isLoggedIn && (
          <button className="btn btn-ghost btn-circle">
            <Link href={`/dashboard/${user?.username}`}>
              <img src={user?.profilePictureUrl} className="rounded-full" />
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default ClientWrapper(Component);
