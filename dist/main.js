/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/anchor.js":
/*!*************************************!*\
  !*** ./src/js/components/anchor.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Anchor": () => (/* binding */ Anchor)
/* harmony export */ });
const Anchor = obj => {
  const a = document.createElement("a");
  a.textContent = obj.content;
  obj.classes.forEach(className => {
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
const Button = obj => {
  const btn = document.createElement("button");
  btn.textContent = obj.content;
  obj.classes.forEach(className => {
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
const Card = obj => {
  const card = document.createElement("div");
  card.classList.add("card");
  const cardTitle = document.createElement("h3");
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
  colors.forEach(color => {
    const textColor = document.createElement("span");
    textColor.textContent = `${color} text`;
    textColor.classList.add(`text-${color}`);
    const separator = document.createElement("span");
    separator.textContent = " | ";
    c.insertAdjacentElement("beforeend", textColor);
    textColor.insertAdjacentElement("afterend", separator);
  });
  c.insertAdjacentHTML("beforeend", "<br><br>");
  colors.forEach(color => {
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
  colors.forEach(color => {
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
const colors = ["primary", "secondary", "error", "info", "blue", "red", "yellow", "green", "orange", "purple", "gray"];

/***/ }),

/***/ "./src/js/components/column.js":
/*!*************************************!*\
  !*** ./src/js/components/column.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Column": () => (/* binding */ Column)
/* harmony export */ });
const Column = obj => {
  const col = document.createElement("div");
  obj.classes.forEach(className => {
    col.classList.add(className);
  });
  obj.children.forEach(child => {
    col.append(child);
  });
  return col;
};

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
const Heading = obj => {
  const heading = document.createElement(`h${obj.type}`);
  heading.textContent = obj.content;
  obj.classes.forEach(className => {
    heading.classList.add(className);
  });
  return heading;
};

/***/ }),

/***/ "./src/js/components/hr.js":
/*!*********************************!*\
  !*** ./src/js/components/hr.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hr": () => (/* binding */ Hr)
/* harmony export */ });
const Hr = obj => {
  const hr = document.createElement("hr");
  obj.classes.forEach(className => {
    hr.classList.add(className);
  });
  return hr;
};

/***/ }),

/***/ "./src/js/components/navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": () => (/* binding */ Navbar)
/* harmony export */ });
const Navbar = obj => {
  const navConatainer = document.createElement("div");
  navConatainer.classList.add("container");
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  navbar.append(navConatainer);
  obj.classes.forEach(className => {
    navbar.classList.add(className);
  });
  const siteTitle = document.createElement("h2");
  siteTitle.textContent = obj.title;
  siteTitle.classList.add("site-title");
  const p = document.createElement("p");
  p.textContent = obj.content;
  navConatainer.append(siteTitle, p);
  return navbar;
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
const Paragraph = obj => {
  const paragraph = document.createElement("p");
  paragraph.textContent = obj.content;
  obj.classes.forEach(className => {
    paragraph.classList.add(className);
  });
  return paragraph;
};

/***/ }),

/***/ "./src/js/components/row.js":
/*!**********************************!*\
  !*** ./src/js/components/row.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Row": () => (/* binding */ Row)
/* harmony export */ });
const Row = obj => {
  const row = document.createElement("div");
  row.classList.add("row");
  obj.classes.forEach(className => {
    row.classList.add(className);
  });
  obj.children.forEach(child => {
    row.append(child);
  });
  return row;
};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _components_hr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hr */ "./src/js/components/hr.js");
/* harmony import */ var _components_column__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/column */ "./src/js/components/column.js");
/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/row */ "./src/js/components/row.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar */ "./src/js/components/navbar.js");
// import styles


// import modules










