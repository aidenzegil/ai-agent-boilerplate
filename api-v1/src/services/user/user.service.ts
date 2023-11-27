import { Injectable } from "@nestjs/common";
import NotFoundError from "src/common/errors/NotFoundError";
import { wetDBClient } from "src/lib/wetDBClient";
import type { UserApi } from "src/services/user/api.interface";
import type { params } from "src/services/user/api.params";
import type { User } from "src/services/user/models/user";

@Injectable()
export class UserService implements UserApi {
  CreateUser: (params: params.CreateUser) => Promise<User> = async (params) => {
    const user = await wetDBClient.user.create({
      data: {
        email: params.email,
        profilePictureUrl: params.profilePictureUrl,
        username: params.username,
      },
    });

    return user;
  };

  SearchUsers: (params: params.SearchUsers) => Promise<User[]> = async (
    params,
  ) => {
    /** TODO: Pagination */
    console.log(params);
    const users = await wetDBClient.user.findMany({});

    return users;
  };

  GetUser: (params: params.GetUser) => Promise<User> = async (params) => {
    switch (params.discriminator) {
      case "email":
        return this.getUserByEmail(params.email);
      case "id":
        return this.getUserById(params.id);
      case "username":
        return this.getUserByUsername(params.username);
    }
  };

  UpdateUser: (params: params.UpdateUser) => Promise<User> = async (params) => {
    const updatedUser = await wetDBClient.user.update({
      data: {
        email: params.email,
        profilePictureUrl: params.profilePictureUrl,
        username: params.username,
      },
      where: { id: params.id },
    });
    return updatedUser;
  };

  DeleteUser: (params: params.DeleteUser) => Promise<User> = async (params) => {
    const deletedUser = await wetDBClient.user.delete({
      where: { id: params.id },
    });
    console.log(params);
    return deletedUser;
  };

  private getUserByEmail: (email: string) => Promise<User> = async (email) => {
    const user = await wetDBClient.user.findUnique({ where: { email } });
    if (!user) {
      throw new NotFoundError({ message: "User not found" });
    }
    return user;
  };

  private getUserById: (id: string) => Promise<User> = async (id) => {
    const user = await wetDBClient.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundError({ message: "User not found" });
    }
    return user;
  };

  private getUserByUsername: (username: string) => Promise<User> = async (
    username,
  ) => {
    const user = await wetDBClient.user.findUnique({ where: { username } });
    if (!user) {
      throw new NotFoundError({ message: "User not found" });
    }
    return user;
  };
}
