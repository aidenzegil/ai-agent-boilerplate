import type { params } from "domain/user/api.params";
import type { DBUser } from "domain/user/data/user";

import { wetDBClient } from "#lib/wetDBClient";

export const mutations = {
  createUser: async (params: params.CreateUser): Promise<DBUser> => {
    const user = await wetDBClient.user.create({
      data: {
        email: params.email,
        profilePictureUrl: params.profilePictureUrl,
        username: params.username,
      },
    });

    return user;
  },
  deleteUser: async (params: params.DeleteUser): Promise<DBUser> => {
    const user = await wetDBClient.user.delete({
      where: { id: params.id },
    });

    return user;
  },
  searchUsers: async (params: params.SearchUsers): Promise<DBUser[]> => {
    /** TODO: Pagination */
    console.log(params);
    const users = await wetDBClient.user.findMany({});

    return users;
  },
  updateUser: async (params: params.UpdateUser): Promise<DBUser> => {
    const user = await wetDBClient.user.update({
      data: {
        email: params.email,
        profilePictureUrl: params.profilePictureUrl,
        username: params.username,
      },
      where: { id: params.id },
    });

    return user;
  },
};
