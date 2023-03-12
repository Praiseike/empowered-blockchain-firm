// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARwsz3fMutfsEhjm0sBGvV9EQMCJVr-K0",
  authDomain: "empoweredbackend.firebaseapp.com",
  projectId: "empoweredbackend",
  storageBucket: "empoweredbackend.appspot.com",
  messagingSenderId: "387589296004",
  appId: "1:387589296004:web:fd93ec5b30f7e4083fd7d1",
  measurementId: "G-0PS70N916D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);