// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhCgIoSOpyaM9y_01t9BtmMxh3TWLTyVY",
  authDomain: "netflix-gpt-b6669.firebaseapp.com",
  projectId: "netflix-gpt-b6669",
  storageBucket: "netflix-gpt-b6669.appspot.com",
  messagingSenderId: "436598509171",
  appId: "1:436598509171:web:f0bc98bdabf80d09f76406",
  measurementId: "G-B2086SY9KP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// @ts-ignore
const analytics = getAnalytics(app);
export const auth = getAuth();
