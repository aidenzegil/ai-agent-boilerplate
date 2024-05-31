import {
  type ActionCodeSettings,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  isSignInWithEmailLink,
  OAuthProvider,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
  type UserCredential,
} from "firebase/auth";

import AuthenticationError from "@/common/errors/AuthenticationError";
import { Ok, Err, Result } from "@/common/types/result";
import { auth } from "../firebase/config";
import { environment } from "./environment";
import { throwExpectedError } from "./throwExpectedError";
import WebError from "@/common/errors/WebError";
import { toast } from "react-toastify";

type SigninResult = Result<UserCredential, Error>;
async function handleSignin(
  promise: Promise<UserCredential>
): Promise<SigninResult> {
  try {
    const res = await promise;
    toast("Signed in", { type: "success" });
    return Ok(res);
  } catch (e) {
    const err = e as Error;
    console.error(err);
    toast("Error signing in", { type: "error" });
    return Err(err);
  }
}

export const authService = {
  register: async (email: string, password: string): Promise<SigninResult> => {
    const credentialPromise = createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return handleSignin(credentialPromise);
  },
  resetPassword: async (email: string): Promise<void> => {
    await sendPasswordResetEmail(auth, email);
  },
  sendEmailForPasswordlessSignin: async (
    email: string,
    url?: string
  ): Promise<Result<string, Error>> => {
    const defaultUrl = `${environment.getDomain()}/dashboard`;
    const settings: ActionCodeSettings = {
      handleCodeInApp: true,
      url: url || defaultUrl,
    };

    try {
      await sendSignInLinkToEmail(auth, email, settings);
      window.localStorage.setItem("emailForSignIn", email);

      return Ok("Email sent");
    } catch (e) {
      const err = e as Error;
      console.error(err);
      toast("Error sending email", { type: "error" });
      return Err(err);
    }
  },
  signinWithApple: async (): Promise<SigninResult> => {
    const credentialPromise = signInWithPopup(
      auth,
      new OAuthProvider("apple.com")
    );
    return handleSignin(credentialPromise);
  },
  signinWithEmail: async (
    email: string,
    password: string
  ): Promise<SigninResult> => {
    const credentialPromise = signInWithEmailAndPassword(auth, email, password);
    return handleSignin(credentialPromise);
  },
  signinWithEmailLink: async (): Promise<SigninResult> => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      if (email) {
        const credentialPromise = signInWithEmailAndPassword(
          auth,
          email,
          window.location.href
        );
        return handleSignin(credentialPromise);
      }
      return Err(new Error("No email provided"));
    }
    toast("Invalid signin link", { type: "error" });
    return Err(new Error("Invalid signin link"));
  },
  signinWithGoogle: async (): Promise<SigninResult> => {
    const credentialPromise = signInWithPopup(auth, new GoogleAuthProvider());
    return handleSignin(credentialPromise);
  },
  signout: async (): Promise<void> => {
    await signOut(auth);
    toast("Signed out", { type: "success" });
  },
  updateEmail: async (newEmail: string): Promise<void> => {
    if (!auth.currentUser) {
      const err = new AuthenticationError({
        devMessage: "auth.currentUser is falsey",
        userMessage: "No user is currently logged in",
      });
      throwExpectedError(err as WebError); // TODO: fix this
      return;
    }
    await updateEmail(auth.currentUser, newEmail);
  },
  updatePassword: async (newPassword: string): Promise<void> => {
    if (!auth.currentUser) {
      const err = new AuthenticationError({
        devMessage: "auth.currentUser is falsey",
        userMessage: "No user is currently logged in",
      });
      throwExpectedError(err as WebError); // TODO: fix this
      return;
    }
    await updatePassword(auth.currentUser, newPassword);
  },
};

/**
 * This file is a utility for handling authentication with Firebase.
 * Currently not in use but will be used in the future.
 */
