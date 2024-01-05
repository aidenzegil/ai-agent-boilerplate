import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };

export default app;
