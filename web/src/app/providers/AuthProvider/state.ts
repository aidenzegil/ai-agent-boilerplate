import { useState } from "react";
import { AuthProviderStateController } from "./types";

export const useAuthProviderStateController =
  (): AuthProviderStateController => {
    const [loading, setUserLoading] = useState(false);
    const [user, setUser] = useState({ email: null, uid: null });
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
