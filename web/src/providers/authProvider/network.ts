import { userController } from "@/lib/server/controllers/users/controller";
import { params } from "@/lib/server/controllers/users/params";

export const network = {
  createUser: ({
    email,
    authToken,
  }: params.CreateUser & { authToken: string }) => {
    return userController({ authToken }).createUser({
      email,
    });
  },
  getAuthenticatedUser: ({ authToken }: { authToken: string }) => {
    return userController({ authToken }).getCurrentUser();
  },
};
