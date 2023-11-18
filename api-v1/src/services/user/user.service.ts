import { Injectable } from "@nestjs/common";
import { UserApi } from "src/services/user/api.interface";
import { params } from "src/services/user/api.params";
import { User } from "src/services/user/models/user";

const mockUser: User = {
  id: "1",
  username: "user1",
  email: "jordon@wetpages.com",
  profilePictureUrl: "someimage.com",
};

@Injectable()
export class UserService implements UserApi {
  CreateUser: (params: params.CreateUser) => Promise<User> = async (params) => {
    console.log(params);
    return mockUser;
  };

  SearchUsers: (params: params.SearchUsers) => Promise<User[]> = async (
    params,
  ) => {
    console.log(params);
    return [mockUser];
  };

  GetUser: (params: params.GetUser) => Promise<User> = async (params) => {
    console.log(params);
    return mockUser;
  };

  UpdateUser: (params: params.UpdateUser) => Promise<User> = async (params) => {
    console.log(params);
    return mockUser;
  };

  DeleteUser: (params: params.DeleteUser) => Promise<User> = async (params) => {
    console.log(params);
    return mockUser;
  };
}
