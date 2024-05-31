import React, { useContext, useMemo } from "react";
import { createRegisteredContext } from "react-singleton-context";
import { useAuthProviderFunctions } from "./functions";
import { useAuthProviderStateController } from "./state";
import {
  AuthProviderFunctions,
  AuthProviderLoading,
  AuthProviderState,
  AuthProviderStateController,
} from "./types";

type AuthProviderContext = Omit<
  AuthProviderStateController,
  "set" | "setLoading"
> & {
  authFunctions: AuthProviderFunctions;
};

const defaultProvider: AuthProviderContext = {
  state: {
    user: undefined,
    loggedIn: false,
  },
  loading: {
    loading: false,
  },
  authFunctions: {
    signUp: async (email: string, password: string) => {},
    logIn: async (email: string, password: string) => {},
    logOut: async () => {},
    sendPasswordResetEmail: async (email: string) => {},
  },
};

const AuthContext = createRegisteredContext<AuthProviderContext>(
  "auth-provider-context",
  defaultProvider
);

// Create the auth context provider
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const stateController = useAuthProviderStateController();
  const authFunctions = useAuthProviderFunctions(stateController);

  const value = useProviderInterface(
    stateController.state,
    authFunctions,
    stateController.loading
  );

  // Wrap the children with the context provider
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useProviderInterface = (
  state: AuthProviderState,
  authFunctions: AuthProviderFunctions,
  loading: AuthProviderLoading
): AuthProviderContext => {
  return useMemo(
    () => ({
      state,
      authFunctions,
      loading,
    }),
    [state.user, loading.loading]
  );
};

export const useAuthContext = () => useContext(AuthContext);
