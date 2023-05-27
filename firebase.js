// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "liquid-terra-387312.firebaseapp.com",
  projectId: "liquid-terra-387312",
  storageBucket: "liquid-terra-387312.appspot.com",
  messagingSenderId: "462869283430",
};

// Initialize Firebase
const app = initializeApp({
  ...firebaseConfig,
  apiKey: process.env.FIREBASE_KEY,
  appId: process.env.FIREBASE_APPID,
});

export default app;
