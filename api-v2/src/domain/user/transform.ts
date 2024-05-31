import type { User } from "$domain/user/models/user";
import type { DBUser } from "$domain/user/repository/user";

/**
 * A composed object for UserService transform functions.
 */
export const transform = {
  user: (source: DBUser): User => {
    return {
      email: source.email,
      firebaseId: source.firebaseId,
      id: source.id,
      phoneNumber: source.phoneNumber,
    };
  },
};
