import { Err, Ok } from "@/common/types/result";
import { User } from "@/common/types/user";
import { GET, POST } from "../../api/axiosInstance";
import { ApiResponse } from "../../types/apiResponse";
import { params } from "./params";

interface Dependencies {
  authToken?: string;
}
interface Methods {
  createUser: (params: params.CreateUser) => Promise<ApiResponse<User>>;
  getCurrentUser: () => Promise<ApiResponse<User>>;
}

type UserController = (deps: Dependencies) => Methods;

/**
 * User Controller
 * @param authToken The authentication token for making API requests
 * @returns UserController object
 */
export const userController: UserController = ({ authToken }) => ({
  /**
   * Create a new user
   * @param firebaseId The Firebase ID of the user
   * @param email The email of the user
   * @returns Promise that resolves to an ApiResponse containing a user object if successful, otherwise an error
   */
  createUser: async ({ email }): Promise<ApiResponse<User>> => {
    const res = await POST<User>({
      authToken,
      body: { email },
      path: "/users",
      requiresAuth: true,
    });
    if (res.isOk()) {
      const userRes = res.value;

      return Ok(userRes);
    }
    return Err(res.error);
  },

  /**
   * Get the current user
   * @returns Promise that resolves to an ApiResponse containing a user object if successful, otherwise an error
   */
  getCurrentUser: async (): Promise<ApiResponse<User>> => {
    const res = await GET<User>({
      path: `/users/authenticatedUser`,
      requiresAuth: true,
      authToken,
    });
    if (res.isOk()) {
      const userRes = res.value;
      return Ok(userRes);
    }
    return Err(res.error);
  },
});
