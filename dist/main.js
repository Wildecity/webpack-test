/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAboutUs\": () => (/* binding */ createAboutUs)\n/* harmony export */ });\nfunction createAboutUs() {\n  let aboutWrapper = document.createElement(\"div\");\n  let aboutTitle = document.createElement(\"h2\");\n  let aboutContent = document.createElement(\"p\");\n  let aboutMap = document.createElement(\"div\");\n  aboutWrapper.classList.add(\"wrapper\");\n  aboutTitle.textContent = \"Pizza Place\";\n  aboutTitle.style.textAlign = \"center\";\n  aboutTitle.style.padding = \"15px 0 15px 0\";\n  aboutContent.textContent =\n    \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis rem vel, quod mollitia nobis autem est odit libero eligendi exercitationem asperiores iure tenetur harum corporis ipsa officiis nostrum recusandae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis rem vel, quod mollitia nobis autem est odit libero eligendi exercitationem asperiores iure tenetur harum corporis ipsa officiis nostrum recusandae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis rem vel, quod mollitia nobis autem est odit libero eligendi exercitationem asperiores iure tenetur harum corporis ipsa officiis nostrum recusandae?\";\n  aboutMap.id = \"map\";\n  aboutMap.innerHTML =\n    '<div class=\"gmap_canvas\"><iframe width=\"600\" height=\"500\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=dissapointment%20island&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://123movies-to.org\">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href=\"https://www.embedgooglemap.net\">how to add map in website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>';\n  aboutWrapper.appendChild(aboutTitle);\n  aboutWrapper.appendChild(aboutContent);\n  aboutWrapper.appendChild(aboutMap);\n  container.appendChild(aboutWrapper);\n}\n\n\n//# sourceURL=webpack://webpack-test/./src/about.js?");

/***/ }),

/***/ "./src/createText.js":
/*!***************************!*\
  !*** ./src/createText.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createText\": () => (/* binding */ createText)\n/* harmony export */ });\nfunction createText(text) {\n    let paragraph = document.createElement(\"p\");\n    paragraph.textContent = text;\n    return paragraph\n};\n\n//# sourceURL=webpack://webpack-test/./src/createText.js?");

/***/ }),

/***/ "./src/emptyMain.js":
/*!**************************!*\
  !*** ./src/emptyMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emptyMain\": () => (/* binding */ emptyMain)\n/* harmony export */ });\nfunction emptyMain() {\n    const main = document.getElementById(\"container\");\n    main.innerHTML = \"\";\n}\n\n//# sourceURL=webpack://webpack-test/./src/emptyMain.js?");

/***/ }),

/***/ "./src/eventListener.js":
/*!******************************!*\
  !*** ./src/eventListener.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateEvents\": () => (/* binding */ generateEvents)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.js */ \"./src/products.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _emptyMain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emptyMain.js */ \"./src/emptyMain.js\");\n\n\n\n\n\nfunction generateEvents() {\n  const home = document.querySelector(\"#home\");\n  const products = document.querySelector(\"#products\");\n  const aboutUS = document.querySelector(\"#aboutUS\");\n\n  home.addEventListener(\"click\", () => {\n    (0,_emptyMain_js__WEBPACK_IMPORTED_MODULE_3__.emptyMain)();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n  });\n  products.addEventListener(\"click\", () => {\n    (0,_emptyMain_js__WEBPACK_IMPORTED_MODULE_3__.emptyMain)();\n    (0,_products_js__WEBPACK_IMPORTED_MODULE_1__.createProducts)();\n  });\n  aboutUS.addEventListener(\"click\", () => {\n    (0,_emptyMain_js__WEBPACK_IMPORTED_MODULE_3__.emptyMain)();\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.createAboutUs)();\n  });\n}\n\n\n//# sourceURL=webpack://webpack-test/./src/eventListener.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _createText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createText */ \"./src/createText.js\");\n/* harmony import */ var _pizza_chef_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pizza-chef.jpg */ \"./src/pizza-chef.jpg\");\n\n\n\nfunction createHome() {\n  //ya está declarado el container en el index.js, se pueden eliminar las referencias a main y usar la otra variable(container)\n  const main = document.getElementById(\"container\");\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n\n  const pizzaChef = document.createElement(\"img\");\n  pizzaChef.src = _pizza_chef_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\n  home.appendChild((0,_createText__WEBPACK_IMPORTED_MODULE_0__.createText)(\"The best pizza place in town\"));\n  home.appendChild(pizzaChef);\n  home.appendChild((0,_createText__WEBPACK_IMPORTED_MODULE_0__.createText)(\"Don't miss out on us, we're pretty cool\"));\n  home.appendChild((0,_createText__WEBPACK_IMPORTED_MODULE_0__.createText)(\"(unlike our pizzas)\"));\n\n  main.appendChild(home);\n}\n\n\n//# sourceURL=webpack://webpack-test/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListener */ \"./src/eventListener.js\");\n\n\nlet container = document.querySelector(\"#container\");\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n(0,_eventListener__WEBPACK_IMPORTED_MODULE_1__.generateEvents)();\n\n\n//# sourceURL=webpack://webpack-test/./src/index.js?");

