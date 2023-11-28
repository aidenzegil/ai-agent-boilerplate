import { Injectable } from "@nestjs/common";
import { NotFoundError } from "src/common/errors/NotFoundError";
import type { UserApi } from "src/services/user/api.interface";
import type { params } from "src/services/user/api.params";
import type { User } from "src/services/user/models/user";

import { mutations } from "#services/user/data/mutations";
import { queries } from "#services/user/data/queries";
import { transform } from "#services/user/transform";

@Injectable()
export class UserService implements UserApi {
  CreateUser: (params: params.CreateUser) => Promise<User> = async (params) => {
    const dbUser = await mutations.createUser(params);
    const user = transform.user(dbUser);
    return user;
  };

  DeleteUser: (params: params.DeleteUser) => Promise<User> = async (params) => {
    const dbUser = await mutations.deleteUser(params);
    const user = transform.user(dbUser);
    return user;
  };

  GetUser: (params: params.GetUser) => Promise<User> = async (params) => {
    const dbUser = await (async () => {
      switch (params.discriminator) {
        case "email":
          return queries.getUserByEmail(params.email);
        case "id":
          return queries.getUserById(params.id);
        case "username":
          return queries.getUserByUsername(params.username);
      }
    })();
    if (!dbUser) {
      throw new NotFoundError({ message: "User not found" });
    }
    const user = transform.user(dbUser);
    return user;
  };

  SearchUsers: (params: params.SearchUsers) => Promise<User[]> = async (
    params,
  ) => {
    const dbUsers = await mutations.searchUsers(params);
    const users = dbUsers.map(transform.user);
    return users;
  };

  UpdateUser: (params: params.UpdateUser) => Promise<User> = async (params) => {
    const updatedUser = await mutations.updateUser(params);

    return updatedUser;
  };
}
