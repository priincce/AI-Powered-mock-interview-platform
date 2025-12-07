// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCo1YJBxsLLySk0WdZyhAIU894kF32B5Bw",
    authDomain: "techscreen-defenders.firebaseapp.com",
    projectId: "techscreen-defenders",
    storageBucket: "techscreen-defenders.firebasestorage.app",
    messagingSenderId: "528568151373",
    appId: "1:528568151373:web:7974c62c9887c264449b04",
    measurementId: "G-471F5NRFHV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);