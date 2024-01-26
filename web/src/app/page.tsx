"use client";

import HomePage from "./components/pages/HomePage";
import {
  AuthContextProvider,
  useAuthContext,
} from "./providers/AuthProvider/provider";

export default function Home() {
  return (
    <AuthContextProvider>
      <main>
        {/* <Thing /> */} <HomePage />
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
