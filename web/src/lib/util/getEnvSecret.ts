/**
 * We define env variables as functions so that we
 * don't have to check for them until they are used
 */
type GetEnvSecret = (secretName: string) => () => string;
/** Util function to get environment variables */
const getEnvSecret: GetEnvSecret = (secretName) => {
  return () => {
    const value = process.env.secretName;
    if (!value) {
      throw new Error(`process.env.${secretName} required!`);
    }
    return value as string;
  };
};

export const environmentName = process.env.NEXT_PUBLIC_ENVIRONMENT_NAME;
export const NEXT_PUBLIC_FIREBASE_API_KEY =
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
export const NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN =
  process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
export const NEXT_PUBLIC_FIREBASE_PROJECT_ID =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
export const NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET =
  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
export const NEXT_PUBLIC_FIREBASE_APP_ID =
  process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
export const NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID =
  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
export const NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;
export const NEXT_PUBLIC_HACKATHON_AGENT_API =
  process.env.NEXT_PUBLIC_HACKATHON_AGENT_API;
