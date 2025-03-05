// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);
export const auth = getauth(app);

async function getSongs() {
    try {
        const songsCol = collection(db, "Songs")
        const snapshot = await getDocs(songsCol)
        const songs = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))

        console.log(songs)
    }

    catch(error) {
        console.error("Error getting songs: ", error)
    }
}

const saveSong = async function() {
    const title = document.getElementById("songName").value.trim()
    const artist = document.getElementById("artistName").value.trim()
    const year = document.getElementById("releaseYear").value.trim()
    const rating = document.getElementById("ratingValue").value.trim()

    try {
        const songRef = doc(db, "Songs", title)
        const docSnap = await getDoc(songRef)

        if(!docSnap.exists()) {
            await setDoc(songRef, {
                Title:title,
                Author:artist,
                Year:year,
                Rating:rating
            })

            alert("New Song added to collection!")
            document.getElementById("songName").value = ""
            document.getElementById("artistName").value = ""
            document.getElementById("releaseYear").value = ""
            document.getElementById("ratingValue").value = ""
        }

        else {
            alert("Song is already in the collection!")
            document.getElementById("songName").value = ""
            document.getElementById("artistName").value = ""
            document.getElementById("releaseYear").value = ""
            document.getElementById("ratingValue").value = ""
        }
    }

    catch(error) {
        console.error("Error adding new song: ", error)
    }
}

const removeSong = async function() {
    const title = document.getElementById("songNameToRemove").value.trim()

    try {
        const songRef = doc(db, "Songs", title)
        const docSnap = await getDoc(songRef)

        if(docSnap.exists()) {
            await deleteDoc(doc(db, "Songs", title))
            alert("Song removed from collection!")
            document.getElementById("songNameToRemove").value = ""
        }

        else {
            alert("Song does not exist in collection!")
            document.getElementById("songNameToRemove").value = ""
        }
    }

    catch(error) {
        console.error("Error removing song: ", error)
    }
}

const modifySong = async function name() {
    const title = document.getElementById("songNameToModify").value.trim()
    const updatedRating = document.getElementById("newRating").value.trim()

    try {
        const songRef = doc(db, "Songs", title)
        const docSnap = await getDoc(songRef)

        if(docSnap.exists()) {
            await updateDoc(songRef, {Rating:updatedRating})
            alert("Song rating updated from collection!")
            document.getElementById("songNameToRemove").value = ""
        }

        else {
            alert("Song does not exist in collection!")
            document.getElementById("songNameToRemove").value = ""
        }
    }

    catch(error) {
        console.error("Error updating song: ", error)
    }
}

const addForm = document.querySelector("#enterSongInfo")
addForm.addEventListener("submit", (event) => {
    event.preventDefault()
    saveSong()
    getSongs()
})

const removeForm = document.querySelector("#removeSong")
removeForm.addEventListener("submit", (event) => {
    event.preventDefault()
    removeSong()
    getSongs()
})

const updateRating = document.querySelector("#modifySong")
updateRating.addEventListener("submit", (event) => {
    event.preventDefault()
    modifySong()
    getSongs()
})

getSongs()