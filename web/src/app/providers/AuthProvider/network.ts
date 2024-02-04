import { userController } from "@/app/lib/server/controllers/users/controller";
import { params } from "@/app/lib/server/controllers/users/params";

export const network = {
  createUser: ({
    email,
    firebaseId,
    profilePictureUrl,
    username,
    authToken,
  }: params.CreateUser & { authToken: string }) => {
    return userController({ authToken }).createUser({
      email,
      firebaseId,
      profilePictureUrl,
      username,
    });
  },
  getAuthenticatedUser: ({
    authToken,
    firebaseId,
  }: params.GetAuthenticatedUser & { authToken: string }) => {
    console.log("Fetching authenticated user", authToken);
    return userController({ authToken }).getAuthenticatedUser({ firebaseId });
  },
};
