webpackHotUpdate("static/development/pages/whatwedo.js",{

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

/***/ "./pages/whatwedo.js":
/*!***************************!*\
  !*** ./pages/whatwedo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layouts_PageLayouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layouts/PageLayouts */ "./Layouts/PageLayouts/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/whatwedo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Faq = function Faq() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(_Layouts_PageLayouts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "ie=edge",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx("title", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Inston || Home Two || Responsive HTML 5 Template"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "images\\favicon\\apple-icon-57x57.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "images\\favicon\\apple-icon-60x60.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "images\\favicon\\apple-icon-72x72.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "images\\favicon\\apple-icon-76x76.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "images\\favicon\\apple-icon-114x114.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "images\\favicon\\apple-icon-120x120.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "images\\favicon\\apple-icon-144x144.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "images\\favicon\\apple-icon-152x152.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "images\\favicon\\apple-icon-180x180.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "images\\favicon\\android-icon-192x192.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "images\\favicon\\favicon-32x32.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "images\\favicon\\favicon-96x96.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "images\\favicon\\favicon-16x16.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "images\\favicon\\manifest.json",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "msapplication-TileImage",
    content: "images/favicon/ms-icon-144x144.png",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/css/style.css",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "css/responsive.css",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }), __jsx("script", {
    src: "js/jquery.js",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }), __jsx("script", {
    src: "js/bootstrap.bundle.min.js",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }), __jsx("script", {
    src: "js/swiper.min.js",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), __jsx("script", {
    src: "js/owl.carousel.min.js",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }), __jsx("script", {
    src: "js/theme.js",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }), __jsx("script", {
    defer: true,
    src: "https://use.fontawesome.com/releases/v5.3.1/js/all.js",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  })), __jsx("section", {
    className: "jsx-94794336" + " " + "service-two pricing-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "sec-title text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-94794336" + " " + "tag-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, "What we do"), __jsx("h2", {
    className: "jsx-94794336" + " " + "title-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, "What can inston help ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 38
    }
  }), " me with?."), __jsx("span", {
    className: "jsx-94794336" + " " + "line-block ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-94794336" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-user-2 service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }), __jsx("i", {
    "class": "fa fa-user-circle text-warning iconsize",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, "Personal ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 32
    }
  }), " Assistant")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-calculator-symbols service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, "Expensing and ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 37
    }
  }), " Invoicing")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-appointment service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, "Scheduling and ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 38
    }
  }), " Planning")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-like service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, "Marketing and ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  }), " Social Media")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-loupe service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, "Research and ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 36
    }
  }), " Reports")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-envelope service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, "Email ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 29
    }
  }), " Assistant")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-aeroplane service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }, "Travel ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 30
    }
  }), " Planning")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-price service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, "Compare Prices ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 38
    }
  }), " and Products")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-home service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }, "Real Estate ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 35
    }
  }), " Assistant")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-factory service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }, "Industries ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 34
    }
  }), " Services")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-team service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }, "Small Business ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 38
    }
  }), " Support")))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "service-two__single hvr-bounce-to-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-94794336" + " " + "inston-icon-working service-two__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "service-two__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 21
    }
  }, "Administrative & ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 44
    }
  }), " Executive Assistant"))))))), __jsx("section", {
    className: "jsx-94794336" + " " + "meeting-one",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "meeting-one__image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images\\resources\\meeting-1-1.jpg",
    alt: "Awesome Image",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "meeting-one__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "sec-title text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-94794336" + " " + "tag-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 21
    }
  }, "Get started"), __jsx("h2", {
    className: "jsx-94794336" + " " + "title-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 21
    }
  }, "By having your VA set ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 45
    }
  }), " up meetings."), __jsx("span", {
    className: "jsx-94794336" + " " + "line-block line-block-two",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "jsx-94794336" + " " + "meeting-one__block-text large-paragraph",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 19
    }
  }, "They can help remind you of that important call, deal with the phone company, track your packages and plan your weekend getaway."), __jsx("div", {
    className: "jsx-94794336" + " " + "meeting-one__box-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "meeting-one__box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "meeting-one__bubble",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 23
    }
  }, "Hello. I\u2019m your personal assistant from Inston"), __jsx("img", {
    src: "images\\resources\\chat-1-1.jpg",
    alt: "Awesome Image",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 23
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "meeting-one__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 23
    }
  }, "Rhonda Mcdermond"), __jsx("p", {
    className: "jsx-94794336" + " " + "meeting-one__text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 23
    }
  }, "Assistant")), __jsx("div", {
    className: "jsx-94794336" + " " + "meeting-one__box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "meeting-one__bubble",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 23
    }
  }, "Hello. Rhonda"), __jsx("img", {
    src: "images\\resources\\chat-1-2.jpg",
    alt: "Awesome Image",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 23
    }
  }), __jsx("h3", {
    className: "jsx-94794336" + " " + "meeting-one__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 23
    }
  }, "Karleen Pedigo"), __jsx("p", {
    className: "jsx-94794336" + " " + "meeting-one__text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 23
    }
  }, "Assistant")))))))), __jsx("section", {
    className: "jsx-94794336" + " " + "cta-five",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "sec-title text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-94794336" + " " + "tag-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 15
    }
  }, "Our capabilities"), __jsx("h2", {
    className: "jsx-94794336" + " " + "title-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 15
    }
  }, "Few things that inston ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 40
    }
  }), " also do?."), __jsx("span", {
    className: "jsx-94794336" + " " + "line-block ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-94794336" + " " + "row masonary-layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 masonary-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images\\what-we-do\\what-we-do-1-1.jpg",
    alt: "Awesome Image",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-3 col-md-6 masonary-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images\\what-we-do\\what-we-do-1-2.jpg",
    alt: "Awesome Image",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-6 masonary-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      backgroundImage: "url(images/backgrounds/what-we-do-bg-1-2.jpg)"
    },
    className: "jsx-94794336" + " " + "cta-five__one cta-five__single text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-94794336" + " " + "cta-five__tag-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 19
    }
  }, "We can help"), __jsx("h3", {
    className: "jsx-94794336" + " " + "cta-five__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }, "Work Related ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 34
    }
  }), " Tasking"), __jsx("p", {
    className: "jsx-94794336" + " " + "cta-five__text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 19
    }
  }, " ", "We can help with your work ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 48
    }
  }), " related tasks, letting you", " ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 21
    }
  }), " focus on what\u2019s most ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 49
    }
  }), " important."), __jsx("a", {
    href: "#",
    className: "jsx-94794336" + " " + "cta-five__link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 19
    }
  }, "Let\u2019s Get Started"))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-6 masonary-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      backgroundImage: "url(images/backgrounds/what-we-do-bg-1-1.jpg)"
    },
    className: "jsx-94794336" + " " + "cta-five__two cta-five__single",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "jsx-94794336" + " " + "cta-five__title light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 19
    }
  }, "Personal Life ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 35
    }
  }), " Tasking"), __jsx("a", {
    href: "#",
    className: "jsx-94794336" + " " + "cta-five__link light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 19
    }
  }, "Let\u2019s Get Started")))))), __jsx("section", {
    className: "jsx-94794336" + " " + "todo-list-style-one",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "image-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images\\resources\\moc-1-1.png",
    alt: "Awesome Image",
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "jsx-94794336" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "content-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-94794336" + " " + "sec-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-94794336" + " " + "tag-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 21
    }
  }, "To do list"), __jsx("h2", {
    className: "jsx-94794336" + " " + "title-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 21
    }
  }, "Give us your to-do list ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 47
    }
  }), " and get on with your ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 75
    }
  }), " ", "love-to-do list."), __jsx("span", {
    className: "jsx-94794336" + " " + "line-block-two ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 19
    }
  }, "Get started by having your VA set up meetings, manage your busy schedule and streamline all the information that pours into your inbox. They can help remind you of that important call, deal with the phone company, track your packages."), __jsx("p", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 19
    }
  }, "With your VA handling all the small stuff, you can start focusing ", __jsx("br", {
    className: "jsx-94794336",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 30
    }
  }), " on what's truly important, in work and life."), __jsx("a", {
    href: "#",
    className: "jsx-94794336" + " " + "more-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 19
    }
  }, "Let\u2019s Get Started")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "94794336",
    __self: _this
  }, ".iconsize{width:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9yaXp3YW4vRUUxMDdCMDYxMDdBRDRENS9SSVRFU0hfUFJPSkVDVFMvdmlydHVhbGFzc2lzdGFudC9wYWdlcy93aGF0d2Vkby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0ZE8sQUFHdUIsWUFDZCIsImZpbGUiOiIvbWVkaWEvcml6d2FuL0VFMTA3QjA2MTA3QUQ0RDUvUklURVNIX1BST0pFQ1RTL3ZpcnR1YWxhc3Npc3RhbnQvcGFnZXMvd2hhdHdlZG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnZUxheW91dHMgZnJvbSBcIi4uL0xheW91dHMvUGFnZUxheW91dHNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgRmFxID0gKCkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPFBhZ2VMYXlvdXRzPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XG4gICAgICAgICAgPHRpdGxlPkluc3RvbiB8fCBIb21lIFR3byB8fCBSZXNwb25zaXZlIEhUTUwgNSBUZW1wbGF0ZTwvdGl0bGU+XG4gICAgICAgICAgey8qIDwhLS0gRmF2aWNvbiBJY29ucyAtLT4gKi99XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgICAgc2l6ZXM9XCI1N3g1N1wiXG4gICAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxhcHBsZS1pY29uLTU3eDU3LnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjYweDYwXCJcbiAgICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGFwcGxlLWljb24tNjB4NjAucG5nXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICAgIHNpemVzPVwiNzJ4NzJcIlxuICAgICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi03Mng3Mi5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgICAgc2l6ZXM9XCI3Nng3NlwiXG4gICAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxhcHBsZS1pY29uLTc2eDc2LnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjExNHgxMTRcIlxuICAgICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjEyMHgxMjBcIlxuICAgICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi0xMjB4MTIwLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjE0NHgxNDRcIlxuICAgICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi0xNDR4MTQ0LnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjE1MngxNTJcIlxuICAgICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi0xODB4MTgwLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgIHNpemVzPVwiMTkyeDE5MlwiXG4gICAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxhbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGZhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgc2l6ZXM9XCI5Nng5NlwiXG4gICAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxmYXZpY29uLTk2eDk2LnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgIHNpemVzPVwiMTZ4MTZcIlxuICAgICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcZmF2aWNvbi0xNngxNi5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxtYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW1hZ2VzL2Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvY3NzL3N0eWxlLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJjc3MvcmVzcG9uc2l2ZS5jc3NcIiAvPlxuXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJqcy9qcXVlcnkuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImpzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJqcy9zd2lwZXIubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJqcy9vd2wuY2Fyb3VzZWwubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJqcy90aGVtZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRlZmVyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMy4xL2pzL2FsbC5qc1wiXG4gICAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VydmljZS10d28gcHJpY2luZy1wYWdlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjLXRpdGxlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZy1saW5lIFwiPldoYXQgd2UgZG88L3NwYW4+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZS1saW5lIFwiPlxuICAgICAgICAgICAgICAgIFdoYXQgY2FuIGluc3RvbiBoZWxwIDxiciAvPiBtZSB3aXRoPy5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZS1ibG9jayBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogLy5zZWMtdGl0bGUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS10d29fX3NpbmdsZSBodnItYm91bmNlLXRvLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW5zdG9uLWljb24tdXNlci0yIHNlcnZpY2UtdHdvX19pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdXNlci1jaXJjbGUgdGV4dC13YXJuaW5nIGljb25zaXplXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlcnZpY2UtdHdvX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIDxiciAvPiBBc3Npc3RhbnRcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIHsvKiAvLnNlcnZpY2UtdHdvX190aXRsZSAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5zZXJ2aWNlLXR3b19fc2luZ2xlICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXR3b19fc2luZ2xlIGh2ci1ib3VuY2UtdG8tdG9wXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpbnN0b24taWNvbi1jYWxjdWxhdG9yLXN5bWJvbHMgc2VydmljZS10d29fX2ljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlcnZpY2UtdHdvX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIEV4cGVuc2luZyBhbmQgPGJyIC8+IEludm9pY2luZ1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgey8qIC8uc2VydmljZS10d29fX3RpdGxlICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiAvLnNlcnZpY2UtdHdvX19zaW5nbGUgKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5jb2wtbGctMyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtdHdvX19zaW5nbGUgaHZyLWJvdW5jZS10by10b3BcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImluc3Rvbi1pY29uLWFwcG9pbnRtZW50IHNlcnZpY2UtdHdvX19pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZXJ2aWNlLXR3b19fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICBTY2hlZHVsaW5nIGFuZCA8YnIgLz4gUGxhbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIHsvKiAvLnNlcnZpY2UtdHdvX190aXRsZSAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5zZXJ2aWNlLXR3b19fc2luZ2xlICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXR3b19fc2luZ2xlIGh2ci1ib3VuY2UtdG8tdG9wXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpbnN0b24taWNvbi1saWtlIHNlcnZpY2UtdHdvX19pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZXJ2aWNlLXR3b19fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICBNYXJrZXRpbmcgYW5kIDxiciAvPiBTb2NpYWwgTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIHsvKiAvLnNlcnZpY2UtdHdvX190aXRsZSAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5zZXJ2aWNlLXR3b19fc2luZ2xlICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXR3b19fc2luZ2xlIGh2ci1ib3VuY2UtdG8tdG9wXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpbnN0b24taWNvbi1sb3VwZSBzZXJ2aWNlLXR3b19faWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VydmljZS10d29fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUmVzZWFyY2ggYW5kIDxiciAvPiBSZXBvcnRzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICB7LyogLy5zZXJ2aWNlLXR3b19fdGl0bGUgKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIC8uc2VydmljZS10d29fX3NpbmdsZSAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiAvLmNvbC1sZy0zICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS10d29fX3NpbmdsZSBodnItYm91bmNlLXRvLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW5zdG9uLWljb24tZW52ZWxvcGUgc2VydmljZS10d29fX2ljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlcnZpY2UtdHdvX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIDxiciAvPiBBc3Npc3RhbnRcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIHsvKiAvLnNlcnZpY2UtdHdvX190aXRsZSAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5zZXJ2aWNlLXR3b19fc2luZ2xlICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXR3b19fc2luZ2xlIGh2ci1ib3VuY2UtdG8tdG9wXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpbnN0b24taWNvbi1hZXJvcGxhbmUgc2VydmljZS10d29fX2ljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlcnZpY2UtdHdvX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFRyYXZlbCA8YnIgLz4gUGxhbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIHsvKiAvLnNlcnZpY2UtdHdvX190aXRsZSAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5zZXJ2aWNlLXR3b19fc2luZ2xlICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXR3b19fc2luZ2xlIGh2ci1ib3VuY2UtdG8tdG9wXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpbnN0b24taWNvbi1wcmljZSBzZXJ2aWNlLXR3b19faWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VydmljZS10d29fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ29tcGFyZSBQcmljZXMgPGJyIC8+IGFuZCBQcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgey8qIC8uc2VydmljZS10d29fX3RpdGxlICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiAvLnNlcnZpY2UtdHdvX19zaW5nbGUgKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5jb2wtbGctMyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtdHdvX19zaW5nbGUgaHZyLWJvdW5jZS10by10b3BcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImluc3Rvbi1pY29uLWhvbWUgc2VydmljZS10d29fX2ljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlcnZpY2UtdHdvX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFJlYWwgRXN0YXRlIDxiciAvPiBBc3Npc3RhbnRcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIHsvKiAvLnNlcnZpY2UtdHdvX190aXRsZSAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5zZXJ2aWNlLXR3b19fc2luZ2xlICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXR3b19fc2luZ2xlIGh2ci1ib3VuY2UtdG8tdG9wXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpbnN0b24taWNvbi1mYWN0b3J5IHNlcnZpY2UtdHdvX19pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZXJ2aWNlLXR3b19fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICBJbmR1c3RyaWVzIDxiciAvPiBTZXJ2aWNlc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgey8qIC8uc2VydmljZS10d29fX3RpdGxlICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiAvLnNlcnZpY2UtdHdvX19zaW5nbGUgKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5jb2wtbGctMyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtdHdvX19zaW5nbGUgaHZyLWJvdW5jZS10by10b3BcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImluc3Rvbi1pY29uLXRlYW0gc2VydmljZS10d29fX2ljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlcnZpY2UtdHdvX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFNtYWxsIEJ1c2luZXNzIDxiciAvPiBTdXBwb3J0XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICB7LyogLy5zZXJ2aWNlLXR3b19fdGl0bGUgKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIC8uc2VydmljZS10d29fX3NpbmdsZSAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiAvLmNvbC1sZy0zICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS10d29fX3NpbmdsZSBodnItYm91bmNlLXRvLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW5zdG9uLWljb24td29ya2luZyBzZXJ2aWNlLXR3b19faWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VydmljZS10d29fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQWRtaW5pc3RyYXRpdmUgJmFtcDsgPGJyIC8+IEV4ZWN1dGl2ZSBBc3Npc3RhbnRcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIHsvKiAvLnNlcnZpY2UtdHdvX190aXRsZSAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5zZXJ2aWNlLXR3b19fc2luZ2xlICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTMgKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiAvLnJvdyAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogLy5jb250YWluZXIgKi99XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgey8qIC8uc2VydmljZS10d28gKi99XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWVldGluZy1vbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVldGluZy1vbmVfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlc1xccmVzb3VyY2VzXFxtZWV0aW5nLTEtMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBd2Vzb21lIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIC8ubWVldGluZy1vbmVfX2ltYWdlICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTYgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZXRpbmctb25lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy10aXRsZSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnLWxpbmUgXCI+R2V0IHN0YXJ0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZS1saW5lIFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEJ5IGhhdmluZyB5b3VyIFZBIHNldCA8YnIgLz4gdXAgbWVldGluZ3MuXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUtYmxvY2sgbGluZS1ibG9jay10d29cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogLy5zZWMtdGl0bGUgKi99XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZWV0aW5nLW9uZV9fYmxvY2stdGV4dCBsYXJnZS1wYXJhZ3JhcGhcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhleSBjYW4gaGVscCByZW1pbmQgeW91IG9mIHRoYXQgaW1wb3J0YW50IGNhbGwsIGRlYWwgd2l0aFxuICAgICAgICAgICAgICAgICAgICB0aGUgcGhvbmUgY29tcGFueSwgdHJhY2sgeW91ciBwYWNrYWdlcyBhbmQgcGxhbiB5b3VyIHdlZWtlbmRcbiAgICAgICAgICAgICAgICAgICAgZ2V0YXdheS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIHsvKiAvLm1lZXRpbmctb25lX19ibG9jay10ZXh0ICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWV0aW5nLW9uZV9fYm94LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWV0aW5nLW9uZV9fYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWV0aW5nLW9uZV9fYnViYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBIZWxsby4gSeKAmW0geW91ciBwZXJzb25hbCBhc3Npc3RhbnQgZnJvbSBJbnN0b25cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogLy5tZWV0aW5nLW9uZV9fYnViYmxlICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlc1xccmVzb3VyY2VzXFxjaGF0LTEtMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXdlc29tZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVldGluZy1vbmVfX3RpdGxlXCI+UmhvbmRhIE1jZGVybW9uZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIC8ubWVldGluZy1vbmVfX3RpdGxlICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lZXRpbmctb25lX190ZXh0XCI+QXNzaXN0YW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAvLm1lZXRpbmctb25lX190ZXh0ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIC8ubWVldGluZy1vbmVfX2JveCAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWV0aW5nLW9uZV9fYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWV0aW5nLW9uZV9fYnViYmxlXCI+SGVsbG8uIFJob25kYTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAvLm1lZXRpbmctb25lX19idWJibGUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzXFxyZXNvdXJjZXNcXGNoYXQtMS0yLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBd2Vzb21lIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZWV0aW5nLW9uZV9fdGl0bGVcIj5LYXJsZWVuIFBlZGlnbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIC8ubWVldGluZy1vbmVfX3RpdGxlICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lZXRpbmctb25lX190ZXh0XCI+QXNzaXN0YW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAvLm1lZXRpbmctb25lX190ZXh0ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIC8ubWVldGluZy1vbmVfX2JveCAqL31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIC8ubWVldGluZy1vbmVfX2JveC13cmFwICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiAvLm1lZXRpbmctb25lX19jb250ZW50ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTYgKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiAvLnJvdyAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogLy5jb250YWluZXIgKi99XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgey8qIC8ubWVldGluZy1vbmUgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN0YS1maXZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjLXRpdGxlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZy1saW5lIFwiPk91ciBjYXBhYmlsaXRpZXM8L3NwYW4+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZS1saW5lIFwiPlxuICAgICAgICAgICAgICAgIEZldyB0aGluZ3MgdGhhdCBpbnN0b24gPGJyIC8+IGFsc28gZG8/LlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lLWJsb2NrIFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiAvLnNlYy10aXRsZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1hc29uYXJ5LWxheW91dFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02IG1hc29uYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXNcXHdoYXQtd2UtZG9cXHdoYXQtd2UtZG8tMS0xLmpwZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJBd2Vzb21lIEltYWdlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgbWFzb25hcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlc1xcd2hhdC13ZS1kb1xcd2hhdC13ZS1kby0xLTIuanBnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkF3ZXNvbWUgSW1hZ2VcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5jb2wtbGctMyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBtYXNvbmFyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3RhLWZpdmVfX29uZSBjdGEtZml2ZV9fc2luZ2xlIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgICBcInVybChpbWFnZXMvYmFja2dyb3VuZHMvd2hhdC13ZS1kby1iZy0xLTIuanBnKVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdGEtZml2ZV9fdGFnLWxpbmVcIj5XZSBjYW4gaGVscDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjdGEtZml2ZV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgV29yayBSZWxhdGVkIDxiciAvPiBUYXNraW5nXG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgey8qIC8uY3RhLWZpdmVfX3RpdGxlICovfVxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3RhLWZpdmVfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBXZSBjYW4gaGVscCB3aXRoIHlvdXIgd29yayA8YnIgLz4gcmVsYXRlZCB0YXNrcywgbGV0dGluZyB5b3V7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPiBmb2N1cyBvbiB3aGF04oCZcyBtb3N0IDxiciAvPiBpbXBvcnRhbnQuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7LyogLy5jdGEtZml2ZV9fdGV4dCAqL31cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY3RhLWZpdmVfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgTGV04oCZcyBHZXQgU3RhcnRlZFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiAvLmN0YS1maXZlX19vbmUgKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5jb2wtbGctNiAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBtYXNvbmFyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3RhLWZpdmVfX3R3byBjdGEtZml2ZV9fc2luZ2xlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgICBcInVybChpbWFnZXMvYmFja2dyb3VuZHMvd2hhdC13ZS1kby1iZy0xLTEuanBnKVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY3RhLWZpdmVfX3RpdGxlIGxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIExpZmUgPGJyIC8+IFRhc2tpbmdcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICB7LyogLy5jdGEtZml2ZV9fdGl0bGUgKi99XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImN0YS1maXZlX19saW5rIGxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIExldOKAmXMgR2V0IFN0YXJ0ZWRcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5jdGEtZml2ZV9fdHdvICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTYgKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiAvLnJvdyAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogLy5jb250YWluZXIgKi99XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgey8qIC8uY3RhLWZpdmUgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1zdHlsZS1vbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzXFxyZXNvdXJjZXNcXG1vYy0xLTEucG5nXCIgYWx0PVwiQXdlc29tZSBJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIC8uaW1hZ2UtYmxvY2sgKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5jb2wtbGctNiAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnLWxpbmUgXCI+VG8gZG8gbGlzdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBHaXZlIHVzIHlvdXIgdG8tZG8gbGlzdCA8YnIgLz4gYW5kIGdldCBvbiB3aXRoIHlvdXIgPGJyIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIGxvdmUtdG8tZG8gbGlzdC5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZS1ibG9jay10d28gXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIC8uc2VjLXRpdGxlICovfVxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGhhdmluZyB5b3VyIFZBIHNldCB1cCBtZWV0aW5ncywgbWFuYWdlIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgYnVzeSBzY2hlZHVsZSBhbmQgc3RyZWFtbGluZSBhbGwgdGhlIGluZm9ybWF0aW9uIHRoYXQgcG91cnNcbiAgICAgICAgICAgICAgICAgICAgaW50byB5b3VyIGluYm94LiBUaGV5IGNhbiBoZWxwIHJlbWluZCB5b3Ugb2YgdGhhdCBpbXBvcnRhbnRcbiAgICAgICAgICAgICAgICAgICAgY2FsbCwgZGVhbCB3aXRoIHRoZSBwaG9uZSBjb21wYW55LCB0cmFjayB5b3VyIHBhY2thZ2VzLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFdpdGggeW91ciBWQSBoYW5kbGluZyBhbGwgdGhlIHNtYWxsIHN0dWZmLCB5b3UgY2FuIHN0YXJ0XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzaW5nIDxiciAvPiBvbiB3aGF0J3MgdHJ1bHkgaW1wb3J0YW50LCBpbiB3b3JrIGFuZCBsaWZlLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtb3JlLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgTGV04oCZcyBHZXQgU3RhcnRlZFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiAvLmNvbnRlbnQtYmxvY2sgKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5jb2wtbGctNiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIC8ucm93ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiAvLmNvbnRhaW5lciAqL31cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB7LyogLy50b2RvLWxpc3Qtc3R5bGUtb25lICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlTGF5b3V0cz5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgLmljb25zaXplIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZhcTtcbiJdfQ== */\n/*@ sourceURL=/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/whatwedo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ })

})
//# sourceMappingURL=whatwedo.js.b61d934624a8920982a3.hot-update.js.map