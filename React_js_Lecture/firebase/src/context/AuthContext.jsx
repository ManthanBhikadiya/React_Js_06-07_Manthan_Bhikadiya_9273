import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MSG_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

let app;
let db;
let auth;
let GoogleProvider;

try {

    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    GoogleProvider = new GoogleAuthProvider();

    console.log("firebase app name", app.name);
    console.log("firebase instance create");

} catch (err) {
    console.error("Firebase Initialization Error:", err);
    console.error("Check your firebase config");
}

export { db, auth, GoogleProvider };