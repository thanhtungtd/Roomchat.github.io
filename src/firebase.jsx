// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUGeMdJoX0PeGfhbDBAeyaDZ3cd_NnGj4",
    authDomain: "funchat-c7a9f.firebaseapp.com",
    projectId: "funchat-c7a9f",
    storageBucket: "funchat-c7a9f.appspot.com",
    messagingSenderId: "312651622924",
    appId: "1:312651622924:web:e5e0147a51d5e148949c29",
    measurementId: "G-PFXW4L80RH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();