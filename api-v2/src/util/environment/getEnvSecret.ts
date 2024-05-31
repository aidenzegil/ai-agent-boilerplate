import { Secret, Token } from "fernet";

import { loadSecrets } from "$util/environment/loadSecrets";

loadSecrets();
/**
 * We define env variables as functions so that we
 * don't have to check for them until they are used
 */
type GetEnvSecret = (secretName: string) => () => string;
/** Util function to get environment variables */
const getEnvSecret: GetEnvSecret = (secretName) => {
  return () => {
    const value = process.env[secretName];
    if (!value) {
      throw new Error(`process.env.${secretName} required!`);
    }
    return value;
  };
};

export const getEnvironmentName = getEnvSecret("ENV");
export const getStackName = (): string => {
  const stack = process.env.STACK;
  if (stack) return stack;
  return getEnvironmentName();
};

export const FIREBASE_CONFIG = (): string => {
  const encodedString = getEnvSecret("FIREBASE_ENCRYPTED_PRIVATE_KEY")();
  const key = getEnvSecret("ENCRYPTION_FERNET_KEY")();
  const secret = new Secret(key);
  const token = new Token({
    secret,
    token: encodedString,
    ttl: 0,
  });
  const decodedString = token.decode();

  return decodedString;
};

export const FIREBASE_CLIENT_EMAIL = getEnvSecret("FIREBASE_CLIENT_EMAIL");
export const FIREBASE_PROJECT_ID = getEnvSecret("FIREBASE_PROJECT_ID");
export const FIREBASE_PRIVATE_KEY = getEnvSecret("FIREBASE_PRIVATE_KEY");
