"use client";

import { AgentProvider } from "./agentProvider/provider";
import { AuthContextProvider } from "./authProvider/provider";

const Providers = ({ children }: { children?: React.ReactNode }) => {
  const providers = [AuthContextProvider, AgentProvider];

  return (
    <>
      {providers.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};

export default Providers;
