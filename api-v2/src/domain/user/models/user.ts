/**
 * The core data model for the UserService.
 */
export type User = {
  email: string | null;
  firebaseId: string;
  id: string;
  phoneNumber: string;
};
