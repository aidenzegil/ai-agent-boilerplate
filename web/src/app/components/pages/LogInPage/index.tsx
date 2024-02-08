import React from "react";
import Component from "./component";
import { useAuthContext } from "@/app/providers/AuthProvider/provider";

const LogInPage = () => {
  const { state } = useAuthContext();
  console.log(state.user);
  return (
    <div>
      <Component />
    </div>
  );
};

export default LogInPage;
