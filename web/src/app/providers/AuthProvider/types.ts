import { PrivateUser } from "@/app/common/types/user";
import { Dispatch, SetStateAction } from "react";

export type AuthProviderState = {
  user: PrivateUser | undefined;
  loggedIn: boolean;
};

export type AuthProviderLoading = {
  loading: boolean;
};

export type AuthProviderSetLoading = {
  setUserLoading: Dispatch<SetStateAction<boolean>>;
};

export type AuthProviderStateController = {
  state: AuthProviderState;
  set: AuthProviderSet;
  // Network State
  setLoading: AuthProviderSetLoading;
  loading: AuthProviderLoading;
};

export type AuthProviderSet = {
  setUser: Dispatch<SetStateAction<PrivateUser | undefined>>;
};

export type AuthProviderFunctions = {
  signUp: (
    email: string,
    password: string,
    username: string,
    profilePictureUrl: string
  ) => Promise<void>;
  // signInWithGoogle: () => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
};
