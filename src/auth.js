import { auth } from "./firebase.js";
import { db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function signUp(firstName, lastName, email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log("User signed up with the following email:", userCredential.user.email)
        console.log("User was given the following id:", userCredential.user.uid)

        const userRef = doc(db, "Users", userCredential.user.uid)
        await setDoc(userRef, {
            FirstName: firstName,
            LastName: lastName,
            Timestamp: new Date()
        })
    }

    catch(Error) {
        console.log(Error)
    }
}

export async function logIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        window.location.href = "songmanager.html"
    } 
    
    catch (error) {
        console.log(Error)    
    }
}

export async function logOut() {
    try {
        await signOut(auth)
        console.log("User logged out.")
    } 
    
    catch(Error) {
        console.log(Error)
    }
}