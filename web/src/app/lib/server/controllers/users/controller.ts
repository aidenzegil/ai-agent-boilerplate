import { Ok, Err } from "@/app/common/types/result";
import { PrivateUser, PublicUser } from "@/app/common/types/user";
import { POST, GET } from "../../api/axiosInstance";
import { ApiResponse } from "../../types/apiResponse";
import { params } from "./params";

interface Dependencies {
  authToken?: string;
}
interface Methods {
  createUser: (params: params.CreateUser) => Promise<ApiResponse<PrivateUser>>;
  getUser: (params: params.GetUser) => Promise<ApiResponse<PublicUser>>;
  getAuthenticatedUser: (
    params: params.GetAuthenticatedUser
  ) => Promise<ApiResponse<PrivateUser>>;
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
   * @param profilePictureUrl The URL of the user's profile picture
   * @param email The email address of the user
   * @param firebaseId The Firebase ID of the user
   * @param username The username of the user
   * @returns Promise that resolves to an ApiResponse containing a PrivateUser object if successful, otherwise an error
   */
  createUser: async ({
    profilePictureUrl,
    email,
    firebaseId,
    username,
  }): Promise<ApiResponse<PrivateUser>> => {
    const res = await POST<PrivateUser>({
      authToken,
      body: { profilePictureUrl, email, firebaseId, username },
      path: "/users",
      requiresAuth: true,
    });
    if (res.isOk()) {
      const privateUser: PrivateUser = {
        username: res.value.username,
        email: res.value.email,
        id: res.value.id,
        profilePictureUrl: res.value.profilePictureUrl,
      };
      return Ok(privateUser);
    }
    return Err(res.error);
  },

  /**
   * Get a user by username
   * @param id The user id of the user to retrieve
   * @returns Promise that resolves to an ApiResponse containing a PublicUser object if successful, otherwise an error
   */
  getUser: async ({ id }): Promise<ApiResponse<PrivateUser>> => {
    const res = await GET<PrivateUser>({
      path: `/users/${id}`,
      requiresAuth: false,
    });
    if (res.isOk()) {
      const privateUser: PrivateUser = {
        username: res.value.username,
        profilePictureUrl: res.value.profilePictureUrl,
        id: res.value.id,
        email: res.value.email,
      };
      return Ok(privateUser);
    }
    return Err(res.error);
  },

  getAuthenticatedUser: async ({
    firebaseId,
  }): Promise<ApiResponse<PrivateUser>> => {
    const res = await GET<PrivateUser>({
      path: `/users/authenticatedUser/${firebaseId}`,
      requiresAuth: true,
      authToken,
    });
    if (res.isOk()) {
      const privateUser: PrivateUser = {
        username: res.value.username,
        profilePictureUrl: res.value.profilePictureUrl,
        id: res.value.id,
        email: res.value.email,
      };
      return Ok(privateUser);
    }
    return Err(res.error);
  },
});
