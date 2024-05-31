import type { DecodedIdToken } from "firebase-admin/auth";

import type { FirebaseUser } from "$external/authentication/models/firebaseUser";

export const transform = {
  decodedTokenToFirebaseUser: (decodedToken: DecodedIdToken): FirebaseUser => ({
    email: decodedToken.email ?? null,
    firebaseId: decodedToken.uid,
    phoneNumber: decodedToken.phone_number ?? null,
  }),
};
