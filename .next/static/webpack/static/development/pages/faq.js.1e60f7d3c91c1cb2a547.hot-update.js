webpackHotUpdate("static/development/pages/faq.js",{

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/faq.js":
/*!**********************!*\
  !*** ./pages/faq.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-accessible-accordion */ "./node_modules/react-accessible-accordion/dist/es/index.js");
/* harmony import */ var _Layouts_HomeLayouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layouts/HomeLayouts */ "./Layouts/HomeLayouts/index.js");
var _this = undefined,
    _jsxFileName = "/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/faq.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Faq = function Faq() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx(_Layouts_HomeLayouts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-4122164577" + " " + "inner-banner ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4122164577" + " " + "container flex-column-reverse d-flex justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-4122164577" + " " + "inner-banner__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "FAQ"), __jsx("ul", {
    className: "jsx-4122164577" + " " + "thm-breadcrumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-4122164577" + " " + "thm-breadcrumb__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4122164577" + " " + "thm-breadcrumb__link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Home")), __jsx("li", {
    className: "jsx-4122164577" + " " + "thm-breadcrumb__item current",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4122164577" + " " + "thm-breadcrumb__link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, "FAQ"))))), __jsx("section", {
    className: "jsx-4122164577",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4122164577" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4122164577" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-4122164577" + " " + "col-md-6 col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    allowZeroExpanded: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "What harsh truths do you prefer to ignore?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "jsx-4122164577",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "Is free will real or just an illusion?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "jsx-4122164577",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."))))), __jsx("div", {
    className: "jsx-4122164577" + " " + "col-md-6 col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    allowZeroExpanded: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, "What harsh truths do you prefer to ignore?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "jsx-4122164577",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "Is free will real or just an illusion?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "jsx-4122164577",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4122164577",
    __self: _this
  }, ".accordion{border:1px solid rgba(0,0,0,0.1);border-radius:2px;}.accordion__item+.accordion__item{border-top:1px solid rgba(0,0,0,0.1);}.accordion__button{background-color:#f4f4f4;color:#444;cursor:pointer;padding:18px;width:100%;text-align:left;border:none;}.accordion__button:hover{background-color:#ddd;}.accordion__button:before{display:inline-block;content:\"\";height:10px;width:10px;margin-right:12px;border-bottom:2px solid currentColor;border-right:2px solid currentColor;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.accordion__button[aria-expanded=\"true\"]::before,.accordion__button[aria-selected=\"true\"]::before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.accordion__panel{padding:20px;-webkit-animation:fadein 0.35s ease-in;animation:fadein 0.35s ease-in;}@keyframes fadein 0%{opacity:0;}@keyframes fadein 100%{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9yaXp3YW4vRUUxMDdCMDYxMDdBRDRENS9SSVRFU0hfUFJPSkVDVFMvdmlydHVhbGFzc2lzdGFudC9wYWdlcy9mYXEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhPLEFBUStDLEFBS0ksQUFJZixBQVVILEFBSUQsQUFZRyxBQUlYLEFBVUQsQUFJQSxVQUhaLEFBSUEsR0FkK0IsUUFoQnBCLENBSmIsR0FWYSxPQWVDLENBeEJNLEdBVUgsQ0FMakIsT0FvQmEsT0F4QmIsQUFVZSxJQWVLLFNBZFAsU0FlMEIsRUFkckIsUUEyQmxCLENBTEEsT0FyQmMsWUFDZCxPQWFzQyxvQ0FDWCx1RkFDM0IiLCJmaWxlIjoiL21lZGlhL3Jpendhbi9FRTEwN0IwNjEwN0FENEQ1L1JJVEVTSF9QUk9KRUNUUy92aXJ0dWFsYXNzaXN0YW50L3BhZ2VzL2ZhcS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25JdGVtSGVhZGluZyxcbiAgQWNjb3JkaW9uSXRlbUJ1dHRvbixcbiAgQWNjb3JkaW9uSXRlbVBhbmVsLFxufSBmcm9tIFwicmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb25cIjtcbmltcG9ydCBIb21lTGF5b3V0cyBmcm9tIFwiLi4vTGF5b3V0cy9Ib21lTGF5b3V0c1wiO1xuXG5jb25zdCBGYXEgPSAoKSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8SG9tZUxheW91dHM+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbm5lci1iYW5uZXIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgtY29sdW1uLXJldmVyc2UgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImlubmVyLWJhbm5lcl9fdGl0bGVcIj5GQVE8L2gyPlxuICAgICAgICAgIHsvKiAvLmlubmVyLWJhbm5lcl9fdGl0bGUgKi99XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRobS1icmVhZGNydW1iXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGhtLWJyZWFkY3J1bWJfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0aG0tYnJlYWRjcnVtYl9fbGlua1wiPlxuICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHsvKiAvLnRobS1icmVhZGNydW1iX19pdGVtICovfVxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRobS1icmVhZGNydW1iX19pdGVtIGN1cnJlbnRcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0aG0tYnJlYWRjcnVtYl9fbGlua1wiPlxuICAgICAgICAgICAgICAgIEZBUVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgey8qIC8udGhtLWJyZWFkY3J1bWJfX2l0ZW0gKi99XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7LyogLy50aG0tYnJlYWRjcnVtYiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiAvLmNvbnRhaW5lciAqL31cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbiBhbGxvd1plcm9FeHBhbmRlZD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIFdoYXQgaGFyc2ggdHJ1dGhzIGRvIHlvdSBwcmVmZXIgdG8gaWdub3JlP1xuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgRXhlcmNpdGF0aW9uIGluIGZ1Z2lhdCBlc3QgdXQgYWQgZWEgY3VwaWRhdGF0IHV0IGluXG4gICAgICAgICAgICAgICAgICAgICAgY3VwaWRhdGF0IG9jY2FlY2F0IHV0IG9jY2FlY2F0IGNvbnNlcXVhdCBlc3QgbWluaW0gbWluaW1cbiAgICAgICAgICAgICAgICAgICAgICBlc3NlIHRlbXBvciBsYWJvcnVtIGNvbnNlcXVhdCBlc3NlIGFkaXBpc2ljaW5nIGV1XG4gICAgICAgICAgICAgICAgICAgICAgcmVwcmVoZW5kZXJpdCBlbmltLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIElzIGZyZWUgd2lsbCByZWFsIG9yIGp1c3QgYW4gaWxsdXNpb24/XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICBJbiBhZCB2ZWxpdCBpbiBleCBub3N0cnVkIGRvbG9yZSBjdXBpZGF0YXQgY29uc2VjdGV0dXIgZWFcbiAgICAgICAgICAgICAgICAgICAgICBpbiB1dCBub3N0cnVkIHZlbGl0IGluIGlydXJlIGNpbGx1bSB0ZW1wb3IgbGFib3JpcyBzZWRcbiAgICAgICAgICAgICAgICAgICAgICBhZGlwaXNpY2luZyBldSBlc3NlIGR1aXMgbnVsbGEgbm9uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbiBhbGxvd1plcm9FeHBhbmRlZD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIFdoYXQgaGFyc2ggdHJ1dGhzIGRvIHlvdSBwcmVmZXIgdG8gaWdub3JlP1xuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgRXhlcmNpdGF0aW9uIGluIGZ1Z2lhdCBlc3QgdXQgYWQgZWEgY3VwaWRhdGF0IHV0IGluXG4gICAgICAgICAgICAgICAgICAgICAgY3VwaWRhdGF0IG9jY2FlY2F0IHV0IG9jY2FlY2F0IGNvbnNlcXVhdCBlc3QgbWluaW0gbWluaW1cbiAgICAgICAgICAgICAgICAgICAgICBlc3NlIHRlbXBvciBsYWJvcnVtIGNvbnNlcXVhdCBlc3NlIGFkaXBpc2ljaW5nIGV1XG4gICAgICAgICAgICAgICAgICAgICAgcmVwcmVoZW5kZXJpdCBlbmltLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIElzIGZyZWUgd2lsbCByZWFsIG9yIGp1c3QgYW4gaWxsdXNpb24/XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICBJbiBhZCB2ZWxpdCBpbiBleCBub3N0cnVkIGRvbG9yZSBjdXBpZGF0YXQgY29uc2VjdGV0dXIgZWFcbiAgICAgICAgICAgICAgICAgICAgICBpbiB1dCBub3N0cnVkIHZlbGl0IGluIGlydXJlIGNpbGx1bSB0ZW1wb3IgbGFib3JpcyBzZWRcbiAgICAgICAgICAgICAgICAgICAgICBhZGlwaXNpY2luZyBldSBlc3NlIGR1aXMgbnVsbGEgbm9uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvSG9tZUxheW91dHM+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgIC8qKlxuICAgICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICogRGVtbyBzdHlsZXNcbiAgICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAqKi9cbiAgICAgICAgLmFjY29yZGlvbiB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvcmRpb25fX2l0ZW0gKyAuYWNjb3JkaW9uX19pdGVtIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29yZGlvbl9fYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29yZGlvbl9fYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29yZGlvbl9fYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgY3VycmVudENvbG9yO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29yZGlvbl9fYnV0dG9uW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOjpiZWZvcmUsXG4gICAgICAgIC5hY2NvcmRpb25fX2J1dHRvblthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXTo6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWNjb3JkaW9uX19wYW5lbCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiAwLjM1cyBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAgICAgLyogLS0tLS0tLS0tLS0tLS0tLSBBbmltYXRpb24gcGFydCAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAgICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGYXE7XG4iXX0= */\n/*@ sourceURL=/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/faq.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ })

})
//# sourceMappingURL=faq.js.1e60f7d3c91c1cb2a547.hot-update.js.map