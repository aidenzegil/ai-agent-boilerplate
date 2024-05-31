/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from "@nestjs/common";
import type { Request } from "express";
import type { App, ServiceAccount } from "firebase-admin/app";
import { cert, initializeApp } from "firebase-admin/app";
import type { Auth } from "firebase-admin/auth";
import { getAuth } from "firebase-admin/auth";

import type { FirebaseUser } from "$external/authentication/models/firebaseUser";
import { transform } from "$external/authentication/transform";
import { FIREBASE_CONFIG } from "$util/environment/getEnvSecret";

@Injectable()
export class AuthenticationService {
  private firebaseApp: App;
  private firebaseAuth: Auth;

  constructor() {
    const firebaseConfig = JSON.parse(FIREBASE_CONFIG()) as {
      client_email: string;
      private_key: string;
      project_id: string;
    };
    const serviceAccount: ServiceAccount = {
      clientEmail: firebaseConfig.client_email,
      privateKey: firebaseConfig.private_key,
      projectId: firebaseConfig.project_id,
    };
    this.firebaseApp = initializeApp({
      credential: cert(serviceAccount),
    });
    this.firebaseAuth = getAuth(this.firebaseApp);
  }
  decodeAuthToken = async (token: string): Promise<FirebaseUser> => {
    const decodedToken = await this.firebaseAuth.verifyIdToken(token);
    const firebaseUser = transform.decodedTokenToFirebaseUser(decodedToken);

    return firebaseUser;
  };
  getAuthToken = (req: Request): string | null => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return req.headers.authorization.split(" ")[1];
    }
    return null;
  };
}
