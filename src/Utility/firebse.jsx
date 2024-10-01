
import firebase from "firebase/compat/app"; // Import the compat version of Firebase
import "firebase/compat/auth"; // Import Auth compat
import "firebase/compat/firestore"; // Import Firestore compat

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(); // Use Firebase compat Auth
export const db = firebase.firestore(); // Use Firebase compat Firestore


