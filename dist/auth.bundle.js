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

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://part-b/./src/auth.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function getSongs() {\r\n    try {\r\n        const songsCol = collection(db, \"Songs\")\r\n        const snapshot = await getDocs(songsCol)\r\n        const songs = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))\r\n\r\n        console.log(songs)\r\n    }\r\n\r\n    catch(error) {\r\n        console.error(\"Error getting songs: \", error)\r\n    }\r\n}\r\n\r\nconst saveSong = async function() {\r\n    const title = document.getElementById(\"songName\").value.trim()\r\n    const artist = document.getElementById(\"artistName\").value.trim()\r\n    const year = document.getElementById(\"releaseYear\").value.trim()\r\n    const rating = document.getElementById(\"ratingValue\").value.trim()\r\n\r\n    try {\r\n        const songRef = doc(db, \"Songs\", title)\r\n        const docSnap = await getDoc(songRef)\r\n\r\n        if(!docSnap.exists()) {\r\n            await setDoc(songRef, {\r\n                Title:title,\r\n                Author:artist,\r\n                Year:year,\r\n                Rating:rating\r\n            })\r\n\r\n            alert(\"New Song added to collection!\")\r\n            document.getElementById(\"songName\").value = \"\"\r\n            document.getElementById(\"artistName\").value = \"\"\r\n            document.getElementById(\"releaseYear\").value = \"\"\r\n            document.getElementById(\"ratingValue\").value = \"\"\r\n        }\r\n\r\n        else {\r\n            alert(\"Song is already in the collection!\")\r\n            document.getElementById(\"songName\").value = \"\"\r\n            document.getElementById(\"artistName\").value = \"\"\r\n            document.getElementById(\"releaseYear\").value = \"\"\r\n            document.getElementById(\"ratingValue\").value = \"\"\r\n        }\r\n    }\r\n\r\n    catch(error) {\r\n        console.error(\"Error adding new song: \", error)\r\n    }\r\n}\r\n\r\nconst removeSong = async function() {\r\n    const title = document.getElementById(\"songNameToRemove\").value.trim()\r\n\r\n    try {\r\n        const songRef = doc(db, \"Songs\", title)\r\n        const docSnap = await getDoc(songRef)\r\n\r\n        if(docSnap.exists()) {\r\n            await deleteDoc(doc(db, \"Songs\", title))\r\n            alert(\"Song removed from collection!\")\r\n            document.getElementById(\"songNameToRemove\").value = \"\"\r\n        }\r\n\r\n        else {\r\n            alert(\"Song does not exist in collection!\")\r\n            document.getElementById(\"songNameToRemove\").value = \"\"\r\n        }\r\n    }\r\n\r\n    catch(error) {\r\n        console.error(\"Error removing song: \", error)\r\n    }\r\n}\r\n\r\nconst modifySong = async function name() {\r\n    const title = document.getElementById(\"songNameToModify\").value.trim()\r\n    const updatedRating = document.getElementById(\"newRating\").value.trim()\r\n\r\n    try {\r\n        const songRef = doc(db, \"Songs\", title)\r\n        const docSnap = await getDoc(songRef)\r\n\r\n        if(docSnap.exists()) {\r\n            await updateDoc(songRef, {Rating:updatedRating})\r\n            alert(\"Song rating updated from collection!\")\r\n            document.getElementById(\"songNameToRemove\").value = \"\"\r\n        }\r\n\r\n        else {\r\n            alert(\"Song does not exist in collection!\")\r\n            document.getElementById(\"songNameToRemove\").value = \"\"\r\n        }\r\n    }\r\n\r\n    catch(error) {\r\n        console.error(\"Error updating song: \", error)\r\n    }\r\n}\r\n\r\nconst addForm = document.querySelector(\"#enterSongInfo\")\r\naddForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault()\r\n    saveSong()\r\n    getSongs()\r\n})\r\n\r\nconst removeForm = document.querySelector(\"#removeSong\")\r\nremoveForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault()\r\n    removeSong()\r\n    getSongs()\r\n})\r\n\r\nconst updateRating = document.querySelector(\"#modifySong\")\r\nupdateRating.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault()\r\n    modifySong()\r\n    getSongs()\r\n})\r\n\r\ngetSongs()\n\n//# sourceURL=webpack://part-b/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/auth.js");
/******/ 	
/******/ })()
;