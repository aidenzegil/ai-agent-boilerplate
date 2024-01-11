"use client";

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
