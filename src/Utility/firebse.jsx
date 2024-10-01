
import firebase from "firebase/compat/app"; // Import the compat version of Firebase
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"; // Import Firestore compat
import "firebase/compat/auth"; // Import Auth compat

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // Remove quotes
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, // Remove quotes
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID, // Remove quotes
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, // Remove quotes
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, // Remove quotes
  appId: process.env.REACT_APP_FIREBASE_APP_ID, // Remove quotes
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app); // Use Firebase compat Auth
export const db = firebase.firestore(); // Use Firebase compat Firestore
