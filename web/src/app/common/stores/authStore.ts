import { type User as FirebaseUser } from "firebase/auth";
import { writable } from "svelte/store";

type AuthStore = {
  currentUser: FirebaseUser | null;
  isLoading: boolean;
};
export const authStore = writable<AuthStore>({
  currentUser: null,
  isLoading: true,
});
