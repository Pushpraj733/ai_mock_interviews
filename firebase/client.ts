// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBUDRxJQmEHmhVz9wfP6k5jWT4glM90NB0",
  authDomain: "prepwise-9c13f.firebaseapp.com",
  projectId: "prepwise-9c13f",
  storageBucket: "prepwise-9c13f.firebasestorage.app",
  messagingSenderId: "935620406259",
  appId: "1:935620406259:web:34c868896442029b144086",
  measurementId: "G-9KD664BKRM"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);