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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
  className: "upper-footer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}), __jsx("div", {
  className: "middle-footer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "col-lg-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "footer-widget",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "index.html",
  className: "footer-logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images\\resources\\logo-lite-1-1.png",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 19
  }
})), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }
}, "Inston is the secret weapon of successful people. Not just in work, but in life. We give you more time to focus on the big picture by taking care of the little details."))), __jsx("div", {
  className: "col-lg-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "footer-widget explore-widget",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "widget-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 17
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 19
  }
}, "About")), __jsx("ul", {
  className: "links-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 17
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 21
  }
}, "Why Vira?")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 21
  }
}, "Refer & Earn")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 21
  }
}, "Services")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 21
  }
}, "Contact"))))), __jsx("div", {
  className: "col-lg-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "footer-widget legal-widget",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "widget-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 17
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 19
  }
}, "Resources")), __jsx("ul", {
  className: "links-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 17
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 21
  }
}, "FAQ")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 21
  }
}, "Services")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 21
  }
}, "Blog")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 21
  }
}, "Partnership"))))), __jsx("div", {
  className: "col-lg-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "footer-widget legal-widget",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "widget-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 17
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 19
  }
}, "Legal")), __jsx("ul", {
  className: "links-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 17
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 21
  }
}, "Pricing")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 21
  }
}, "Terms")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 21
  }
}, "Privacy")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 21
  }
}, "Non Disclosure"))))), __jsx("div", {
  className: "col-lg-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "footer-widget contact-widget",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "widget-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 17
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 19
  }
}, "You have any Question?")), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 17
  }
}, "Contact us ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 30
  }
}), __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 19
  }
}, "000 8888 999")), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 17
  }
}, "Request a Consultation ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 42
  }
}), __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 19
  }
}, "Fill out Form")), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 17
  }
}, "Send us Email ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 33
  }
}), __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 19
  }
}, "needhelp@inston.com"))))))), __jsx("div", {
  className: "bottom-footer text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 9
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 11
  }
}, "\xA9 Copyright 2019 by ", __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134,
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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_PageLayouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/PageLayouts */ "./Layouts/PageLayouts/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const About = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(_Layouts_PageLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, __jsx("meta", {
  charset: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx("meta", {
  "http-equiv": "X-UA-Compatible",
  content: "ie=edge",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("title", {
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
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "manifest",
  href: "images\\favicon\\manifest.json",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "msapplication-TileColor",
  content: "#ffffff",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "msapplication-TileImage",
  content: "images/favicon/ms-icon-144x144.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "theme-color",
  content: "#ffffff",
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
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "js/jquery.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "js/bootstrap.bundle.min.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "js/swiper.min.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "js/owl.carousel.min.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "js/theme.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 9
  }
})), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 7
  }
}, __jsx("section", {
  className: "inner-banner ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "container flex-column-reverse d-flex justify-content-center align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 11
  }
}, __jsx("h2", {
  className: "inner-banner__title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 13
  }
}, "About"), __jsx("ul", {
  className: "thm-breadcrumb",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 13
  }
}, __jsx("li", {
  className: "thm-breadcrumb__item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "#",
  className: "thm-breadcrumb__link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 17
  }
}, "Home")), __jsx("li", {
  className: "thm-breadcrumb__item current",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "#",
  className: "thm-breadcrumb__link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 17
  }
}, "About Page"))))), __jsx("section", {
  className: "about-two",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "about-two__image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images\\resources\\about-1-2.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 19
  }
}))), __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "about-two__content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "sec-title text-left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 19
  }
}, __jsx("span", {
  className: "tag-line",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 21
  }
}, "Introduction"), __jsx("h2", {
  className: "title-line",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 21
  }
}, "Welcome to the virtual ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 46
  }
}), " assistant platform."), __jsx("span", {
  className: "line-block line-block-two",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 21
  }
})), __jsx("p", {
  className: "about-two__text large-paragraph",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 19
  }
}, "Simply are many variations of passages of orem Ipsum available, but the majority have suffered altertion in some form by injected humour or randomised words which don't look even slightly believab you are going to use a passage.", " "), __jsx("div", {
  className: "about-one__video",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 19
  }
}, __jsx("img", {
  src: "images\\resources\\video1-1.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 21
  }
}), __jsx("a", {
  href: "#",
  className: "about-one__video-link hvr-pulse",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 21
  }
}, __jsx("i", {
  className: "fa fa-play",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 23
  }
})))))))), __jsx("section", {
  className: "cta-four thm-black-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174,
    columnNumber: 9
  }
}, __jsx("img", {
  src: "images\\resources\\moc-1-3.png",
  className: "cta-four__moc",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 11
  }
}), __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "row justify-content-end",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "cta-four__content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "sec-title text-left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 19
  }
}, __jsx("span", {
  className: "tag-line ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 21
  }
}, "Best assistants"), __jsx("h2", {
  className: "title-line light",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 21
  }
}, "We only choose the ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 42
  }
}), " best one for you."), __jsx("span", {
  className: "line-block line-block-two",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 21
  }
})), __jsx("p", {
  className: "cta-four__text large-paragraph",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 19
  }
}, "There are many variations of passages of Ipsum available but the majority have suffered alteration in some form by injected hu randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything hidden in the middle of text."), __jsx("a", {
  href: "#",
  className: "thm-btn cta-four__btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 201,
    columnNumber: 19
  }
}, "Get Started now")))))), __jsx("section", {
  className: "why-choose-one thm-gray-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 215,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "sec-title text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217,
    columnNumber: 13
  }
}, __jsx("span", {
  className: "tag-line",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 218,
    columnNumber: 15
  }
}, "Why choose us"), __jsx("h2", {
  className: "title-line",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 219,
    columnNumber: 15
  }
}, "Why hire a inston virtual ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220,
    columnNumber: 43
  }
}), " assistant."), __jsx("span", {
  className: "line-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222,
    columnNumber: 15
  }
})), __jsx("div", {
  className: "row no-gutters",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 225,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "col-lg-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "why-choose-one__single",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 227,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "why-choose-one__icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228,
    columnNumber: 19
  }
}, __jsx("i", {
  className: "inston-icon-cap",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 21
  }
})), __jsx("h3", {
  className: "why-choose-one__title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 232,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 233,
    columnNumber: 21
  }
}, "Highly Educated Assistants")), __jsx("p", {
  className: "why-choose-one__text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 19
  }
}, "There are many variations of passages of lorem ipsum but the majority."))), __jsx("div", {
  className: "col-lg-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 245,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "why-choose-one__single",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 246,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "why-choose-one__icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 247,
    columnNumber: 19
  }
}, __jsx("i", {
  className: "inston-icon-user-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 248,
    columnNumber: 21
  }
})), __jsx("h3", {
  className: "why-choose-one__title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 251,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 252,
    columnNumber: 21
  }
}, "Already Trained. Ready Today")), __jsx("p", {
  className: "why-choose-one__text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 255,
    columnNumber: 19
  }
}, "There are many variations of passages of lorem ipsum but the majority."))), __jsx("div", {
  className: "col-lg-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 264,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "why-choose-one__single",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 265,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "why-choose-one__icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 266,
    columnNumber: 19
  }
}, __jsx("i", {
  className: "inston-icon-humanitarian",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 267,
    columnNumber: 21
  }
})), __jsx("h3", {
  className: "why-choose-one__title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 270,
    columnNumber: 19
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 271,
    columnNumber: 21
  }
}, "VA Bad fit? No Problem")), __jsx("p", {
  className: "why-choose-one__text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 274,
    columnNumber: 19
  }
}, "There are many variations of passages of lorem ipsum but the majority.")))))), __jsx("section", {
  className: "meeting-one mt-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 290,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 291,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 292,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 293,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "meeting-one__image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 294,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images\\resources\\meeting-1-1.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 295,
    columnNumber: 19
  }
}))), __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "meeting-one__content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 304,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "sec-title text-left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 305,
    columnNumber: 19
  }
}, __jsx("span", {
  className: "tag-line ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 306,
    columnNumber: 21
  }
}, "Get started"), __jsx("h2", {
  className: "title-line ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 307,
    columnNumber: 21
  }
}, "By having your VA set ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 308,
    columnNumber: 45
  }
}), " up meetings."), __jsx("span", {
  className: "line-block line-block-two",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 310,
    columnNumber: 21
  }
})), __jsx("p", {
  className: "meeting-one__block-text large-paragraph",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 313,
    columnNumber: 19
  }
}, "They can help remind you of that important call, deal with the phone company, track your packages and plan your weekend getaway."), __jsx("div", {
  className: "meeting-one__box-wrap",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 319,
    columnNumber: 19
  }
}, __jsx("div", {
  className: "meeting-one__box",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 320,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "meeting-one__bubble",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 321,
    columnNumber: 23
  }
}, "Hello. I\u2019m your personal assistant from Inston"), __jsx("img", {
  src: "images\\resources\\chat-1-1.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 325,
    columnNumber: 23
  }
}), __jsx("h3", {
  className: "meeting-one__title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 329,
    columnNumber: 23
  }
}, "Rhonda Mcdermond"), __jsx("p", {
  className: "meeting-one__text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 331,
    columnNumber: 23
  }
}, "Assistant")), __jsx("div", {
  className: "meeting-one__box",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 335,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "meeting-one__bubble",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 336,
    columnNumber: 23
  }
}, "Hello. Rhonda"), __jsx("img", {
  src: "images\\resources\\chat-1-2.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 338,
    columnNumber: 23
  }
}), __jsx("h3", {
  className: "meeting-one__title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 342,
    columnNumber: 23
  }
}, "Karleen Pedigo"), __jsx("p", {
  className: "meeting-one__text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 344,
    columnNumber: 23
  }
}, "Assistant")))))))), __jsx("section", {
  className: "cta-three thm-gray-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 361,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 362,
    columnNumber: 11
  }
}, __jsx("img", {
  src: "images\\resources\\moc-1-2.png",
  alt: "Awesome Image",
  className: "cta-three__moc",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 363,
    columnNumber: 13
  }
}), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 368,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "col-xl-6 col-lg-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 369,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "cta-three__content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 370,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "sec-title text-left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 371,
    columnNumber: 19
  }
}, __jsx("span", {
  className: "tag-line ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 372,
    columnNumber: 21
  }
}, "Chill out"), __jsx("h2", {
  className: "title-line ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 373,
    columnNumber: 21
  }
}, "Sit back, relax and ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 374,
    columnNumber: 43
  }
}), " enjoy coffee."), __jsx("span", {
  className: "line-block line-block-two",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376,
    columnNumber: 21
  }
})), __jsx("p", {
  className: "cta-three__text large-paragraph",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 379,
    columnNumber: 19
  }
}, "Your inbox is overflowing, your appointments are a mess, you have travel that needs booked, and your \"to do\" list is endless. VA's have all of the skills to handle both your work and personal needs, and can start relieving your stress immediately.")))))))));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/about.js */"./pages/about.js");


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

/***/ })

/******/ });
//# sourceMappingURL=about.js.map