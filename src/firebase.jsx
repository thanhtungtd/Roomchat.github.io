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
    apiKey: "AIzaSyAvnp2MULgbdZJUd4b8T6J7IP1_nbKUCKw",
    authDomain: "chat-3fe3c.firebaseapp.com",
    projectId: "chat-3fe3c",
    storageBucket: "chat-3fe3c.appspot.com",
    messagingSenderId: "532464759243",
    appId: "1:532464759243:web:2e325f3bb1b9bee9e3c64e",
    measurementId: "G-0PFSZRBD5Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();