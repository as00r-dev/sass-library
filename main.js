/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/anchor.js":
/*!*************************************!*\
  !*** ./src/js/components/anchor.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Anchor": () => (/* binding */ Anchor)
/* harmony export */ });
const Anchor = (obj) => {
	const a = document.createElement("a");
	a.textContent = obj.content;
	obj.classes.forEach((className) => {
		a.classList.add(className);
	});
	return a;
};


/***/ }),

/***/ "./src/js/components/button.js":
/*!*************************************!*\
  !*** ./src/js/components/button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
const Button = (obj) => {
	const btn = document.createElement("button");
	btn.textContent = obj.content;
	obj.classes.forEach((className) => {
		btn.classList.add(className);
	});
	return btn;
};


/***/ }),

/***/ "./src/js/components/card.js":
/*!***********************************!*\
  !*** ./src/js/components/card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
const Card = (obj) => {
	const card = document.createElement("div");
	card.classList.add("card");
	const cardTitle = document.createElement("h1");
	cardTitle.classList.add("card-title");
	cardTitle.textContent = obj.title;
	card.appendChild(cardTitle);
	const cardBody = document.createElement("p");
	cardBody.classList.add("card-body");
	cardBody.textContent = obj.content;
	cardTitle.insertAdjacentElement("afterend", cardBody);
	return card;
};


/***/ }),

/***/ "./src/js/components/colors.js":
/*!*************************************!*\
  !*** ./src/js/components/colors.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colors": () => (/* binding */ Colors)
/* harmony export */ });
const Colors = () => {
	const c = document.createElement("div");
	colors.forEach((color) => {
		const textColor = document.createElement("span");
		textColor.textContent = `${color} text`;
		textColor.classList.add(`text-${color}`);
		const separator = document.createElement("span");
		separator.textContent = " | ";
		c.insertAdjacentElement("beforeend", textColor);
		textColor.insertAdjacentElement("afterend", separator);
	});
	c.insertAdjacentHTML("beforeend", "<br><br>");
	colors.forEach((color) => {
		const bgColor = document.createElement("span");
		bgColor.textContent = `${color} bg`;
		bgColor.classList.add(`bg-${color}`);
		bgColor.classList.add("text-white");
		const separator = document.createElement("span");
		separator.textContent = " | ";
		c.insertAdjacentElement("beforeend", bgColor);
		bgColor.insertAdjacentElement("afterend", separator);
	});
	c.insertAdjacentHTML("beforeend", "<br><br>");
	colors.forEach((color) => {
		if (color === "primary") {
			for (let i = 2; i <= 8; i += 2) {
				const darkVariation = document.createElement("span");
				darkVariation.textContent = `primary dark ${i}`;
				darkVariation.classList.add(`bg-primary-dark-${i}`);
				darkVariation.classList.add("text-white");
				const separator = document.createElement("span");
				separator.textContent = " | ";
				c.insertAdjacentElement("beforeend", darkVariation);
				darkVariation.insertAdjacentElement("afterend", separator);
			}
			for (let i = 2; i <= 8; i += 2) {
				const lightVariation = document.createElement("span");
				lightVariation.textContent = `primary light ${i}`;
				lightVariation.classList.add(`bg-primary-light-${i}`);
				lightVariation.classList.add("text-black");
				const separator = document.createElement("span");
				separator.textContent = " | ";
				c.insertAdjacentElement("beforeend", lightVariation);
				lightVariation.insertAdjacentElement("afterend", separator);
			}
		}
	});
	c.insertAdjacentHTML("beforeend", "<br><br>");
	return c;
};

const colors = [
	"primary",
	"secondary",
	"error",
	"info",
	"blue",
	"red",
	"yellow",
	"green",
	"orange",
	"purple",
	"gray",
];


/***/ }),

/***/ "./src/js/components/heading.js":
/*!**************************************!*\
  !*** ./src/js/components/heading.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Heading": () => (/* binding */ Heading)
