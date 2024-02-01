export type FakeUser = {
  email: string;
  id: string;
  profilePictureUrl: string | null;
  username: string;
};

export const FAKE_USER_1: FakeUser = {
  email: "this.email@this.com",
  id: "fakeid1",
  profilePictureUrl: "/fakeProfilePicture.png",
  username: "markiemark",
};
export const FAKE_USER_2: FakeUser = {
  email: "this.email2@this.com",
  id: "fakeid2",
  profilePictureUrl: "/fakeProfilePicture.png",
  username: "tarkietark",
};

export const FAKE_USER_LIST: FakeUser[] = [
  FAKE_USER_1,
  FAKE_USER_2,
  FAKE_USER_1,
  FAKE_USER_2,
  FAKE_USER_1,
  FAKE_USER_2,
];
