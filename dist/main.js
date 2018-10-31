/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _html_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-util.js */ \"./src/html-util.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"<li>\", \"</li>\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"mount\",\n    value: function mount() {\n      var formElement = document.querySelector(\"#js-form\");\n      var inputElement = document.querySelector(\"#js-form-input\");\n      var containerElement = document.querySelector(\"#js-todo-list\");\n      var todoItemCountElement = document.querySelector(\"#js-todo-count\");\n      var todoItemCount = 0;\n      formElement.addEventListener(\"submit\", function (event) {\n        event.preventDefault();\n        var todoItemElement = Object(_html_util_js__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(_templateObject(), inputElement.value);\n        containerElement.appendChild(todoItemElement);\n        todoItemCount += 1;\n        todoItemCountElement.textContent = \"Todo\\u30A2\\u30A4\\u30C6\\u30E0\\u6570: \".concat(todoItemCount);\n        inputElement.value = \"\";\n      });\n    }\n  }]);\n\n  return App;\n}();\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/html-util.js":
/*!**************************!*\
  !*** ./src/html-util.js ***!
  \**************************/
/*! exports provided: escapeSpecialChars, htmlToElement, element, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeSpecialChars\", function() { return escapeSpecialChars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlToElement\", function() { return htmlToElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction escapeSpecialChars(str) {\n  return str.replace(/&/g, \"&amp;\").replace(/</g, \"$lt;\").replace(/>/g, \"$gt;\").replace(/\"/g, \"$quot;\").replace(/'/g, \"$#039;\");\n}\nfunction htmlToElement(html) {\n  //html文字列を受け取り、DOM要素を返す\n  var template = document.createElement(\"template\");\n  template.innerHTML = html;\n  return template.content.firstElementChild;\n}\n/**\n * HTML文字列からDOM Nodeを作成して返す\n * @return {HTMLElement}\n */\n\nfunction element(strings) {\n  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    values[_key - 1] = arguments[_key];\n  }\n\n  var htmlString = strings.reduce(function (result, string, i) {\n    var value = values[i - 1];\n\n    if (typeof value === \"string\") {\n      return result + escapeSpecialChars(value) + string;\n    } else {\n      return result + String(value) + string;\n    }\n  });\n  return htmlToElement(htmlString);\n}\n/**\n * コンテナ要素の中身をbodyElementで上書きする\n * @param {HTMLElement} bodyElement コンテナ要素の中身となる要素\n * @param {HTMLElement} containerElement コンテナ要素\n */\n\nfunction render(bodyElement, containerElement) {\n  // rootElementの中身を空にする\n  containerElement.innerHTML = \"\"; // rootElementの直下にbodyElementを追加する\n\n  containerElement.appendChild(bodyElement);\n}\n\n//# sourceURL=webpack:///./src/html-util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n\nvar app = new _App_js__WEBPACK_IMPORTED_MODULE_0__[\"App\"]();\napp.mount();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });