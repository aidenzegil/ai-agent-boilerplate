import { dbClient } from "$database/dbClient";
import type { DBUser } from "$domain/user/repository/user";
import { typesafeUser } from "$domain/user/repository/user";

/**
 * A composed object for UserService database read functions.
 */
export const query = {
  getUserByEmail: async (email: string): Promise<DBUser | null> => {
    const user = await dbClient.user.findUnique({
      where: { email },
      ...typesafeUser,
    });
    return user;
  },

  getUserByFirebaseId: async (firebaseId: string): Promise<DBUser | null> => {
    const user = await dbClient.user.findUnique({
      where: { firebaseId },
      ...typesafeUser,
    });
    return user;
  },

  getUserById: async (id: string): Promise<DBUser | null> => {
    const user = await dbClient.user.findUnique({
      where: { id },
      ...typesafeUser,
    });
    return user;
  },

  getUserByPhone: async (phoneNumber: string): Promise<DBUser | null> => {
    const user = await dbClient.user.findUnique({
      where: { phoneNumber },
      ...typesafeUser,
    });
    return user;
  },
};
