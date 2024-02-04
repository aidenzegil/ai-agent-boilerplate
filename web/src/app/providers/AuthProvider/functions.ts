import { auth } from "@/app/lib/firebase/config";
import { AuthProviderFunctions, AuthProviderStateController } from "./types";
import {
  sendPasswordResetEmail as sendFirebasePasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { useEffect } from "react";
import { network } from "./network";

export const useAuthProviderFunctions = (
  stateController: AuthProviderStateController
): AuthProviderFunctions => {
  // #region Background Actions
  const asyncAuthUpdates = async (firebaseUser: User | null) => {
    if (
      firebaseUser &&
      firebaseUser.uid &&
      firebaseUser.email &&
      !stateController.loading.loading
    ) {
      const authToken = await firebaseUser.getIdToken();
      const userRes = await network.getAuthenticatedUser({
        authToken,
      });
      if (userRes.isErr()) {
        console.log("Womp Womp, user died");
      }
      const wetUser = userRes.unwrap();
      stateController.set.setUser({
        email: wetUser.email,
        username: wetUser.username,
        id: wetUser.id,
        profilePictureUrl: wetUser.profilePictureUrl,
      });
    } else {
      stateController.set.setUser(undefined);
    }
    stateController.setLoading.setUserLoading(false);
  };

  // Update the state depending on auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      asyncAuthUpdates(user)
    );
    return () => unsubscribe();
  }, []);

  // #endregion
  /**
   * Signs up a user with the provided email and password.
   *
   * @param email - The email of the user.
   * @param password - The password of the user.
   * @returns A Promise that resolves when the user is signed up successfully.
   */
  const signUp = async (email: string, password: string) => {
    stateController.setLoading.setUserLoading(true);
    try {
      console.log("signing up in firebase...");
      const firebaseUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const authToken = await firebaseUser.user.getIdToken();
      const userRes = await network.createUser({
        email,
        profilePictureUrl: "",
        username: "",
        authToken,
      });
      if (userRes.isErr()) {
        await firebaseUser.user.delete();
        stateController.setLoading.setUserLoading(false);
        return;
      }
      console.log("created user in server");
      const user = userRes.unwrap();
      stateController.set.setUser({
        ...user,
      });
      console.log(user);
    } catch (e) {
      console.error(e);
    }
    stateController.setLoading.setUserLoading(false);
    return;
  };

  // Login the user
  const logIn = async (email: string, password: string) => {
    stateController.setLoading.setUserLoading(true);
    try {
      const firebaseUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const authToken = await firebaseUser.user.getIdToken();
      const userRes = await network.getAuthenticatedUser({
        authToken,
      });
      if (userRes.isErr()) {
        console.log("Womp Womp, user died");
      }
      const wetUser = userRes.unwrap();
      stateController.set.setUser({
        email: wetUser.email,
        username: wetUser.username,
        id: wetUser.id,
        profilePictureUrl: wetUser.profilePictureUrl,
      });
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
      stateController.set.setUser(undefined);
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
    // signInWithGoogle,
    logIn,
    logOut,
    sendPasswordResetEmail,
  };
};
