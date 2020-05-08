module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Footer.js":
/*!******************************!*\
  !*** ./Components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/Components/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("footer", {
  className: "site-footer footer-one footer-inner-page",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "middle-footer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "col-lg-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "footer-widget",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "index.html",
  className: "footer-logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images\\resources\\logo-lite-1-1.png",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 19
  }
})), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 17
  }
}, "Inston is the secret weapon of successful people. Not just in work, but in life. We give you more time to focus on the big picture by taking care of the little details."))), __jsx("div", {
  className: "col-lg-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "footer-widget explore-widget",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "widget-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 17
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 19
  }
}, "About")), __jsx("ul", {
  className: "links-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 17
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 21
  }
}, "Why Vira?")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 21
  }
}, "Refer & Earn")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 21
  }
}, "Services")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 21
  }
}, "Contact"))))), __jsx("div", {
  className: "col-lg-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "footer-widget legal-widget",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "widget-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 17
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 19
  }
}, "Resources")), __jsx("ul", {
  className: "links-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 17
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 21
  }
}, "FAQ")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 21
  }
}, "Services")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 21
  }
}, "Blog")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 21
  }
}, "Partnership"))))), __jsx("div", {
  className: "col-lg-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "footer-widget legal-widget",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "widget-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 17
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 19
  }
}, "Legal")), __jsx("ul", {
  className: "links-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 17
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 21
  }
}, "Pricing")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 21
  }
}, "Terms")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 21
  }
}, "Privacy")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 21
  }
}, "Non Disclosure"))))), __jsx("div", {
  className: "col-lg-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "footer-widget contact-widget",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "widget-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 17
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 19
  }
}, "You have any Question?")), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 17
  }
}, "Contact us ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 30
  }
}), __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 19
  }
}, "000 8888 999")), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 17
  }
}, "Request a Consultation ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 42
  }
}), __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 19
  }
}, "Fill out Form")), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 17
  }
}, "Send us Email ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 33
  }
}), __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 19
  }
}, "needhelp@inston.com"))))))), __jsx("div", {
  className: "bottom-footer text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 9
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 11
  }
}, "\xA9 Copyright 2019 by ", __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 33
  }
}, "Layerdrops.com"))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./Components/Navbar.js":
/*!******************************!*\
  !*** ./Components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/Components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Navbar = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("header", {
  className: "site-header header-one site-header__header-two",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("nav", {
  className: "navbar navbar-expand-lg navbar-light header-navigation stricky",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "container clearfix",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "logo-box clearfix",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 11
  }
}, __jsx("a", {
  className: "navbar-brand",
  href: "index.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}, __jsx("img", {
  src: "images\\resources\\logo-dark-1-1.png",
  className: "main-logo",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 15
  }
})), __jsx("button", {
  className: "menu-toggler",
  "data-target": ".main-navigation",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }
}, __jsx("span", {
  className: "fa fa-bars",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 15
  }
}))), __jsx("div", {
  className: "main-navigation",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }
}, __jsx("ul", {
  className: " navigation-box",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }
}, __jsx("li", {
  className: "current",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "index.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 17
  }
}, "Home"), __jsx("ul", {
  className: "submenu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 17
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "index.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 21
  }
}, "Home One")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "index2.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 21
  }
}, "Home Two")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "index3.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 21
  }
}, "Home Three")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "index4.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 21
  }
}, "Home Four")))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "about.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 17
  }
}, "About")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "#.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 17
  }
}, "Pages"), __jsx("ul", {
  className: "submenu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 17
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "what-we-do.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 21
  }
}, "What we do")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "why-choose.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 21
  }
}, "Why choose us")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "how-works.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 21
  }
}, "How they works")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "pricing.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 21
  }
}, "Plans & Pricing")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "success.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 21
  }
}, "Success Stories")))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "news.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 17
  }
}, "News"), __jsx("ul", {
  className: "submenu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 17
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "news.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 21
  }
}, "News Page")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "news-details.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 21
  }
}, "News Details")))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "contact.html",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 17
  }
}, "Contact")))), __jsx("div", {
  className: "right-side-box",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "#",
  className: "header-one__link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 13
  }
}, "Call us 000 8888 999"), __jsx("a", {
  href: "#",
  className: "site-header__header-two-btn",
  style: {
    background: "#053B81"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 13
  }
}, "Request a Consultation"))))));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./Layouts/PageLayouts/index.js":
/*!**************************************!*\
  !*** ./Layouts/PageLayouts/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Footer */ "./Components/Footer.js");
var _jsxFileName = "/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/Layouts/PageLayouts/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PageLayouts = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx("div", {
  class: "page-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), props.children, __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (PageLayouts);

/***/ }),

