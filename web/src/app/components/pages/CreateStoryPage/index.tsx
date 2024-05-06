"use client";

import { useAuthContext } from "@/app/providers/AuthProvider/provider";

import Component from "./component";

const CreateStoryPage = () => {
  const { state } = useAuthContext();

  return (
    <div>
      <Component isLoggedIn={state.loggedIn} />
    </div>
  );
};

export default CreateStoryPage;
