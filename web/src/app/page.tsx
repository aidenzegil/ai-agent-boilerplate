"use client";

import HomePage from "./components/pages/HomePage";
// import { useAuthContext } from "./providers/AuthProvider/provider";

export default function Home() {
  return <HomePage />;
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
