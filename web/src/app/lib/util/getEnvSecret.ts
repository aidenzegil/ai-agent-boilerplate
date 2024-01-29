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
    return value as string;
  };
};

export const getEnvironmentName = getEnvSecret("NEXT_PUBLIC_ENV");
export const NEXT_PUBLIC_FIREBASE_API_KEY = getEnvSecret(
  "NEXT_PUBLIC_FIREBASE_API_KEY"
);
export const NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = getEnvSecret(
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
);
export const NEXT_PUBLIC_FIREBASE_PROJECT_ID = getEnvSecret(
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
);
export const NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = getEnvSecret(
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
);
export const NEXT_PUBLIC_FIREBASE_APP_ID = getEnvSecret(
  "NEXT_PUBLIC_FIREBASE_APP_ID"
);
export const NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = getEnvSecret(
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
);
export const NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = getEnvSecret(
  "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID"
);
export const NEXT_PUBLIC_WET_PAGES_API = getEnvSecret(
  "NEXT_PUBLIC_WET_PAGES_API"
);
