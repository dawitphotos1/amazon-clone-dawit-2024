
import firebase from "firebase/compat/app";
// For authentication
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmpmkMHpX7mJgC2GvTCTeMYF0FOZOOKQs",
  authDomain: "clone-dawit-2024.firebaseapp.com",
  projectId: "clone-dawit-2024",
  storageBucket: "clone-dawit-2024.appspot.com",
  messagingSenderId: "1047709762181",
  appId: "1:1047709762181:web:866e620df1e0ff1ec51fec",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()

//************************************************** */

//Firebase from Bruik Jira

// import firebase from "firebase/compat/app"; // Import the compat version of Firebase

// import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore"; // Import Firestore compat
// import "firebase/compat/auth"; // Import Auth compat

// // Firebase config
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBmpmkMHpX7mJgC2GvTCTeMYF0FOZOOKQs",
//   authDomain: "clone-dawit-2024.firebaseapp.com",
//   projectId: "clone-dawit-2024",
//   storageBucket: "clone-dawit-2024.appspot.com",
//   messagingSenderId: "1047709762181",
//   appId: "1:1047709762181:web:866e620df1e0ff1ec51fec",
// };

// // Initialize Firebase using the compat version
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app); // Use Firebase compat Auth
// export const db = firebase.firestore(); // Use Firebase compat Firestore