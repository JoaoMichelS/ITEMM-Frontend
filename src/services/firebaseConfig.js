// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2_KIQu9uNkd-CKLUiihFEgwrQekV8uOU",
  authDomain: "itemm-1ed86.firebaseapp.com",
  projectId: "itemm-1ed86",
  storageBucket: "itemm-1ed86.appspot.com",
  messagingSenderId: "880220611473",
  appId: "1:880220611473:web:a99007822b3a8e2ad83030",
  measurementId: "G-6XMHRCF0V3"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);