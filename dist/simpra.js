/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["simpra"] = factory();
	else
		root["simpra"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom/display.ts":
/*!****************************!*\
  !*** ./src/dom/display.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_element_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/element_select */ \"./src/utils/element_select.ts\");\n/* harmony import */ var _utils_methodCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methodCheck */ \"./src/utils/methodCheck.ts\");\n/* harmony import */ var _setcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setcss */ \"./src/dom/setcss.ts\");\n\r\n\r\n\r\nconst display = (method, selector) => {\r\n    if ((0,_utils_methodCheck__WEBPACK_IMPORTED_MODULE_1__.default)(method, [\"show\", \"hide\"]) == true) {\r\n        const element = (0,_utils_element_select__WEBPACK_IMPORTED_MODULE_0__.default)(selector);\r\n        if (element != undefined) {\r\n            if (method == \"show\") {\r\n                (0,_setcss__WEBPACK_IMPORTED_MODULE_2__.default)(element, \"display\", \"block\");\r\n            }\r\n            else if (method == \"hide\") {\r\n                (0,_setcss__WEBPACK_IMPORTED_MODULE_2__.default)(element, \"display\", \"none\");\r\n            }\r\n        }\r\n        else {\r\n            console.error(`${selector} is undefined`);\r\n        }\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\r\n\n\n//# sourceURL=webpack://simpra/./src/dom/display.ts?");

/***/ }),

/***/ "./src/dom/select.ts":
/*!***************************!*\
  !*** ./src/dom/select.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst select = (selector) => {\r\n    if (typeof selector != \"string\") {\r\n        console.error(`${selector} is not a vaild selector.`);\r\n        return undefined;\r\n    }\r\n    else {\r\n        let element = document.querySelectorAll(selector);\r\n        return element;\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (select);\r\n\n\n//# sourceURL=webpack://simpra/./src/dom/select.ts?");

/***/ }),

/***/ "./src/dom/setcss.ts":
/*!***************************!*\
  !*** ./src/dom/setcss.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_element_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/element_select */ \"./src/utils/element_select.ts\");\n\r\nconst setCss = (elements, property, value) => {\r\n    const csspropertyset = (element, property, value) => {\r\n        element.style.setProperty(property, value);\r\n    };\r\n    const propertycheck = (element, property, value) => {\r\n        if (typeof property == \"string\" && typeof value == \"string\") {\r\n            csspropertyset(element, property, value);\r\n        }\r\n        else if (typeof property == \"object\" && value == undefined) {\r\n            for (const [key, value] of Object.entries(property))\r\n                csspropertyset(element, key, value);\r\n        }\r\n    };\r\n    const elements_check = (0,_utils_element_select__WEBPACK_IMPORTED_MODULE_0__.default)(elements);\r\n    if (elements_check != undefined) {\r\n        elements_check.forEach(function (element) {\r\n            propertycheck(element, property, value);\r\n        });\r\n    }\r\n    else {\r\n        console.error(\"element is undefined\");\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCss);\r\n\n\n//# sourceURL=webpack://simpra/./src/dom/setcss.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"select\": () => /* reexport safe */ _dom_select__WEBPACK_IMPORTED_MODULE_0__.default,\n/* harmony export */   \"display\": () => /* reexport safe */ _dom_display__WEBPACK_IMPORTED_MODULE_1__.default\n/* harmony export */ });\n/* harmony import */ var _dom_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/select */ \"./src/dom/select.ts\");\n/* harmony import */ var _dom_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/display */ \"./src/dom/display.ts\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://simpra/./src/index.ts?");

/***/ }),

/***/ "./src/utils/element_select.ts":
/*!*************************************!*\
  !*** ./src/utils/element_select.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _dom_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/select */ \"./src/dom/select.ts\");\n\r\nconst element_select = (selector) => {\r\n    if (typeof selector == \"string\") {\r\n        let element;\r\n        element = (0,_dom_select__WEBPACK_IMPORTED_MODULE_0__.default)(selector);\r\n        return element;\r\n    }\r\n    else {\r\n        return selector;\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element_select);\r\n\n\n//# sourceURL=webpack://simpra/./src/utils/element_select.ts?");

/***/ }),

/***/ "./src/utils/methodCheck.ts":
/*!**********************************!*\
  !*** ./src/utils/methodCheck.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst methodCheck = (method, methodList) => {\r\n    if (typeof method == \"string\") {\r\n        if (Array.isArray(methodList)) {\r\n            if (methodList.includes(method)) {\r\n                return true;\r\n            }\r\n            else {\r\n                return false;\r\n            }\r\n        }\r\n        else {\r\n            console.error(`methodList paramter should be an array.The methodList you passed is ${methodList}`);\r\n            return false;\r\n        }\r\n    }\r\n    else {\r\n        console.error(`method parameter should be string.The method you passed is ${method}`);\r\n        return false;\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (methodCheck);\r\n\n\n//# sourceURL=webpack://simpra/./src/utils/methodCheck.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});