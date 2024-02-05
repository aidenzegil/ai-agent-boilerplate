import { useState } from "react";
import { AuthProviderStateController } from "./types";
import { PrivateUser } from "@/app/common/types/user";
import useSessionStorage from "../utils/useLocalStorage";
import safelyParseJSON from "../utils/safelyParseJson";

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

    return {
      state: {
        user,
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
