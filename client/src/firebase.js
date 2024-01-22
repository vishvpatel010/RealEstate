// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-b5658.firebaseapp.com",
  projectId: "realestate-b5658",
  storageBucket: "realestate-b5658.appspot.com",
  messagingSenderId: "1056449143459",
  appId: "1:1056449143459:web:84aa47477468b7d4c2d516"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);