/* harmony export */ });
const Heading = (obj) => {
	const heading = document.createElement(`h${obj.type}`);
	heading.textContent = obj.content;
	obj.classes.forEach((className) => {
		heading.classList.add(className);
	});
	return heading;
};


/***/ }),

/***/ "./src/js/components/paragraph.js":
/*!****************************************!*\
  !*** ./src/js/components/paragraph.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Paragraph": () => (/* binding */ Paragraph)
/* harmony export */ });
const Paragraph = (obj) => {
	const paragraph = document.createElement("p");
	paragraph.textContent = obj.content;
	obj.classes.forEach((className) => {
		paragraph.classList.add(className);
	});
	return paragraph;
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/heading */ "./src/js/components/heading.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button */ "./src/js/components/button.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paragraph */ "./src/js/components/paragraph.js");
/* harmony import */ var _components_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/anchor */ "./src/js/components/anchor.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card */ "./src/js/components/card.js");
/* harmony import */ var _components_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/colors */ "./src/js/components/colors.js");
// import styles


// import modules







const body = document.querySelector("body");

body.append(
	(0,_components_heading__WEBPACK_IMPORTED_MODULE_1__.Heading)({
		type: 1,
		content: "Colors",
		classes: ["heading"],
	}),
	(0,_components_colors__WEBPACK_IMPORTED_MODULE_6__.Colors)(),
	(0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
		content: "hover me",
		classes: ["text-primary", "text-hover-orange-light-1"],
	}),
	(0,_components_heading__WEBPACK_IMPORTED_MODULE_1__.Heading)({
		type: 1,
		content: "Cards",
		classes: ["heading"],
	}),
	(0,_components_card__WEBPACK_IMPORTED_MODULE_5__.Card)({
		title: "This is a card",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
	}),
	(0,_components_heading__WEBPACK_IMPORTED_MODULE_1__.Heading)({
		type: 1,
		content: "Buttons",
		classes: ["heading"],
	}),
	(0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
		content: "click me",
		classes: ["btn"],
	}),
	(0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
		content: "click me",
		classes: ["btn-primary", "text-white"],
	}),
	(0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
		content: "click me",
		classes: ["btn-secondary", "text-white"],
	}),
	(0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
		content: "click me",
		classes: ["btn-error", "text-white"],
	}),
	(0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
		content: "click me",
		classes: ["btn-info", "text-white"],
	}),
	(0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
		content: "click me",
		classes: ["btn-outlined-purple", "text-purple", "text-hover-white"],
	}),
	(0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
		content: "click me",
		classes: ["btn-outlined-orange", "text-orange", "text-hover-white"],
	})
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsa0NBQWtDLE1BQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xELG1EQUFtRCxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0Esa0RBQWtELEVBQUU7QUFDcEQscURBQXFELEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRE87QUFDUCw0Q0FBNEMsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQzZCOztBQUU3QjtBQUMrQztBQUNGO0FBQ007QUFDTjtBQUNKO0FBQ0k7O0FBRTdDOztBQUVBO0FBQ0EsQ0FBQyw0REFBTztBQUNSO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDLDBEQUFNO0FBQ1AsQ0FBQywwREFBTTtBQUNQO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQyw0REFBTztBQUNSO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDLHNEQUFJO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUMsNERBQU87QUFDUjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQywwREFBTTtBQUNQO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQywwREFBTTtBQUNQO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQywwREFBTTtBQUNQO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQywwREFBTTtBQUNQO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQywwREFBTTtBQUNQO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQywwREFBTTtBQUNQO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQywwREFBTTtBQUNQO0FBQ0E7QUFDQSxFQUFFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYXNzLWxpYnJhcnkvLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz80NTZkIiwid2VicGFjazovL3Nhc3MtbGlicmFyeS8uL3NyYy9qcy9jb21wb25lbnRzL2FuY2hvci5qcyIsIndlYnBhY2s6Ly9zYXNzLWxpYnJhcnkvLi9zcmMvanMvY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vc2Fzcy1saWJyYXJ5Ly4vc3JjL2pzL2NvbXBvbmVudHMvY2FyZC5qcyIsIndlYnBhY2s6Ly9zYXNzLWxpYnJhcnkvLi9zcmMvanMvY29tcG9uZW50cy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vc2Fzcy1saWJyYXJ5Ly4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGluZy5qcyIsIndlYnBhY2s6Ly9zYXNzLWxpYnJhcnkvLi9zcmMvanMvY29tcG9uZW50cy9wYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vc2Fzcy1saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Nhc3MtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2Fzcy1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2Fzcy1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2Fzcy1saWJyYXJ5Ly4vc3JjL2pzL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgQW5jaG9yID0gKG9iaikgPT4ge1xuXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGEudGV4dENvbnRlbnQgPSBvYmouY29udGVudDtcblx0b2JqLmNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG5cdFx0YS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdH0pO1xuXHRyZXR1cm4gYTtcbn07XG4iLCJleHBvcnQgY29uc3QgQnV0dG9uID0gKG9iaikgPT4ge1xuXHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRidG4udGV4dENvbnRlbnQgPSBvYmouY29udGVudDtcblx0b2JqLmNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG5cdFx0YnRuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0fSk7XG5cdHJldHVybiBidG47XG59O1xuIiwiZXhwb3J0IGNvbnN0IENhcmQgPSAob2JqKSA9PiB7XG5cdGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuXHRjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcblx0Y2FyZFRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuXHRjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG5cdGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNhcmRCb2R5LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWJvZHlcIik7XG5cdGNhcmRCb2R5LnRleHRDb250ZW50ID0gb2JqLmNvbnRlbnQ7XG5cdGNhcmRUaXRsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBjYXJkQm9keSk7XG5cdHJldHVybiBjYXJkO1xufTtcbiIsImV4cG9ydCBjb25zdCBDb2xvcnMgPSAoKSA9PiB7XG5cdGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb2xvcnMuZm9yRWFjaCgoY29sb3IpID0+IHtcblx0XHRjb25zdCB0ZXh0Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHR0ZXh0Q29sb3IudGV4dENvbnRlbnQgPSBgJHtjb2xvcn0gdGV4dGA7XG5cdFx0dGV4dENvbG9yLmNsYXNzTGlzdC5hZGQoYHRleHQtJHtjb2xvcn1gKTtcblx0XHRjb25zdCBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRzZXBhcmF0b3IudGV4dENvbnRlbnQgPSBcIiB8IFwiO1xuXHRcdGMuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRleHRDb2xvcik7XG5cdFx0dGV4dENvbG9yLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHNlcGFyYXRvcik7XG5cdH0pO1xuXHRjLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxicj48YnI+XCIpO1xuXHRjb2xvcnMuZm9yRWFjaCgoY29sb3IpID0+IHtcblx0XHRjb25zdCBiZ0NvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0YmdDb2xvci50ZXh0Q29udGVudCA9IGAke2NvbG9yfSBiZ2A7XG5cdFx0YmdDb2xvci5jbGFzc0xpc3QuYWRkKGBiZy0ke2NvbG9yfWApO1xuXHRcdGJnQ29sb3IuY2xhc3NMaXN0LmFkZChcInRleHQtd2hpdGVcIik7XG5cdFx0Y29uc3Qgc2VwYXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0c2VwYXJhdG9yLnRleHRDb250ZW50ID0gXCIgfCBcIjtcblx0XHRjLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBiZ0NvbG9yKTtcblx0XHRiZ0NvbG9yLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHNlcGFyYXRvcik7XG5cdH0pO1xuXHRjLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxicj48YnI+XCIpO1xuXHRjb2xvcnMuZm9yRWFjaCgoY29sb3IpID0+IHtcblx0XHRpZiAoY29sb3IgPT09IFwicHJpbWFyeVwiKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMjsgaSA8PSA4OyBpICs9IDIpIHtcblx0XHRcdFx0Y29uc3QgZGFya1ZhcmlhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0XHRkYXJrVmFyaWF0aW9uLnRleHRDb250ZW50ID0gYHByaW1hcnkgZGFyayAke2l9YDtcblx0XHRcdFx0ZGFya1ZhcmlhdGlvbi5jbGFzc0xpc3QuYWRkKGBiZy1wcmltYXJ5LWRhcmstJHtpfWApO1xuXHRcdFx0XHRkYXJrVmFyaWF0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXdoaXRlXCIpO1xuXHRcdFx0XHRjb25zdCBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdFx0c2VwYXJhdG9yLnRleHRDb250ZW50ID0gXCIgfCBcIjtcblx0XHRcdFx0Yy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgZGFya1ZhcmlhdGlvbik7XG5cdFx0XHRcdGRhcmtWYXJpYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgc2VwYXJhdG9yKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAyOyBpIDw9IDg7IGkgKz0gMikge1xuXHRcdFx0XHRjb25zdCBsaWdodFZhcmlhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0XHRsaWdodFZhcmlhdGlvbi50ZXh0Q29udGVudCA9IGBwcmltYXJ5IGxpZ2h0ICR7aX1gO1xuXHRcdFx0XHRsaWdodFZhcmlhdGlvbi5jbGFzc0xpc3QuYWRkKGBiZy1wcmltYXJ5LWxpZ2h0LSR7aX1gKTtcblx0XHRcdFx0bGlnaHRWYXJpYXRpb24uY2xhc3NMaXN0LmFkZChcInRleHQtYmxhY2tcIik7XG5cdFx0XHRcdGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0XHRzZXBhcmF0b3IudGV4dENvbnRlbnQgPSBcIiB8IFwiO1xuXHRcdFx0XHRjLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBsaWdodFZhcmlhdGlvbik7XG5cdFx0XHRcdGxpZ2h0VmFyaWF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHNlcGFyYXRvcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0Yy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8YnI+PGJyPlwiKTtcblx0cmV0dXJuIGM7XG59O1xuXG5jb25zdCBjb2xvcnMgPSBbXG5cdFwicHJpbWFyeVwiLFxuXHRcInNlY29uZGFyeVwiLFxuXHRcImVycm9yXCIsXG5cdFwiaW5mb1wiLFxuXHRcImJsdWVcIixcblx0XCJyZWRcIixcblx0XCJ5ZWxsb3dcIixcblx0XCJncmVlblwiLFxuXHRcIm9yYW5nZVwiLFxuXHRcInB1cnBsZVwiLFxuXHRcImdyYXlcIixcbl07XG4iLCJleHBvcnQgY29uc3QgSGVhZGluZyA9IChvYmopID0+IHtcblx0Y29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke29iai50eXBlfWApO1xuXHRoZWFkaW5nLnRleHRDb250ZW50ID0gb2JqLmNvbnRlbnQ7XG5cdG9iai5jbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuXHRcdGhlYWRpbmcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHR9KTtcblx0cmV0dXJuIGhlYWRpbmc7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IChvYmopID0+IHtcblx0Y29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHBhcmFncmFwaC50ZXh0Q29udGVudCA9IG9iai5jb250ZW50O1xuXHRvYmouY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcblx0XHRwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHR9KTtcblx0cmV0dXJuIHBhcmFncmFwaDtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBzdHlsZXNcbmltcG9ydCBcIi4uL3N0eWxlL3N0eWxlLnNjc3NcIjtcblxuLy8gaW1wb3J0IG1vZHVsZXNcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRpbmdcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvYnV0dG9uXCI7XG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhcmFncmFwaFwiO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hbmNob3JcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmRcIjtcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29sb3JzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuYm9keS5hcHBlbmQoXG5cdEhlYWRpbmcoe1xuXHRcdHR5cGU6IDEsXG5cdFx0Y29udGVudDogXCJDb2xvcnNcIixcblx0XHRjbGFzc2VzOiBbXCJoZWFkaW5nXCJdLFxuXHR9KSxcblx0Q29sb3JzKCksXG5cdEFuY2hvcih7XG5cdFx0Y29udGVudDogXCJob3ZlciBtZVwiLFxuXHRcdGNsYXNzZXM6IFtcInRleHQtcHJpbWFyeVwiLCBcInRleHQtaG92ZXItb3JhbmdlLWxpZ2h0LTFcIl0sXG5cdH0pLFxuXHRIZWFkaW5nKHtcblx0XHR0eXBlOiAxLFxuXHRcdGNvbnRlbnQ6IFwiQ2FyZHNcIixcblx0XHRjbGFzc2VzOiBbXCJoZWFkaW5nXCJdLFxuXHR9KSxcblx0Q2FyZCh7XG5cdFx0dGl0bGU6IFwiVGhpcyBpcyBhIGNhcmRcIixcblx0XHRjb250ZW50OlxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgXCIsXG5cdH0pLFxuXHRIZWFkaW5nKHtcblx0XHR0eXBlOiAxLFxuXHRcdGNvbnRlbnQ6IFwiQnV0dG9uc1wiLFxuXHRcdGNsYXNzZXM6IFtcImhlYWRpbmdcIl0sXG5cdH0pLFxuXHRBbmNob3Ioe1xuXHRcdGNvbnRlbnQ6IFwiY2xpY2sgbWVcIixcblx0XHRjbGFzc2VzOiBbXCJidG5cIl0sXG5cdH0pLFxuXHRBbmNob3Ioe1xuXHRcdGNvbnRlbnQ6IFwiY2xpY2sgbWVcIixcblx0XHRjbGFzc2VzOiBbXCJidG4tcHJpbWFyeVwiLCBcInRleHQtd2hpdGVcIl0sXG5cdH0pLFxuXHRBbmNob3Ioe1xuXHRcdGNvbnRlbnQ6IFwiY2xpY2sgbWVcIixcblx0XHRjbGFzc2VzOiBbXCJidG4tc2Vjb25kYXJ5XCIsIFwidGV4dC13aGl0ZVwiXSxcblx0fSksXG5cdEFuY2hvcih7XG5cdFx0Y29udGVudDogXCJjbGljayBtZVwiLFxuXHRcdGNsYXNzZXM6IFtcImJ0bi1lcnJvclwiLCBcInRleHQtd2hpdGVcIl0sXG5cdH0pLFxuXHRBbmNob3Ioe1xuXHRcdGNvbnRlbnQ6IFwiY2xpY2sgbWVcIixcblx0XHRjbGFzc2VzOiBbXCJidG4taW5mb1wiLCBcInRleHQtd2hpdGVcIl0sXG5cdH0pLFxuXHRBbmNob3Ioe1xuXHRcdGNvbnRlbnQ6IFwiY2xpY2sgbWVcIixcblx0XHRjbGFzc2VzOiBbXCJidG4tb3V0bGluZWQtcHVycGxlXCIsIFwidGV4dC1wdXJwbGVcIiwgXCJ0ZXh0LWhvdmVyLXdoaXRlXCJdLFxuXHR9KSxcblx0QW5jaG9yKHtcblx0XHRjb250ZW50OiBcImNsaWNrIG1lXCIsXG5cdFx0Y2xhc3NlczogW1wiYnRuLW91dGxpbmVkLW9yYW5nZVwiLCBcInRleHQtb3JhbmdlXCIsIFwidGV4dC1ob3Zlci13aGl0ZVwiXSxcblx0fSlcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=