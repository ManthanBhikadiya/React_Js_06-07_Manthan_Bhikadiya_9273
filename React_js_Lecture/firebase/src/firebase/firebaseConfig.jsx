// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};
// Initialize Firebase

let app;
let db;

try{

 app = initializeApp(firebaseConfig);
 db = getFirestore(app);

 console.log("firebase app name"  , app.name);
 console.log("firebase config"  , app.options);
 console.log("firebase instance create");
 
}catch(err){
  console.error("Firebase Initialization Error:", err);
  console.error("Check your firebase config");
}

export { db };
