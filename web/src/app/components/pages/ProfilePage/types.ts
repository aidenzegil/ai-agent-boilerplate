export type UserFields = {
  profilePictureUrl: string | null;
  username: string;
};

export type StoryFields = {
  title: string;
};

export type BannerFields = {
  active: boolean;
  onClick: () => void;
};
