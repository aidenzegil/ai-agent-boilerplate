import type { User } from "$domain/user/models/user";
import type { FirebaseUser } from "$external/authentication/models/firebaseUser";

/**
 * This is the stashed data attached to a request through middleware
 */
export type DataStash = {
  auth: FirebaseUser | null;
  user: User | null;
};

export type AuthenticatedStash = {
  auth: FirebaseUser;
  user: User | null;
};

export type AuthorizedStash ={
  auth: FirebaseUser;
  user: User;
};

export type WithStash<T> = T & {
  stash: DataStash;
};
