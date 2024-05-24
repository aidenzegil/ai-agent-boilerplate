import { Injectable } from "@nestjs/common";
import * as firebase from "firebase-admin";

@Injectable()
export class FirebaseApp {
  private firebaseApp: firebase.app.App;

  constructor() {
    this.firebaseApp = firebase.initializeApp({
      credential: firebase.credential.cert(
        JSON.parse(process.env.FIREBASE_CONFIG!),
      ),
    });
  }

  getAuth = (): firebase.auth.Auth => {
    return this.firebaseApp.auth();
  };
}
