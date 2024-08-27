// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmDmiUd4V9_5W0tKfeYgvXBZmHPgoBNVU",
  authDomain: "house-marketplace-app-bdf39.firebaseapp.com",
  projectId: "house-marketplace-app-bdf39",
  storageBucket: "house-marketplace-app-bdf39.appspot.com",
  messagingSenderId: "389048886428",
  appId: "1:389048886428:web:5675e8483ae82826173959"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()