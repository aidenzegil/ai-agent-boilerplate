import { auth, googleProvider } from "@/app/lib/firebase/auth";
import { useAuthProviderStateController } from "./state";
import { AuthProviderFunctions, AuthProviderStateController } from "./types";
import {
  sendPasswordResetEmail as sendFirebasePasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";

export const useAuthProviderFunctions = (
  stateController: AuthProviderStateController
): AuthProviderFunctions => {
  // Update the state depending on auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        stateController.set.setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        stateController.set.setUser({ email: null, uid: null });
      }
    });
    stateController.setLoading.setUserLoading(false);
    return () => unsubscribe();
  }, []);

  // Sign up the user
  const signUp = async (email: string, password: string) => {
    stateController.setLoading.setUserLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      stateController.set.setUser({
        email: user.user.email,
        uid: user.user.uid,
      });
      console.log(user);
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setUserLoading(false);
    return;
  };

  // Sign up with Google
  const signInWithGoogle = async () => {
    stateController.setLoading.setUserLoading(true);
    try {
      const user = await signInWithPopup(auth, googleProvider);
      stateController.set.setUser({
        email: user.user.email,
        uid: user.user.uid,
      });
      console.log(user);
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setUserLoading(false);
  };

  // Login the user
  const logIn = async (email: string, password: string) => {
    stateController.setLoading.setUserLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      stateController.set.setUser({
        email: user.user.email,
        uid: user.user.uid,
      });
      console.log(user);
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setUserLoading(false);
    return;
  };

  // Logout the user
  const logOut = async () => {
    stateController.setLoading.setUserLoading(true);
    try {
      await signOut(auth);
      stateController.set.setUser({ email: null, uid: null });
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setUserLoading(false);
    return;
  };

  // send password reset email
  const sendPasswordResetEmail = async (email: string) => {
    stateController.setLoading.setUserLoading(true);
    try {
      await sendFirebasePasswordResetEmail(auth, email);
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setUserLoading(false);
    return;
  };

  return {
    signUp,
    signInWithGoogle,
    logIn,
    logOut,
    sendPasswordResetEmail,
  };
};