const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
const navbar = (0,_components_navbar__WEBPACK_IMPORTED_MODULE_10__.Navbar)({
  title: "basics.css",
  content: "simple css library for css wizards",
  classes: ["mb-4", "navbar-purple", "text-white"]
});
body.append(navbar);
container.append((0,_components_heading__WEBPACK_IMPORTED_MODULE_1__.Heading)({
  type: 1,
  content: "Colors",
  classes: ["heading"]
}), (0,_components_colors__WEBPACK_IMPORTED_MODULE_6__.Colors)(), (0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
  content: "hover me",
  classes: ["text-primary", "text-hover-orange-light-1"]
}), (0,_components_hr__WEBPACK_IMPORTED_MODULE_7__.Hr)({
  classes: ["mt-4", "mb-4"]
}), (0,_components_heading__WEBPACK_IMPORTED_MODULE_1__.Heading)({
  type: 1,
  content: "Cards",
  classes: ["heading"]
}), (0,_components_card__WEBPACK_IMPORTED_MODULE_5__.Card)({
  title: "This is a card",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
}), (0,_components_hr__WEBPACK_IMPORTED_MODULE_7__.Hr)({
  classes: ["mt-4", "mb-4"]
}), (0,_components_heading__WEBPACK_IMPORTED_MODULE_1__.Heading)({
  type: 1,
  content: "Buttons",
  classes: ["heading"]
}), (0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
  content: "click me",
  classes: ["btn"]
}), (0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
  content: "click me",
  classes: ["btn-primary", "text-white"]
}), (0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
  content: "click me",
  classes: ["btn-secondary", "text-white"]
}), (0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
  content: "click me",
  classes: ["btn-error", "text-white"]
}), (0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
  content: "click me",
  classes: ["btn-info", "text-white"]
}), (0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
  content: "click me",
  classes: ["btn-outlined-purple", "text-purple", "text-hover-white"]
}), (0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
  content: "click me",
  classes: ["btn-outlined-orange", "text-orange", "text-hover-white"]
}), (0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
  content: "click me",
  classes: ["btn-complement-purple"]
}), (0,_components_anchor__WEBPACK_IMPORTED_MODULE_4__.Anchor)({
  content: "click me",
  classes: ["btn-complement-primary"]
}), (0,_components_hr__WEBPACK_IMPORTED_MODULE_7__.Hr)({
  classes: ["mt-4", "mb-4"]
}), (0,_components_heading__WEBPACK_IMPORTED_MODULE_1__.Heading)({
  type: 1,
  content: "Font Sizes",
  classes: ["heading", "mb-2"]
}), (0,_components_paragraph__WEBPACK_IMPORTED_MODULE_3__.Paragraph)({
  content: "This is small font",
  classes: ["font-sm"]
}), (0,_components_paragraph__WEBPACK_IMPORTED_MODULE_3__.Paragraph)({
  content: "This is medium font",
  classes: ["font-md"]
}), (0,_components_paragraph__WEBPACK_IMPORTED_MODULE_3__.Paragraph)({
  content: "This is large font",
  classes: ["font-lg"]
}), (0,_components_paragraph__WEBPACK_IMPORTED_MODULE_3__.Paragraph)({
  content: "This is extra large font",
  classes: ["font-xl"]
}), (0,_components_paragraph__WEBPACK_IMPORTED_MODULE_3__.Paragraph)({
  content: "This is extra, extra large font",
  classes: ["font-xxl"]
}), (0,_components_hr__WEBPACK_IMPORTED_MODULE_7__.Hr)({
  classes: ["mt-4", "mb-4"]
}), (0,_components_heading__WEBPACK_IMPORTED_MODULE_1__.Heading)({
  type: 1,
  content: "Grid System",
  classes: ["mb-2"]
}), (0,_components_row__WEBPACK_IMPORTED_MODULE_9__.Row)({
  classes: ["gap-2", "justify-center"],
  children: [(0,_components_column__WEBPACK_IMPORTED_MODULE_8__.Column)({
    classes: ["col-12-xs", "col-5-sm", "col-3-xl"],
    children: [(0,_components_card__WEBPACK_IMPORTED_MODULE_5__.Card)({
      title: "this a card lol",
      content: "some content goes here :P"
    })]
  }), (0,_components_column__WEBPACK_IMPORTED_MODULE_8__.Column)({
    classes: ["col-12-xs", "col-5-sm", "col-3-xl"],
    children: [(0,_components_card__WEBPACK_IMPORTED_MODULE_5__.Card)({
      title: "this a card lol",
      content: "some content goes here :P"
    })]
  }), (0,_components_column__WEBPACK_IMPORTED_MODULE_8__.Column)({
    classes: ["col-12-xs", "col-5-sm", "col-3-xl"],
    children: [(0,_components_card__WEBPACK_IMPORTED_MODULE_5__.Card)({
      title: "this a card lol",
      content: "some content goes here :P"
    })]
  }), (0,_components_column__WEBPACK_IMPORTED_MODULE_8__.Column)({
    classes: ["col-12-xs", "col-5-sm", "col-3-xl"],
    children: [(0,_components_card__WEBPACK_IMPORTED_MODULE_5__.Card)({
      title: "this a card lol",
      content: "some content goes here :P"
    })]
  })]
}), (0,_components_hr__WEBPACK_IMPORTED_MODULE_7__.Hr)({
  classes: ["mt-4", "mb-4"]
}));
body.append(container);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map