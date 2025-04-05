
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAtAe4WLROp0buhFm929GZVRvGNFrnyHdM",
    authDomain: "prepwise-cad24.firebaseapp.com",
    projectId: "prepwise-cad24",
    storageBucket: "prepwise-cad24.firebasestorage.app",
    messagingSenderId: "572627390152",
    appId: "1:572627390152:web:8f403cb3b023f5d676dffd",
    measurementId: "G-3XRNCBKM",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);