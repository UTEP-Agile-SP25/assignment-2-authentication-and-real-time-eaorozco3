import { signUp, logIn, logOut, onAuthStateChanged } from "./auth";
import {
  setDoc,
  doc,
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

async function getSongs() {
  try {
    const songsCol = collection(db, "Songs");
    const snapshot = await getDocs(songsCol);
    const songs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    console.log(songs);
  } catch (error) {
    console.error("Error getting songs: ", error);
  }
}

const saveSong = async function () {
  const title = document.getElementById("songName").value.trim();
  const artist = document.getElementById("artistName").value.trim();
  const year = document.getElementById("releaseYear").value.trim();
  const rating = document.getElementById("ratingValue").value.trim();

  try {
    const songRef = doc(db, "Songs", title);
    const docSnap = await getDoc(songRef);

    if (!docSnap.exists()) {
      await setDoc(songRef, {
        Title: title,
        Author: artist,
        Year: year,
        Rating: rating,
      });

      alert("New Song added to collection!");
      document.getElementById("songName").value = "";
      document.getElementById("artistName").value = "";
      document.getElementById("releaseYear").value = "";
      document.getElementById("ratingValue").value = "";
    } else {
      alert("Song is already in the collection!");
      document.getElementById("songName").value = "";
      document.getElementById("artistName").value = "";
      document.getElementById("releaseYear").value = "";
      document.getElementById("ratingValue").value = "";
    }
  } catch (error) {
    console.error("Error adding new song: ", error);
  }
};

const removeSong = async function () {
  const title = document.getElementById("songNameToRemove").value.trim();

  try {
    const songRef = doc(db, "Songs", title);
    const docSnap = await getDoc(songRef);

    if (docSnap.exists()) {
      await deleteDoc(doc(db, "Songs", title));
      alert("Song removed from collection!");
      document.getElementById("songNameToRemove").value = "";
    } else {
      alert("Song does not exist in collection!");
      document.getElementById("songNameToRemove").value = "";
    }
  } catch (error) {
    console.error("Error removing song: ", error);
  }
};

const addForm = document.querySelector("#enterSongInfo");
addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveSong();
  getSongs();
});

const removeForm = document.querySelector("#removeSong");
removeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  removeSong();
  getSongs();
});

const songCollection = collection(db, "Songs");
onSnapshot(songCollection, (snapshot) => {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = " ";

  snapshot.forEach((doc) => {
    const data = doc.data();
    const row = document.createElement("tr");

    row.innerHTML = `
        <td> ${data.Title} </td> <td></td><td></td><td></td>
        <td> ${data.Author} </td> <td></td><td></td><td></td>
        <td> ${data.Year} </td> <td></td><td></td><td></td>
        <td> ${data.Rating} </td> <td></td><td></td><td></td>
    `;

    tableBody.appendChild(row);
  });
});

getSongs();
