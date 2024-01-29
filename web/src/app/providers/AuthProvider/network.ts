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
  getUser: ({ id }: params.GetUser) => {
    return userController({}).getUser({ id });
  },
};
