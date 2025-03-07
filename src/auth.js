import { auth } from "./firebase.js";
import { db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

async function fetchUserData(userID) {
  try {
    const userDoc = await getDocs(collection(db, "Users"));
    const userData = userDoc.docs.find((doc) => doc.id === userID)?.data();
    console.log("User data ", userData);
    document.getElementById("introGreeting").innerHTML =
      "<h1> Welcome " + userData.FirstName + " to Song Connosseiur!</h1>";
  } catch (error) {
    console.log(Error);
  }
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("Logged in user: ", user.email);
    await fetchUserData(user.uid);
  } else {
    console.log("No user signed in.");
  }
});

export async function signUp(firstName, lastName, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(
      "User signed up with the following email:",
      userCredential.user.email
    );
    console.log("User was given the following id:", userCredential.user.uid);

    const userRef = doc(db, "Users", userCredential.user.email);
    await setDoc(userRef, {
      FirstName: firstName,
      LastName: lastName,
      Timestamp: new Date(),
    });

    window.location.href = "songmanager.html";
  } catch (Error) {
    console.log(Error);
  }
}

export async function logIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    window.location.href = "songmanager.html";
  } catch (error) {
    console.log(Error);
  }
}

export async function logOut() {
  try {
    await signOut(auth);
    console.log("User logged out.");
  } catch (Error) {
    console.log(Error);
  }
}
