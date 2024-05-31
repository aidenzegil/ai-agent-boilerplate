import { dbClient } from "$database/dbClient";
import type { params } from "$domain/user/api.params";
import type { DBUser } from "$domain/user/repository/user";
import { typesafeUser } from "$domain/user/repository/user";

/**
 * A composed object for UserService database write functions.
 */
export const command = {
  createUser: async (params: params.CreateUser): Promise<DBUser> => {
    const user = await dbClient.user.create({
      data: {
        email: params.email,
        firebaseId: params.firebaseId,
        phoneNumber: params.phoneNumber,
      },
      ...typesafeUser,
    });

    return user;
  },
  deleteUser: async (params: params.DeleteUser): Promise<DBUser> => {
    const user = await dbClient.user.delete({
      where: { id: params.id },
      ...typesafeUser,
    });

    return user;
  },
  searchUsers: async (params: params.SearchUsers): Promise<DBUser[]> => {
    /** TODO: Pagination */
    console.log(params);
    const users = await dbClient.user.findMany({
      ...typesafeUser,
    });

    return users;
  },
  updateUser: async (params: params.UpdateUser): Promise<DBUser> => {
    const user = await dbClient.user.update({
      data: {
        email: params.email,
        phoneNumber: params.phoneNumber,
      },
      where: { id: params.id },
      ...typesafeUser,
    });

    return user;
  },
};
