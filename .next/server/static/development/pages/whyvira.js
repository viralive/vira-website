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

/***/ "./pages/whyvira.js":
/*!**************************!*\
  !*** ./pages/whyvira.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_PageLayouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/PageLayouts */ "./Layouts/PageLayouts/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/whyvira.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Whyvira = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
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
})), __jsx("section", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }
}, __jsx("h2", {
  className: "text-center text-dark mt-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 11
  }
}, "Calculate your value"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 11
  }
}), __jsx("div", {
  className: "row text-center text-primary pb-5",
  style: {
    lineHeight: 2.5
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "col-lg-4 col-sm-12 col-md-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 13
  }
}, __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 15
  }
}), __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 15
  }
}), __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 15
  }
}), __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 15
  }
})), __jsx("div", {
  className: "col-lg-4 col-sm-12 col-md-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 13
  }
}, __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 15
  }
}), __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 15
  }
}), __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 15
  }
}), __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 15
  }
})), __jsx("div", {
  className: "col-lg-4 col-sm-12 col-md-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 13
  }
}, __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 15
  }
}), __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 15
  }
}), __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 15
  }
}), __jsx("input", {
  type: "checkbox",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 15
  }
}), " ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 41
  }
}, "Email Management"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 15
  }
}))))), __jsx("section", {
  className: "features-tab-two thm-gray-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "sec-title text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 11
  }
}, __jsx("span", {
  className: "tag-line ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 13
  }
}, "Why choose us"), __jsx("h2", {
  className: "title-line",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 13
  }
}, "Why hire a inston virtual ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 41
  }
}), " assistant."), __jsx("span", {
  className: "line-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 13
  }
})), __jsx("ul", {
  className: "nav nav-tabs features-tab-two__list",
  role: "tablist",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 11
  }
}, __jsx("li", {
  className: "nav-item features-tab-two__list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "nav-link active features-tab-two__list-link",
  href: "#features-tab-1",
  role: "tab",
  "data-toggle": "tab",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 15
  }
}, __jsx("span", {
  className: "features-tab-two__list-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 17
  }
}, "Highly Educated Assistants"))), __jsx("li", {
  className: "nav-item features-tab-two__list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "nav-link features-tab-two__list-link",
  href: "#features-tab-2",
  role: "tab",
  "data-toggle": "tab",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 15
  }
}, __jsx("span", {
  className: "features-tab-two__list-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 17
  }
}, "Professionally Trained"))), __jsx("li", {
  className: "nav-item features-tab-two__list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "nav-link features-tab-two__list-link",
  href: "#features-tab-3",
  role: "tab",
  "data-toggle": "tab",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 15
  }
}, __jsx("span", {
  className: "features-tab-two__list-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 17
  }
}, "VA Bad fit? No problem")))), __jsx("div", {
  className: "tab-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 11
  }
}, __jsx("div", {
  role: "tabpanel",
  className: "tab-pane show active  animated fadeInUp",
  id: "features-tab-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "row no-gutters",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images\\resources\\tab-2-1.jpg",
  className: "features-tab-two__image",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "features-tab-two__content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 207,
    columnNumber: 19
  }
}, __jsx("p", {
  className: "features-tab-two__text large-paragraph",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 21
  }
}, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."), __jsx("ul", {
  className: "features-tab-two__content-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217,
    columnNumber: 21
  }
}, __jsx("li", {
  className: "features-tab-two__content-list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 218,
    columnNumber: 23
  }
}, __jsx("i", {
  className: "fa fa-check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 219,
    columnNumber: 25
  }
}), "Highly trained in administrative tasks"), __jsx("li", {
  className: "features-tab-two__content-list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 23
  }
}, __jsx("i", {
  className: "fa fa-check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 224,
    columnNumber: 25
  }
}), "Professionally managed and supported"), __jsx("li", {
  className: "features-tab-two__content-list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228,
    columnNumber: 23
  }
}, __jsx("i", {
  className: "fa fa-check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 25
  }
}), "Proficient in Google, and most popular productivity suites")))))), __jsx("div", {
  role: "tabpanel",
  className: "tab-pane show  animated fadeInUp",
  id: "features-tab-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 244,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "row no-gutters",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 250,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images\\resources\\tab-2-1.jpg",
  className: "features-tab-two__image",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 251,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 258,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "features-tab-two__content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 259,
    columnNumber: 19
  }
}, __jsx("p", {
  className: "features-tab-two__text large-paragraph",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 260,
    columnNumber: 21
  }
}, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."), __jsx("ul", {
  className: "features-tab-two__content-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 21
  }
}, __jsx("li", {
  className: "features-tab-two__content-list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 270,
    columnNumber: 23
  }
}, __jsx("i", {
  className: "fa fa-check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 271,
    columnNumber: 25
  }
}), "Highly trained in administrative tasks"), __jsx("li", {
  className: "features-tab-two__content-list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275,
    columnNumber: 23
  }
}, __jsx("i", {
  className: "fa fa-check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276,
    columnNumber: 25
  }
}), "Professionally managed and supported"), __jsx("li", {
  className: "features-tab-two__content-list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 280,
    columnNumber: 23
  }
}, __jsx("i", {
  className: "fa fa-check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 281,
    columnNumber: 25
  }
}), "Proficient in Google, and most popular productivity suites")))))), __jsx("div", {
  role: "tabpanel",
  className: "tab-pane show  animated fadeInUp",
  id: "features-tab-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 296,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "row no-gutters",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 301,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 302,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images\\resources\\tab-2-1.jpg",
  className: "features-tab-two__image",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 310,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "features-tab-two__content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 311,
    columnNumber: 19
  }
}, __jsx("p", {
  className: "features-tab-two__text large-paragraph",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 312,
    columnNumber: 21
  }
}, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."), __jsx("ul", {
  className: "features-tab-two__content-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 321,
    columnNumber: 21
  }
}, __jsx("li", {
  className: "features-tab-two__content-list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 322,
    columnNumber: 23
  }
}, __jsx("i", {
  className: "fa fa-check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 323,
    columnNumber: 25
  }
}), "Highly trained in administrative tasks"), __jsx("li", {
  className: "features-tab-two__content-list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 327,
    columnNumber: 23
  }
}, __jsx("i", {
  className: "fa fa-check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 328,
    columnNumber: 25
  }
}), "Professionally managed and supported"), __jsx("li", {
  className: "features-tab-two__content-list-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 332,
    columnNumber: 23
  }
}, __jsx("i", {
  className: "fa fa-check",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 333,
    columnNumber: 25
  }
}), "Proficient in Google, and most popular productivity suites"))))))))), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 354,
    columnNumber: 7
  }
}, __jsx("section", {
  className: "comparison-table why-choose-page",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 355,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 356,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "sec-title text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 357,
    columnNumber: 13
  }
}, __jsx("span", {
  className: "tag-line ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 358,
    columnNumber: 15
  }
}, "Comparison"), __jsx("h2", {
  className: "title-line",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 359,
    columnNumber: 15
  }
}, "Compare inston to the ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 360,
    columnNumber: 39
  }
}), " alternatives."), __jsx("span", {
  className: "line-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 362,
    columnNumber: 15
  }
})), __jsx("div", {
  className: "table-responsive",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 365,
    columnNumber: 13
  }
}, __jsx("table", {
  className: "comparison-table__table",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 366,
    columnNumber: 15
  }
}, __jsx("thead", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 367,
    columnNumber: 17
  }
}, __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 368,
    columnNumber: 19
  }
}, __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 369,
    columnNumber: 21
  }
}, "Concern"), __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 370,
    columnNumber: 21
  }
}, "Inston"), __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 371,
    columnNumber: 21
  }
}, "Hire Full-Time"), __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 372,
    columnNumber: 21
  }
}, "Outsourced Tasks"))), __jsx("tbody", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 375,
    columnNumber: 17
  }
}, __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376,
    columnNumber: 19
  }
}, __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 377,
    columnNumber: 21
  }
}, "Cost"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 378,
    columnNumber: 21
  }
}, "$398"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 379,
    columnNumber: 21
  }
}, "$4,000+/mo"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 380,
    columnNumber: 21
  }
}, "$200 - $1,000")), __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 382,
    columnNumber: 19
  }
}, __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 383,
    columnNumber: 21
  }
}, "Time to Start"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 384,
    columnNumber: 21
  }
}, "Immediate"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 385,
    columnNumber: 21
  }
}, "4 - 8 weeks"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 386,
    columnNumber: 21
  }
}, "1 Week")), __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 388,
    columnNumber: 19
  }
}, __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 389,
    columnNumber: 21
  }
}, "Replacement Issue"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 390,
    columnNumber: 21
  }
}, "Easy: one email"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 391,
    columnNumber: 21
  }
}, "Difficult: New Hire"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 392,
    columnNumber: 21
  }
}, "Difficult: New Hire")), __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 394,
    columnNumber: 19
  }
}, __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 395,
    columnNumber: 21
  }
}, "Training"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 396,
    columnNumber: 21
  }
}, "Professionally done"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 397,
    columnNumber: 21
  }
}, "2 - 4 weeks"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 398,
    columnNumber: 21
  }
}, "Spotty")), __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 400,
    columnNumber: 19
  }
}, __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 401,
    columnNumber: 21
  }
}, "Expertise"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 402,
    columnNumber: 21
  }
}, "Diverse Skillsets"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 403,
    columnNumber: 21
  }
}, "Specific to 1 Person"), __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 404,
    columnNumber: 21
  }
}, "Specific to Contractor"))))))), __jsx("section", {
  className: "features-two thm-black-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 414,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 415,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 416,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "col-xl-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 417,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "features-two__content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 418,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "sec-title text-left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 419,
    columnNumber: 19
  }
}, __jsx("span", {
  className: "tag-line ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 420,
    columnNumber: 21
  }
}, "Awesome people"), __jsx("h2", {
  className: "title-line light",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 421,
    columnNumber: 21
  }
}, "Did we mention our ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 422,
    columnNumber: 42
  }
}), " VAs are also pretty ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 422,
    columnNumber: 69
  }
}), " cool people?."), __jsx("span", {
  className: "line-block line-block-two",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 425,
    columnNumber: 21
  }
})), __jsx("p", {
  className: "features-two__text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 428,
    columnNumber: 19
  }
}, "We hire the type of people that we'd want to be around every day: smart, outgoing and ambitious. We want to make sure we connect you to a talented VA that does top quality work but also to someone with an awesome personality that you'll get along with. You might be surprised that some of our VAs are entrepreneurs themselves; from owning a cupcake business to writing a fashion blog, you're working with some really talented individuals."))), __jsx("div", {
  className: "col-xl-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 443,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "features-two__box",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 444,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "row no-gutters",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 445,
    columnNumber: 19
  }
}, __jsx("div", {
  className: "col-lg-6 d-flex ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 446,
    columnNumber: 21
  }
}, __jsx("h3", {
  className: "features-two__box-title thm-base-bg align-items-center justify-content-center d-flex text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 447,
    columnNumber: 23
  }
}, "Smart and highly ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 448,
    columnNumber: 42
  }
}), " skilled people")), __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 453,
    columnNumber: 21
  }
}, __jsx("img", {
  src: "images\\resources\\people-1-1.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 454,
    columnNumber: 23
  }
}))), __jsx("div", {
  className: "row flex-row-reverse no-gutters",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 462,
    columnNumber: 19
  }
}, __jsx("div", {
  className: "col-lg-6 d-flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 463,
    columnNumber: 21
  }
}, __jsx("h3", {
  className: "features-two__box-title thm-base-bg align-items-center justify-content-center d-flex text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 464,
    columnNumber: 23
  }
}, "Ambitious, looking to ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 465,
    columnNumber: 47
  }
}), "anticipate needs")), __jsx("div", {
  className: "col-lg-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 471,
    columnNumber: 21
  }
}, __jsx("img", {
  src: "images\\resources\\people-1-2.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 472,
    columnNumber: 23
  }
})))))))), __jsx("section", {
  className: "map-style-one",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 490,
    columnNumber: 9
  }
}, __jsx("img", {
  src: "images\\resources\\map-shape-1-1.png",
  alt: "Awesome Image",
  className: "map-shape-1-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 491,
    columnNumber: 11
  }
}), __jsx("img", {
  src: "images\\resources\\map-shape-1-2.png",
  alt: "Awesome Image",
  className: "map-shape-1-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 496,
    columnNumber: 11
  }
}), __jsx("img", {
  src: "images\\resources\\map-shape-1-3.png",
  alt: "Awesome Image",
  className: "map-shape-1-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 501,
    columnNumber: 11
  }
}), __jsx("img", {
  src: "images\\resources\\map-shape-1-4.png",
  alt: "Awesome Image",
  className: "map-shape-1-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 506,
    columnNumber: 11
  }
}), __jsx("img", {
  src: "images\\resources\\map-shape-1-5.png",
  alt: "Awesome Image",
  className: "map-shape-1-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 511,
    columnNumber: 11
  }
}), __jsx("div", {
  className: "container text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 516,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "sec-title text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 517,
    columnNumber: 13
  }
}, __jsx("span", {
  className: "tag-line ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 518,
    columnNumber: 15
  }
}, "Superhumans"), __jsx("h2", {
  className: "title-line ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 519,
    columnNumber: 15
  }
}, "We only hire the best of the best ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 520,
    columnNumber: 51
  }
}), " assistants on the planet."), __jsx("span", {
  className: "line-block ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 523,
    columnNumber: 15
  }
})), __jsx("div", {
  className: "map-blocks text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 526,
    columnNumber: 13
  }
}, __jsx("img", {
  src: "images\\resources\\map-1-1.png",
  className: "map-image",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 527,
    columnNumber: 15
  }
}), __jsx("div", {
  className: "map-person-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 532,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images\\resources\\map-p-1-1.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 533,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "map-person-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 536,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images\\resources\\map-p-1-2.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 537,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "map-person-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 540,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images\\resources\\map-p-1-3.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 541,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "map-person-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 544,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images\\resources\\map-p-1-4.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 545,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "map-person-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 548,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images\\resources\\map-p-1-5.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 549,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "map-person-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 552,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images\\resources\\map-p-1-6.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 553,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "map-person-7",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 556,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images\\resources\\map-p-1-7.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 557,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "map-person-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 560,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images\\resources\\map-p-1-8.jpg",
  alt: "Awesome Image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 561,
    columnNumber: 17
  }
}))), __jsx("div", {
  className: "button-block text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 566,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "thm-btn",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 567,
    columnNumber: 15
  }
}, "Request a Consultation"), __jsx("span", {
  className: "btn-tagline",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 570,
    columnNumber: 15
  }
}, "Looking for expert VA ", __jsx("i", {
  className: "inston-icon-share",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 571,
    columnNumber: 39
  }
}))))))));

/* harmony default export */ __webpack_exports__["default"] = (Whyvira);

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/whyvira.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/whyvira.js */"./pages/whyvira.js");


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
//# sourceMappingURL=whyvira.js.map