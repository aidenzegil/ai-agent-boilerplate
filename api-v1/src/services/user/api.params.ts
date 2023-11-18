export namespace params {
  export type CreateUser = {
    email: string;
    firebaseId: string;
    profilePictureUrl: string;
    username: string;
  };

  export type SearchUsers = {
    page?: number;
    limit?: number;
  };

  export type GetUser = GetUserById | GetUserByEmail | GetUserByUsername;

  export type UpdateUser = {
    id: string;
    email?: string;
    firebaseId?: string;
    profilePictureUrl?: string;
    username?: string;
  };

  export type DeleteUser = {
    id: string;
  };
}

type GetUserById = {
  discriminator: 'id';
  id: string;
};
type GetUserByEmail = {
  discriminator: 'email';
  email: string;
};
type GetUserByUsername = {
  discriminator: 'username';
  username: string;
};
