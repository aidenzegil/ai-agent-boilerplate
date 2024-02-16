import { userController } from "@/app/lib/server/controllers/users/controller";
import { params } from "@/app/lib/server/controllers/users/params";

export const network = {
  createUser: ({
    email,
    profilePictureUrl,
    username,
    authToken,
  }: params.CreateUser & { authToken: string }) => {
    return userController({ authToken }).createUser({
      email,
      profilePictureUrl,
      username,
    });
  },
  getAuthenticatedUser: ({ authToken }: { authToken: string }) => {
    return userController({ authToken }).getAuthenticatedUser();
  },
};
