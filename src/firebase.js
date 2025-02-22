// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrjEB9elP_mMFQwbqzTP5Xq49UvWL0Qow",
  authDomain: "glucobalance-3a3d5.firebaseapp.com",
  projectId: "glucobalance-3a3d5",
  storageBucket: "glucobalance-3a3d5.firebasestorage.app",
  messagingSenderId: "879721908125",
  appId: "1:879721908125:web:e130df7a94e36367589174",
  measurementId: "G-0NR7CN7T57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
