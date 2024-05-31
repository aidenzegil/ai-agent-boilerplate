import { Injectable } from "@nestjs/common";

import { NotFoundError } from "$common/errors/NotFoundError";
import type { UserApi } from "$domain/user/api.interface";
import type { params } from "$domain/user/api.params";
import type { User } from "$domain/user/models/user";
import { command } from "$domain/user/repository/command";
import { query } from "$domain/user/repository/query";
import { transform } from "$domain/user/transform";

@Injectable()
export class UserService implements UserApi {
  /** Create a user */
  CreateUser: (params: params.CreateUser) => Promise<User> = async (params) => {
    const dbUser = await command.createUser(params);
    const user = transform.user(dbUser);
    return user;
  };
  /** Delete a user */
  DeleteUser: (params: params.DeleteUser) => Promise<User> = async (params) => {
    const dbUser = await command.deleteUser(params);
    const user = transform.user(dbUser);
    return user;
  };
  /** Get a user */
  GetUser: (params: params.GetUser) => Promise<User> = async (params) => {
    const dbUser = await (async () => {
      switch (params.discriminator) {
        case "email":
          return query.getUserByEmail(params.email);
        case "firebaseId":
          return query.getUserByFirebaseId(params.firebaseId);
        case "id":
          return query.getUserById(params.id);
        case "phone":
          return query.getUserByPhone(params.phoneNumber);
      }
    })();
    if (!dbUser) {
      throw new NotFoundError({ message: "User not found" });
    }
    const user = transform.user(dbUser);
    return user;
  };
  /**
   * Search for users.
   * TODO: Pagination
   */
  SearchUsers: (params: params.SearchUsers) => Promise<User[]> = async (
    params
  ) => {
    const dbUsers = await command.searchUsers(params);
    const users = dbUsers.map(transform.user);
    return users;
  };
  /** Update a user */
  UpdateUser: (params: params.UpdateUser) => Promise<User> = async (params) => {
    const dbUser = await command.updateUser(params);
    const user = transform.user(dbUser);
    return user;
  };
}
