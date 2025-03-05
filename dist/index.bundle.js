/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function getSongs() {\r\n    try {\r\n        const songsCol = collection(db, \"Songs\")\r\n        const snapshot = await getDocs(songsCol)\r\n        const songs = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))\r\n\r\n        console.log(songs)\r\n    }\r\n\r\n    catch(error) {\r\n        console.error(\"Error getting songs: \", error)\r\n    }\r\n}\r\n\r\nconst saveSong = async function() {\r\n    const title = document.getElementById(\"songName\").value.trim()\r\n    const artist = document.getElementById(\"artistName\").value.trim()\r\n    const year = document.getElementById(\"releaseYear\").value.trim()\r\n    const rating = document.getElementById(\"ratingValue\").value.trim()\r\n\r\n    try {\r\n        const songRef = doc(db, \"Songs\", title)\r\n        const docSnap = await getDoc(songRef)\r\n\r\n        if(!docSnap.exists()) {\r\n            await setDoc(songRef, {\r\n                Title:title,\r\n                Author:artist,\r\n                Year:year,\r\n                Rating:rating\r\n            })\r\n\r\n            alert(\"New Song added to collection!\")\r\n            document.getElementById(\"songName\").value = \"\"\r\n            document.getElementById(\"artistName\").value = \"\"\r\n            document.getElementById(\"releaseYear\").value = \"\"\r\n            document.getElementById(\"ratingValue\").value = \"\"\r\n        }\r\n\r\n        else {\r\n            alert(\"Song is already in the collection!\")\r\n            document.getElementById(\"songName\").value = \"\"\r\n            document.getElementById(\"artistName\").value = \"\"\r\n            document.getElementById(\"releaseYear\").value = \"\"\r\n            document.getElementById(\"ratingValue\").value = \"\"\r\n        }\r\n    }\r\n\r\n    catch(error) {\r\n        console.error(\"Error adding new song: \", error)\r\n    }\r\n}\r\n\r\nconst removeSong = async function() {\r\n    const title = document.getElementById(\"songNameToRemove\").value.trim()\r\n\r\n    try {\r\n        const songRef = doc(db, \"Songs\", title)\r\n        const docSnap = await getDoc(songRef)\r\n\r\n        if(docSnap.exists()) {\r\n            await deleteDoc(doc(db, \"Songs\", title))\r\n            alert(\"Song removed from collection!\")\r\n            document.getElementById(\"songNameToRemove\").value = \"\"\r\n        }\r\n\r\n        else {\r\n            alert(\"Song does not exist in collection!\")\r\n            document.getElementById(\"songNameToRemove\").value = \"\"\r\n        }\r\n    }\r\n\r\n    catch(error) {\r\n        console.error(\"Error removing song: \", error)\r\n    }\r\n}\r\n\r\nconst modifySong = async function name() {\r\n    const title = document.getElementById(\"songNameToModify\").value.trim()\r\n    const updatedRating = document.getElementById(\"newRating\").value.trim()\r\n\r\n    try {\r\n        const songRef = doc(db, \"Songs\", title)\r\n        const docSnap = await getDoc(songRef)\r\n\r\n        if(docSnap.exists()) {\r\n            await updateDoc(songRef, {Rating:updatedRating})\r\n            alert(\"Song rating updated from collection!\")\r\n            document.getElementById(\"songNameToRemove\").value = \"\"\r\n        }\r\n\r\n        else {\r\n            alert(\"Song does not exist in collection!\")\r\n            document.getElementById(\"songNameToRemove\").value = \"\"\r\n        }\r\n    }\r\n\r\n    catch(error) {\r\n        console.error(\"Error updating song: \", error)\r\n    }\r\n}\r\n\r\nconst addForm = document.querySelector(\"#enterSongInfo\")\r\naddForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault()\r\n    saveSong()\r\n    getSongs()\r\n})\r\n\r\nconst removeForm = document.querySelector(\"#removeSong\")\r\nremoveForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault()\r\n    removeSong()\r\n    getSongs()\r\n})\r\n\r\nconst updateRating = document.querySelector(\"#modifySong\")\r\nupdateRating.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault()\r\n    modifySong()\r\n    getSongs()\r\n})\r\n\r\ngetSongs()\n\n//# sourceURL=webpack://part-b/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;