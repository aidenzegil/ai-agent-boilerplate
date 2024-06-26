import { User } from "@/common/types/user";
import { Dispatch, SetStateAction } from "react";

export type AuthProviderState = {
  user: User | undefined;
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
  setUser: Dispatch<SetStateAction<User | undefined>>;
};

export type AuthProviderFunctions = {
  signUp: (email: string, password: string) => Promise<void>;
  // signInWithGoogle: () => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
};
