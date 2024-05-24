export namespace params {
  export type CreateUser = {
    email: string;
    profilePictureUrl: string;
    username: string;
  };

  export type SearchUsers = {
    limit?: number;
    page?: number;
  };

  export type GetUser = {
    id: string;
  };

  export type UpdateUser = {
    email?: string;
    id: string;
    profilePictureUrl?: string;
    username?: string;
  };

  export type DeleteUser = {
    id: string;
  };
}
