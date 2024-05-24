import { PrivateUser } from "@/app/common/types/user";
import { useState } from "react";
import safelyParseJSON from "../utils/safelyParseJson";
import useSessionStorage from "../utils/useLocalStorage";
import { AuthProviderStateController } from "./types";

export const useAuthProviderStateController =
  (): AuthProviderStateController => {
    const [loading, setUserLoading] = useState(false);

    const [user, setUser] = useSessionStorage<PrivateUser | undefined>(
      "UserProviderUser",
      (typeof window !== "undefined" &&
        safelyParseJSON<PrivateUser | undefined>(
          sessionStorage.getItem("UserProviderUser") || ""
        )) ||
        undefined
    );

    const loggedIn = !!user?.id;

    return {
      state: {
        user,
        loggedIn,
      },
      set: {
        setUser,
      },
      // Network State
      setLoading: {
        setUserLoading,
      },
      loading: {
        loading,
      },
    };
  };
