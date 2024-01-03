"use client";

import {
  AuthContextProvider,
  useAuthContext,
} from "./providers/AuthProvider/provider";

export default function Home() {
  return (
    <AuthContextProvider>
      <main style={{ height: "100vh", width: "100%" }}>
        <Thing />
      </main>
    </AuthContextProvider>
  );
}

const Thing = () => {
  const { authFunctions } = useAuthContext();
  return (
    <button
      style={{ backgroundColor: "white" }}
      onClick={() => authFunctions.signInWithGoogle()}
    >
      sign in with google
    </button>
  );
};