/***/ }),

/***/ "./src/products.js":
/*!*************************!*\
  !*** ./src/products.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProducts\": () => (/* binding */ createProducts)\n/* harmony export */ });\n/* harmony import */ var _p1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p1.jpg */ \"./src/p1.jpg\");\n/* harmony import */ var _p2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p2.jpg */ \"./src/p2.jpg\");\n/* harmony import */ var _p3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./p3.jpg */ \"./src/p3.jpg\");\n\n\n\n\nfunction createProducts() {\n  // let container = document.querySelector(\"#container\");\n  let sources = [_p1_jpg__WEBPACK_IMPORTED_MODULE_0__, _p2_jpg__WEBPACK_IMPORTED_MODULE_1__, _p3_jpg__WEBPACK_IMPORTED_MODULE_2__];\n  let prodName = [\"Pineapple Pizza\", \"Peperoni Pizza\", \"Neapolitan Pizza\"];\n  let images = [];\n  for (let i = 0; i < sources.length; i++) {\n    let imgContainer = document.createElement(\"div\");\n    let img = document.createElement(\"img\");\n    let title = document.createElement(\"h2\");\n    imgContainer.classList.add(\"imgContainer\");\n    img.classList.add(\"productImg\");\n    title.classList.add(\"productTitle\");\n    img.src = sources[i];\n    title.textContent = prodName[i];\n    imgContainer.appendChild(title);\n    imgContainer.appendChild(img);\n    images.push(imgContainer);\n  }\n  images.forEach((image) => {\n    container.appendChild(image);\n  });\n}\n\n\n//# sourceURL=webpack://webpack-test/./src/products.js?");

/***/ }),

/***/ "./src/p1.jpg":
/*!********************!*\
  !*** ./src/p1.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b82ec32e2dce26705d73.jpg\";\n\n//# sourceURL=webpack://webpack-test/./src/p1.jpg?");

/***/ }),

/***/ "./src/p2.jpg":
/*!********************!*\
  !*** ./src/p2.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"59205b057b425e3c5a2a.jpg\";\n\n//# sourceURL=webpack://webpack-test/./src/p2.jpg?");

/***/ }),

/***/ "./src/p3.jpg":
/*!********************!*\
  !*** ./src/p3.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8e92c693e868bc35cd7.jpg\";\n\n//# sourceURL=webpack://webpack-test/./src/p3.jpg?");

/***/ }),

/***/ "./src/pizza-chef.jpg":
/*!****************************!*\
  !*** ./src/pizza-chef.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9e8792471176f92d465.jpg\";\n\n//# sourceURL=webpack://webpack-test/./src/pizza-chef.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;