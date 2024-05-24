"use client";

import { AuthContextProvider } from "./AuthProvider/provider";
import { StoryContextProvider } from "./StoryProvider/provider";

const Providers = ({ children }: { children?: React.ReactNode }) => {
  const providers = [AuthContextProvider, StoryContextProvider];

  return (
    <>
      {providers.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};

export default Providers;
