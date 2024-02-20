import EditStoryForm from "@/app/components/compound/EditStoryForm";
import ClientWrapper from "@/app/components/wrappers/ClientWrapper";
import Link from "next/link";
import { Fields } from "./types";

const Component = ({ isLoggedIn }: Fields) => {
  return (
    <div>
      {!isLoggedIn && (
        <div className="flex justify-center mt-[10%]">
          <ul className="menu menu-horizontal bg-base-200 rounded-box space-x-2">
            <Link href={"/signup"}>
              <li className="btn btn-primary">Sign Up</li>
            </Link>
            <Link href={"/login"}>
              <li className="btn btn-primary">Log In</li>
            </Link>
          </ul>
        </div>
      )}
      {isLoggedIn && (
        <div>
          {/* <NavBar /> */}
          <EditStoryForm />
        </div>
      )}
    </div>
  );
};

export default ClientWrapper(Component);
