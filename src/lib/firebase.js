import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: import.meta.env.VITE_API_KEY,
   authDomain: "reactchat-63e68.firebaseapp.com",
   projectId: "reactchat-63e68",
   storageBucket: "reactchat-63e68.appspot.com",
   messagingSenderId: "944910488303",
   appId: "1:944910488303:web:67bd1e7bb84cf20796811a",
   measurementId: "G-118F3WJG93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//login
export const auth = getAuth();
//create user information
export const db = getFirestore();
//upload images
export const storage = getStorage();
