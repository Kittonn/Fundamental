import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCbr8BE4WOipSqJmGQ9gdHcG-xV_i0TkCI",
  authDomain: "react-crud-firebase-tut.firebaseapp.com",
  projectId: "react-crud-firebase-tut",
  storageBucket: "react-crud-firebase-tut.appspot.com",
  messagingSenderId: "475587307882",
  appId: "1:475587307882:web:a39d6bce73cb83f03c9d13",
  measurementId: "G-WJKXWWMMP6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
