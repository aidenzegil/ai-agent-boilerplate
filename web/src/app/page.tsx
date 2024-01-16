"use client";

import BannerSelector from "./components/common/dataDisplay/BannerSelector/component";
import SectionHeader from "./components/common/presentational/SectionHeader/component";
import NavBar from "./components/compound/NavBar";
import {
  AuthContextProvider,
  useAuthContext,
} from "./providers/AuthProvider/provider";

export default function Home() {
  return (
    <AuthContextProvider>
      <main style={{ width: "100%" }}>
        {/* <Thing /> */}
        <NavBar />
        <SectionHeader children="Popular Titles" />

        <BannerSelector
          likes={333}
          title="this story about this"
          onClick={() => console.log("hello")}
          active={false}
        />
      </main>
    </AuthContextProvider>
  );
}

// const Thing = () => {
//   const { authFunctions } = useAuthContext();
//   return (
//     <button
//       style={{ backgroundColor: "white" }}
//       onClick={() => authFunctions.signInWithGoogle()}
//     >
//       sign in with google
//     </button>
//   );
// };
