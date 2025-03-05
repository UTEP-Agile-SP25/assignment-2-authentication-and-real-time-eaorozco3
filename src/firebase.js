// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {setDoc, doc, getDoc, getDocs, getFirestore, collection, updateDoc, deleteDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDly6q69BBCd2VKs9B8RauSyLe3iAkFG8Q",
    authDomain: "orozco-sandbox.firebaseapp.com",
    projectId: "orozco-sandbox",
    storageBucket: "orozco-sandbox.firebasestorage.app",
    messagingSenderId: "578989309140",
    appId: "1:578989309140:web:92c2926bf4bacf3b368f41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);

export default app