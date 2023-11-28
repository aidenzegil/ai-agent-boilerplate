import type { DBUser } from "domain/user/data/user";
import type { User } from "domain/user/models/user";

export const transform = {
  user: (source: DBUser): User => {
    return {
      email: source.email,
      id: source.id,
      profilePictureUrl: source.profilePictureUrl,
      username: source.username,
    };
  },
};
