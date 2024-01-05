import { env } from "process";

const {
  NEXT_PUBLIC_FIREBASE_API_KEY,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_FIREBASE_APP_ID,
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
} = env;

export const firebaseConfig = {
  apiKey: "AIzaSyCA7WwxUuowIUgrjbpcOc4hCJ1WjiOmxuo",
  authDomain: "wet-pages.firebaseapp.com",
  projectId: "wet-pages",
  storageBucket: "wet-pages.appspot.com",
  messagingSenderId: "204328165422",
  appId: "1:204328165422:web:6e2dc6d312f11e6beb7fbf",
  measurementId: "G-ZQ8P2J1FBN",
};