/***/ "./pages/partnerships.js":
/*!*******************************!*\
  !*** ./pages/partnerships.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layouts_PageLayouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layouts/PageLayouts */ "./Layouts/PageLayouts/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/partnerships.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Partnerships = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(_Layouts_PageLayouts__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, __jsx("meta", {
  charset: "UTF-8",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx("meta", {
  "http-equiv": "X-UA-Compatible",
  content: "ie=edge",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("title", {
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, "Inston || Home Two || Responsive HTML 5 Template"), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "57x57",
  href: "images\\favicon\\apple-icon-57x57.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "60x60",
  href: "images\\favicon\\apple-icon-60x60.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "72x72",
  href: "images\\favicon\\apple-icon-72x72.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "76x76",
  href: "images\\favicon\\apple-icon-76x76.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "114x114",
  href: "images\\favicon\\apple-icon-114x114.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "120x120",
  href: "images\\favicon\\apple-icon-120x120.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "144x144",
  href: "images\\favicon\\apple-icon-144x144.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "152x152",
  href: "images\\favicon\\apple-icon-152x152.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "images\\favicon\\apple-icon-180x180.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "192x192",
  href: "images\\favicon\\android-icon-192x192.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "images\\favicon\\favicon-32x32.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "96x96",
  href: "images\\favicon\\favicon-96x96.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "images\\favicon\\favicon-16x16.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "manifest",
  href: "images\\favicon\\manifest.json",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "msapplication-TileColor",
  content: "#ffffff",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "msapplication-TileImage",
  content: "images/favicon/ms-icon-144x144.png",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "theme-color",
  content: "#ffffff",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/css/style.css",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "css/responsive.css",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "js/jquery.js",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "js/bootstrap.bundle.min.js",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "js/swiper.min.js",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "js/owl.carousel.min.js",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "js/theme.js",
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 9
  }
})), __jsx("section", {
  className: "jsx-3345129176" + " " + "inner-banner ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "jsx-3345129176" + " " + "container flex-column-reverse d-flex justify-content-center align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }
}, __jsx("h2", {
  className: "jsx-3345129176" + " " + "inner-banner__title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 11
  }
}, "Partnerships"))), __jsx("br", {
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 7
  }
}), __jsx("br", {
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 7
  }
}), __jsx("section", {
  className: "jsx-3345129176" + " " + "mx-auto wrapper pt-5 pb-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 7
  }
}, __jsx("h2", {
  className: "jsx-3345129176" + " " + "text-dark",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 9
  }
}, "Lorem ipsum"), __jsx("p", {
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 9
  }
}, "Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been the ndustry standard dummy text ever sincer they llam id condimentum purus In non ex at ligula fringilla bortis. Ut et mauris auctor, aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada dolor. Integer fringilla odio a dolor aliquet, eu euismod lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales des volutpat diam, id sagittis purus egestas dapibus. Donec bibendum est quis mi commodo blandit. Maecenas pellentesque, massa vitae faucibus consectetur, ante magna gravida magna, ut venenatis massa augue et odio. Aliquam luctus viverra velit, non euismod ligula congue sed."), __jsx("div", {
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "jsx-3345129176" + " " + "button-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "#",
  className: "jsx-3345129176" + " " + "thm-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 13
  }
}, "Request a Consultation")))), __jsx("br", {
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 7
  }
}), __jsx("br", {
  className: "jsx-3345129176",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 7
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3345129176",
  __self: undefined
}, ".wrapper{width:45%;}@media only screen and (max-width:500px){.wrapper{width:100%;padding:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9yaXp3YW4vRUUxMDdCMDYxMDdBRDRENS9SSVRFU0hfUFJPSkVDVFMvdmlydHVhbGFzc2lzdGFudC9wYWdlcy9wYXJ0bmVyc2hpcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0lTLEFBR3VCLEFBS0csVUFKZixDQUtpQixhQUNmIiwiZmlsZSI6Ii9tZWRpYS9yaXp3YW4vRUUxMDdCMDYxMDdBRDRENS9SSVRFU0hfUFJPSkVDVFMvdmlydHVhbGFzc2lzdGFudC9wYWdlcy9wYXJ0bmVyc2hpcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnZUxheW91dHMgZnJvbSBcIi4uL0xheW91dHMvUGFnZUxheW91dHNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgUGFydG5lcnNoaXBzID0gKCkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPFBhZ2VMYXlvdXRzPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cbiAgICAgICAgPHRpdGxlPkluc3RvbiB8fCBIb21lIFR3byB8fCBSZXNwb25zaXZlIEhUTUwgNSBUZW1wbGF0ZTwvdGl0bGU+XG4gICAgICAgIHsvKiA8IS0tIEZhdmljb24gSWNvbnMgLS0+ICovfVxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiNTd4NTdcIlxuICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGFwcGxlLWljb24tNTd4NTcucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICBzaXplcz1cIjYweDYwXCJcbiAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxhcHBsZS1pY29uLTYweDYwLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCI3Mng3MlwiXG4gICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi03Mng3Mi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiNzZ4NzZcIlxuICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGFwcGxlLWljb24tNzZ4NzYucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICBzaXplcz1cIjExNHgxMTRcIlxuICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGFwcGxlLWljb24tMTE0eDExNC5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTIweDEyMFwiXG4gICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi0xMjB4MTIwLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCIxNDR4MTQ0XCJcbiAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxhcHBsZS1pY29uLTE0NHgxNDQucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICBzaXplcz1cIjE1MngxNTJcIlxuICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGFwcGxlLWljb24tMTUyeDE1Mi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi0xODB4MTgwLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIxOTJ4MTkyXCJcbiAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxhbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIHNpemVzPVwiMzJ4MzJcIlxuICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGZhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjk2eDk2XCJcbiAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxmYXZpY29uLTk2eDk2LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcZmF2aWNvbi0xNngxNi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXG1hbmlmZXN0Lmpzb25cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCJcbiAgICAgICAgICBjb250ZW50PVwiaW1hZ2VzL2Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvY3NzL3N0eWxlLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiY3NzL3Jlc3BvbnNpdmUuY3NzXCIgLz5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cImpzL2pxdWVyeS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cImpzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwianMvc3dpcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cImpzL293bC5jYXJvdXNlbC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJqcy90aGVtZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbm5lci1iYW5uZXIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgtY29sdW1uLXJldmVyc2UgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImlubmVyLWJhbm5lcl9fdGl0bGVcIj5QYXJ0bmVyc2hpcHM8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm14LWF1dG8gd3JhcHBlciBwdC01IHBiLTVcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZGFya1wiPkxvcmVtIGlwc3VtPC9oMj5cblxuICAgICAgICA8cD5cbiAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcmludGluZyBhbmQgdHlwZXNldHRpbmdcbiAgICAgICAgICBpbmR1c3RyeSBoYXMgYmVlbiB0aGUgbmR1c3RyeSBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2VyIHRoZXlcbiAgICAgICAgICBsbGFtIGlkIGNvbmRpbWVudHVtIHB1cnVzIEluIG5vbiBleCBhdCBsaWd1bGEgZnJpbmdpbGxhIGJvcnRpcy4gVXQgZXRcbiAgICAgICAgICBtYXVyaXMgYXVjdG9yLCBhbGlxdWV0IG51bGxhIHNlZCwgYWxpcXVhbSBtYXVyaXMuIFZlc3RpYnVsdW0gc2VkXG4gICAgICAgICAgbWFsZXN1YWRhIGRvbG9yLiBJbnRlZ2VyIGZyaW5naWxsYSBvZGlvIGEgZG9sb3IgYWxpcXVldCwgZXUgZXVpc21vZFxuICAgICAgICAgIGxlY3R1cyBwb3J0dGl0b3IuIFByb2luIGV0IGxpYmVybyBuZWMgZXJvcyBlbGVpZmVuZCBjb21tb2RvIFBoYXNlbGx1c1xuICAgICAgICAgIHNvZGFsZXMgZGVzIHZvbHV0cGF0IGRpYW0sIGlkIHNhZ2l0dGlzIHB1cnVzIGVnZXN0YXMgZGFwaWJ1cy4gRG9uZWNcbiAgICAgICAgICBiaWJlbmR1bSBlc3QgcXVpcyBtaSBjb21tb2RvIGJsYW5kaXQuIE1hZWNlbmFzIHBlbGxlbnRlc3F1ZSwgbWFzc2FcbiAgICAgICAgICB2aXRhZSBmYXVjaWJ1cyBjb25zZWN0ZXR1ciwgYW50ZSBtYWduYSBncmF2aWRhIG1hZ25hLCB1dCB2ZW5lbmF0aXNcbiAgICAgICAgICBtYXNzYSBhdWd1ZSBldCBvZGlvLiBBbGlxdWFtIGx1Y3R1cyB2aXZlcnJhIHZlbGl0LCBub24gZXVpc21vZCBsaWd1bGFcbiAgICAgICAgICBjb25ndWUgc2VkLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ibG9ja1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGhtLWJ0blwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgIFJlcXVlc3QgYSBDb25zdWx0YXRpb25cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogLy5idG4tYmxvY2sgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvUGFnZUxheW91dHM+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYXJ0bmVyc2hpcHM7XG4iXX0= */\n/*@ sourceURL=/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/partnerships.js */")));

/* harmony default export */ __webpack_exports__["default"] = (Partnerships);

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/partnerships.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/partnerships.js */"./pages/partnerships.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=partnerships.js.map