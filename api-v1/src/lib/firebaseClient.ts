var admin = require("firebase-admin");

var serviceAccount = process.env.FIREBASE_CONFIG;

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(serviceAccount!)),
});

export default firebaseApp;
