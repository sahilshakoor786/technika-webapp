// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAHkZxRXVofu92MIT1bW26UF_nOVh5O-8",
  authDomain: "technika-e9c08.firebaseapp.com",
  projectId: "technika-e9c08",
  storageBucket: "technika-e9c08.appspot.com",
  messagingSenderId: "982014731591",
  appId: "1:982014731591:web:90e8534a6615fb05bb1862",
  measurementId: "G-M52XBMPFCJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
