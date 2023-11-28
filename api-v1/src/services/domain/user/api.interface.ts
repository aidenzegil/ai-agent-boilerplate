import type { params } from "src/services/user/api.params";
import type { User } from "src/services/user/models/user";

export interface UserApi {
  CreateUser: (params: params.CreateUser) => Promise<User>;
  DeleteUser: (params: params.DeleteUser) => Promise<User>;
  GetUser: (params: params.GetUser) => Promise<User>;
  SearchUsers: (params: params.SearchUsers) => Promise<User[]>;
  UpdateUser: (params: params.UpdateUser) => Promise<User>;
}
