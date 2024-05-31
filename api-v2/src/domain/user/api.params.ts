/**
 * UserService input params.
 */
export namespace params {
  export type CreateUser = {
    email?: string;
    firebaseId: string;
    phoneNumber: string;
  };

  export type SearchUsers = {
    limit?: number;
    page?: number;
  };

  export type GetUser = GetUserByEmail | GetUserByFirebaseId | GetUserById | GetUserByPhone;

  export type UpdateUser = {
    email?: string;
    id: string;
    phoneNumber?: string;
  };

  export type DeleteUser = {
    id: string;
  };
}

type GetUserById = {
  discriminator: "id";
  id: string;
};
type GetUserByFirebaseId = {
  discriminator: "firebaseId";
  firebaseId: string;
};
type GetUserByEmail = {
  discriminator: "email";
  email: string;
};
type GetUserByPhone = {
  discriminator: "phone";
  phoneNumber: string;
};
