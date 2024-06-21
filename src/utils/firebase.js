// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkQSNVZ4uRkAHADFghzRW6WsuoysfiPi0",
  authDomain: "netflixgpt-1dfd0.firebaseapp.com",
  projectId: "netflixgpt-1dfd0",
  storageBucket: "netflixgpt-1dfd0.appspot.com",
  messagingSenderId: "957108955417",
  appId: "1:957108955417:web:2968d99f97e14025b17d88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
