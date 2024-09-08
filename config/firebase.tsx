// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-schela.firebaseapp.com",
  projectId: "meeting-schela",
  storageBucket: "meeting-schela.appspot.com",
  messagingSenderId: "526300205401",
  appId: "1:526300205401:web:ed157505fae6691bfb7c48",
  measurementId: "G-FGZNZKPK47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);