webpackHotUpdate("static/development/pages/whyvira.js",{

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

/***/ "./pages/whyvira.js":
/*!**************************!*\
  !*** ./pages/whyvira.js ***!
  \**************************/
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
    _jsxFileName = "/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/whyvira.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Whyvira = function Whyvira() {
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
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "ie=edge",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Inston || Home Two || Responsive HTML 5 Template"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "images\\favicon\\apple-icon-57x57.png",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "images\\favicon\\apple-icon-60x60.png",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "images\\favicon\\apple-icon-72x72.png",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "images\\favicon\\apple-icon-76x76.png",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "images\\favicon\\apple-icon-114x114.png",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "images\\favicon\\apple-icon-120x120.png",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "images\\favicon\\apple-icon-144x144.png",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "images\\favicon\\apple-icon-152x152.png",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "images\\favicon\\apple-icon-180x180.png",
    className: "jsx-1230763148",
    __self: _this,
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
    className: "jsx-1230763148",
    __self: _this,
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
    className: "jsx-1230763148",
    __self: _this,
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
    className: "jsx-1230763148",
    __self: _this,
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
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "images\\favicon\\manifest.json",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "msapplication-TileImage",
    content: "images/favicon/ms-icon-144x144.png",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/css/style.css",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "css/responsive.css",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "js/jquery.js",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "js/bootstrap.bundle.min.js",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "js/swiper.min.js",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "js/owl.carousel.min.js",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "js/theme.js",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  })), __jsx("section", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1230763148" + " " + "text-center text-dark mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Calculate your value"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      lineHeight: 2.5
    },
    className: "jsx-1230763148" + " " + "row text-center text-primary pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-4 col-sm-12 col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-4 col-sm-12 col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-4 col-sm-12 col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "checkbox",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }), " ", __jsx("span", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 41
    }
  }, "Email Management"), __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }))))), __jsx("section", {
    className: "jsx-1230763148" + " " + "features-tab-two thm-gray-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "sec-title text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-1230763148" + " " + "tag-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, "Why choose us"), __jsx("h2", {
    className: "jsx-1230763148" + " " + "title-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "Why hire a inston virtual ", __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 41
    }
  }), " assistant."), __jsx("span", {
    className: "jsx-1230763148" + " " + "line-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  })), __jsx("ul", {
    role: "tablist",
    className: "jsx-1230763148" + " " + "nav nav-tabs features-tab-two__list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-1230763148" + " " + "nav-item features-tab-two__list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#features-tab-1",
    role: "tab",
    "data-toggle": "tab",
    className: "jsx-1230763148" + " " + "nav-link active features-tab-two__list-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "jsx-1230763148" + " " + "features-tab-two__list-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, "Highly Educated Assistants"))), __jsx("li", {
    className: "jsx-1230763148" + " " + "nav-item features-tab-two__list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#features-tab-2",
    role: "tab",
    "data-toggle": "tab",
    className: "jsx-1230763148" + " " + "nav-link features-tab-two__list-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "jsx-1230763148" + " " + "features-tab-two__list-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, "Professionally Trained"))), __jsx("li", {
    className: "jsx-1230763148" + " " + "nav-item features-tab-two__list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#features-tab-3",
    role: "tab",
    "data-toggle": "tab",
    className: "jsx-1230763148" + " " + "nav-link features-tab-two__list-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "jsx-1230763148" + " " + "features-tab-two__list-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, "VA Bad fit? No problem")))), __jsx("div", {
    className: "jsx-1230763148" + " " + "tab-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx("div", {
    role: "tabpanel",
    id: "features-tab-1",
    className: "jsx-1230763148" + " " + "tab-pane show active  animated fadeInUp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "row no-gutters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images\\resources\\tab-2-1.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148" + " " + "features-tab-two__image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "features-tab-two__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "jsx-1230763148" + " " + "features-tab-two__text large-paragraph",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."), __jsx("ul", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "jsx-1230763148" + " " + "fa fa-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 25
    }
  }), "Highly trained in administrative tasks"), __jsx("li", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "jsx-1230763148" + " " + "fa fa-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 25
    }
  }), "Professionally managed and supported"), __jsx("li", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "jsx-1230763148" + " " + "fa fa-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 25
    }
  }), "Proficient in Google, and most popular productivity suites")))))), __jsx("div", {
    role: "tabpanel",
    id: "features-tab-2",
    className: "jsx-1230763148" + " " + "tab-pane show  animated fadeInUp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "row no-gutters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images\\resources\\tab-2-1.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148" + " " + "features-tab-two__image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "features-tab-two__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "jsx-1230763148" + " " + "features-tab-two__text large-paragraph",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."), __jsx("ul", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "jsx-1230763148" + " " + "fa fa-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }), "Highly trained in administrative tasks"), __jsx("li", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "jsx-1230763148" + " " + "fa fa-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 25
    }
  }), "Professionally managed and supported"), __jsx("li", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "jsx-1230763148" + " " + "fa fa-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 25
    }
  }), "Proficient in Google, and most popular productivity suites")))))), __jsx("div", {
    role: "tabpanel",
    id: "features-tab-3",
    className: "jsx-1230763148" + " " + "tab-pane show  animated fadeInUp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "row no-gutters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images\\resources\\tab-2-1.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148" + " " + "features-tab-two__image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "features-tab-two__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "jsx-1230763148" + " " + "features-tab-two__text large-paragraph",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 21
    }
  }, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."), __jsx("ul", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "jsx-1230763148" + " " + "fa fa-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 25
    }
  }), "Highly trained in administrative tasks"), __jsx("li", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "jsx-1230763148" + " " + "fa fa-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 25
    }
  }), "Professionally managed and supported"), __jsx("li", {
    className: "jsx-1230763148" + " " + "features-tab-two__content-list-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "jsx-1230763148" + " " + "fa fa-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 25
    }
  }), "Proficient in Google, and most popular productivity suites"))))))))), __jsx("div", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "jsx-1230763148" + " " + "comparison-table why-choose-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "sec-title text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1230763148" + " " + "tag-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 15
    }
  }, "Comparison"), __jsx("h2", {
    className: "jsx-1230763148" + " " + "title-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 15
    }
  }, "Compare inston to the ", __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 39
    }
  }), " alternatives."), __jsx("span", {
    className: "jsx-1230763148" + " " + "line-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "table-responsive",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, __jsx("table", {
    className: "jsx-1230763148" + " " + "comparison-table__table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 15
    }
  }, __jsx("thead", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 17
    }
  }, __jsx("tr", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 19
    }
  }, __jsx("th", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 21
    }
  }, "Concern"), __jsx("th", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 21
    }
  }, "Inston"), __jsx("th", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 21
    }
  }, "Hire Full-Time"), __jsx("th", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 21
    }
  }, "Outsourced Tasks"))), __jsx("tbody", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 17
    }
  }, __jsx("tr", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 19
    }
  }, __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 21
    }
  }, "Cost"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 21
    }
  }, "$398"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 21
    }
  }, "$4,000+/mo"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 21
    }
  }, "$200 - $1,000")), __jsx("tr", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 19
    }
  }, __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 21
    }
  }, "Time to Start"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 21
    }
  }, "Immediate"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 21
    }
  }, "4 - 8 weeks"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 21
    }
  }, "1 Week")), __jsx("tr", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 19
    }
  }, __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 21
    }
  }, "Replacement Issue"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 21
    }
  }, "Easy: one email"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 21
    }
  }, "Difficult: New Hire"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 21
    }
  }, "Difficult: New Hire")), __jsx("tr", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 19
    }
  }, __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 21
    }
  }, "Training"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 21
    }
  }, "Professionally done"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 21
    }
  }, "2 - 4 weeks"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 21
    }
  }, "Spotty")), __jsx("tr", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 19
    }
  }, __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 21
    }
  }, "Expertise"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 21
    }
  }, "Diverse Skillsets"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 21
    }
  }, "Specific to 1 Person"), __jsx("td", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 21
    }
  }, "Specific to Contractor"))))))), __jsx("section", {
    className: "jsx-1230763148" + " " + "features-two thm-black-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "col-xl-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "features-two__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "sec-title text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-1230763148" + " " + "tag-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 21
    }
  }, "Awesome people"), __jsx("h2", {
    className: "jsx-1230763148" + " " + "title-line light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 21
    }
  }, "Did we mention our ", __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 42
    }
  }), " VAs are also pretty ", __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 69
    }
  }), " cool people?."), __jsx("span", {
    className: "jsx-1230763148" + " " + "line-block line-block-two",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "jsx-1230763148" + " " + "features-two__text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 19
    }
  }, "We hire the type of people that we'd want to be around every day: smart, outgoing and ambitious. We want to make sure we connect you to a talented VA that does top quality work but also to someone with an awesome personality that you'll get along with. You might be surprised that some of our VAs are entrepreneurs themselves; from owning a cupcake business to writing a fashion blog, you're working with some really talented individuals."))), __jsx("div", {
    className: "jsx-1230763148" + " " + "col-xl-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "features-two__box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "row no-gutters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-6 d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "jsx-1230763148" + " " + "features-two__box-title thm-base-bg align-items-center justify-content-center d-flex text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 23
    }
  }, "Smart and highly ", __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 42
    }
  }), " skilled people")), __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "images\\resources\\people-1-1.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 23
    }
  }))), __jsx("div", {
    className: "jsx-1230763148" + " " + "row flex-row-reverse no-gutters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-6 d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "jsx-1230763148" + " " + "features-two__box-title thm-base-bg align-items-center justify-content-center d-flex text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 23
    }
  }, "Ambitious, looking to ", __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 47
    }
  }), "anticipate needs")), __jsx("div", {
    className: "jsx-1230763148" + " " + "col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "images\\resources\\people-1-2.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 23
    }
  })))))))), __jsx("section", {
    className: "jsx-1230763148" + " " + "map-style-one",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "images\\resources\\map-shape-1-1.png",
    alt: "Awesome Image",
    className: "jsx-1230763148" + " " + "map-shape-1-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "images\\resources\\map-shape-1-2.png",
    alt: "Awesome Image",
    className: "jsx-1230763148" + " " + "map-shape-1-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "images\\resources\\map-shape-1-3.png",
    alt: "Awesome Image",
    className: "jsx-1230763148" + " " + "map-shape-1-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "images\\resources\\map-shape-1-4.png",
    alt: "Awesome Image",
    className: "jsx-1230763148" + " " + "map-shape-1-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "images\\resources\\map-shape-1-5.png",
    alt: "Awesome Image",
    className: "jsx-1230763148" + " " + "map-shape-1-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-1230763148" + " " + "container text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1230763148" + " " + "sec-title text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1230763148" + " " + "tag-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 15
    }
  }, "Superhumans"), __jsx("h2", {
    className: "jsx-1230763148" + " " + "title-line ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 15
    }
  }, "We only hire the best of the best ", __jsx("br", {
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 51
    }
  }), " assistants on the planet."), __jsx("span", {
    className: "jsx-1230763148" + " " + "line-block ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "map-blocks text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "images\\resources\\map-1-1.png",
    alt: "Awesome Image",
    className: "jsx-1230763148" + " " + "map-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-1230763148" + " " + "map-person-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images\\resources\\map-p-1-1.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "map-person-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images\\resources\\map-p-1-2.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "map-person-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images\\resources\\map-p-1-3.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "map-person-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images\\resources\\map-p-1-4.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "map-person-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images\\resources\\map-p-1-5.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "map-person-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images\\resources\\map-p-1-6.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "map-person-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images\\resources\\map-p-1-7.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1230763148" + " " + "map-person-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images\\resources\\map-p-1-8.jpg",
    alt: "Awesome Image",
    className: "jsx-1230763148",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1230763148" + " " + "button-block text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-1230763148" + " " + "thm-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 15
    }
  }, "Request a Consultation"), __jsx("span", {
    className: "jsx-1230763148" + " " + "btn-tagline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 15
    }
  }, "Looking for expert VA ", __jsx("i", {
    className: "jsx-1230763148" + " " + "inston-icon-share",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 39
    }
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1230763148",
    __self: _this
  }, "input[type=\"checkbox\"]{width:30px;height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9yaXp3YW4vRUUxMDdCMDYxMDdBRDRENS9SSVRFU0hfUFJPSkVDVFMvdmlydHVhbGFzc2lzdGFudC9wYWdlcy93aHl2aXJhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNrQk8sQUFHc0IsV0FDQyxZQUNkIiwiZmlsZSI6Ii9tZWRpYS9yaXp3YW4vRUUxMDdCMDYxMDdBRDRENS9SSVRFU0hfUFJPSkVDVFMvdmlydHVhbGFzc2lzdGFudC9wYWdlcy93aHl2aXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhZ2VMYXlvdXRzIGZyb20gXCIuLi9MYXlvdXRzL1BhZ2VMYXlvdXRzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IFdoeXZpcmEgPSAoKSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8UGFnZUxheW91dHM+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxuICAgICAgICA8dGl0bGU+SW5zdG9uIHx8IEhvbWUgVHdvIHx8IFJlc3BvbnNpdmUgSFRNTCA1IFRlbXBsYXRlPC90aXRsZT5cbiAgICAgICAgey8qIDwhLS0gRmF2aWNvbiBJY29ucyAtLT4gKi99XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCI1N3g1N1wiXG4gICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi01N3g1Ny5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiNjB4NjBcIlxuICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGFwcGxlLWljb24tNjB4NjAucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICBzaXplcz1cIjcyeDcyXCJcbiAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxhcHBsZS1pY29uLTcyeDcyLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCI3Nng3NlwiXG4gICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi03Nng3Ni5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTE0eDExNFwiXG4gICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCIxMjB4MTIwXCJcbiAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxhcHBsZS1pY29uLTEyMHgxMjAucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICBzaXplcz1cIjE0NHgxNDRcIlxuICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGFwcGxlLWljb24tMTQ0eDE0NC5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTUyeDE1MlwiXG4gICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcbiAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxhcHBsZS1pY29uLTE4MHgxODAucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE5MngxOTJcIlxuICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGFuZHJvaWQtaWNvbi0xOTJ4MTkyLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcZmF2aWNvbi0zMngzMi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIHNpemVzPVwiOTZ4OTZcIlxuICAgICAgICAgIGhyZWY9XCJpbWFnZXNcXGZhdmljb25cXGZhdmljb24tOTZ4OTYucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICBocmVmPVwiaW1hZ2VzXFxmYXZpY29uXFxmYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cImltYWdlc1xcZmF2aWNvblxcbWFuaWZlc3QuanNvblwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJpbWFnZXMvZmF2aWNvbi9tcy1pY29uLTE0NHgxNDQucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9jc3Mvc3R5bGUuY3NzXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJjc3MvcmVzcG9uc2l2ZS5jc3NcIiAvPlxuXG4gICAgICAgIDxzY3JpcHQgc3JjPVwianMvanF1ZXJ5LmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwianMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJqcy9zd2lwZXIubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwianMvb3dsLmNhcm91c2VsLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cImpzL3RoZW1lLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWRhcmsgbXQtNVwiPkNhbGN1bGF0ZSB5b3VyIHZhbHVlPC9oMj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXIgdGV4dC1wcmltYXJ5IHBiLTVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbGluZUhlaWdodDogMi41IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IDxzcGFuPkVtYWlsIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4gPHNwYW4+RW1haWwgTWFuYWdlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiA8c3Bhbj5FbWFpbCBNYW5hZ2VtZW50PC9zcGFuPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IDxzcGFuPkVtYWlsIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiA8c3Bhbj5FbWFpbCBNYW5hZ2VtZW50PC9zcGFuPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IDxzcGFuPkVtYWlsIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4gPHNwYW4+RW1haWwgTWFuYWdlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiA8c3Bhbj5FbWFpbCBNYW5hZ2VtZW50PC9zcGFuPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4gPHNwYW4+RW1haWwgTWFuYWdlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiA8c3Bhbj5FbWFpbCBNYW5hZ2VtZW50PC9zcGFuPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IDxzcGFuPkVtYWlsIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4gPHNwYW4+RW1haWwgTWFuYWdlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlcy10YWItdHdvIHRobS1ncmF5LWJnXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtdGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZy1saW5lIFwiPldoeSBjaG9vc2UgdXM8L3NwYW4+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUtbGluZVwiPlxuICAgICAgICAgICAgICBXaHkgaGlyZSBhIGluc3RvbiB2aXJ0dWFsIDxiciAvPiBhc3Npc3RhbnQuXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZS1ibG9ja1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIC8uc2VjLXRpdGxlICovfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgZmVhdHVyZXMtdGFiLXR3b19fbGlzdFwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZmVhdHVyZXMtdGFiLXR3b19fbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlIGZlYXR1cmVzLXRhYi10d29fX2xpc3QtbGlua1wiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNmZWF0dXJlcy10YWItMVwiXG4gICAgICAgICAgICAgICAgcm9sZT1cInRhYlwiXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fbGlzdC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgSGlnaGx5IEVkdWNhdGVkIEFzc2lzdGFudHNcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZmVhdHVyZXMtdGFiLXR3b19fbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgZmVhdHVyZXMtdGFiLXR3b19fbGlzdC1saW5rXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiI2ZlYXR1cmVzLXRhYi0yXCJcbiAgICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWF0dXJlcy10YWItdHdvX19saXN0LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICBQcm9mZXNzaW9uYWxseSBUcmFpbmVkXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGZlYXR1cmVzLXRhYi10d29fX2xpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGZlYXR1cmVzLXRhYi10d29fX2xpc3QtbGlua1wiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNmZWF0dXJlcy10YWItM1wiXG4gICAgICAgICAgICAgICAgcm9sZT1cInRhYlwiXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fbGlzdC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgVkEgQmFkIGZpdD8gTm8gcHJvYmxlbVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFiLXBhbmUgc2hvdyBhY3RpdmUgIGFuaW1hdGVkIGZhZGVJblVwXCJcbiAgICAgICAgICAgICAgaWQ9XCJmZWF0dXJlcy10YWItMVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlc1xccmVzb3VyY2VzXFx0YWItMi0xLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVzLXRhYi10d29fX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXdlc29tZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiAvLmNvbC1sZy02ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWF0dXJlcy10YWItdHdvX190ZXh0IGxhcmdlLXBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW1cbiAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluXG4gICAgICAgICAgICAgICAgICAgICAgc29tZSBmb3JtIGluamVjdGVkIGh1bW91ciBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0XG4gICAgICAgICAgICAgICAgICAgICAgbG9vayBldmVuIGJlbGlldmFibGUuIElmIHlvdSBhcmUgZ29pbmcgdG8gdXNlIGEgcGFzc2FnZSBvZlxuICAgICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtLCB5b3UgbmVlZCB0byBiZSBzdXJlIHRoZXJlIGlzbid0IGFueXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgZW1iYXJyYXNzaW5nIGhpZGRlbiBpbiB0aGUgbWlkZGxlIG9mIHRleHQuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fdGV4dCBsYXJnZS1wYXJhZ3JhcGggKi99XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmZWF0dXJlcy10YWItdHdvX19jb250ZW50LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhpZ2hseSB0cmFpbmVkIGluIGFkbWluaXN0cmF0aXZlIHRhc2tzXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogLy5mZWF0dXJlcy10YWItdHdvX19jb250ZW50LWxpc3QtaXRlbSAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2Zlc3Npb25hbGx5IG1hbmFnZWQgYW5kIHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXR1cmVzLXRhYi10d29fX2NvbnRlbnQtbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGVja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9maWNpZW50IGluIEdvb2dsZSwgYW5kIG1vc3QgcG9wdWxhciBwcm9kdWN0aXZpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1aXRlc1xuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIHsvKiAvLmZlYXR1cmVzLXRhYi10d29fX2NvbnRlbnQtbGlzdCAqL31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fY29udGVudCAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5jb2wtbGctNiAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiAvLnJvdyAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIC8udGFiLXBhbmUgKi99XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYi1wYW5lIHNob3cgIGFuaW1hdGVkIGZhZGVJblVwXCJcbiAgICAgICAgICAgICAgaWQ9XCJmZWF0dXJlcy10YWItMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlc1xccmVzb3VyY2VzXFx0YWItMi0xLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVzLXRhYi10d29fX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXdlc29tZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiAvLmNvbC1sZy02ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWF0dXJlcy10YWItdHdvX190ZXh0IGxhcmdlLXBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW1cbiAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluXG4gICAgICAgICAgICAgICAgICAgICAgc29tZSBmb3JtIGluamVjdGVkIGh1bW91ciBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0XG4gICAgICAgICAgICAgICAgICAgICAgbG9vayBldmVuIGJlbGlldmFibGUuIElmIHlvdSBhcmUgZ29pbmcgdG8gdXNlIGEgcGFzc2FnZSBvZlxuICAgICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtLCB5b3UgbmVlZCB0byBiZSBzdXJlIHRoZXJlIGlzbid0IGFueXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgZW1iYXJyYXNzaW5nIGhpZGRlbiBpbiB0aGUgbWlkZGxlIG9mIHRleHQuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fdGV4dCBsYXJnZS1wYXJhZ3JhcGggKi99XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmZWF0dXJlcy10YWItdHdvX19jb250ZW50LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhpZ2hseSB0cmFpbmVkIGluIGFkbWluaXN0cmF0aXZlIHRhc2tzXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogLy5mZWF0dXJlcy10YWItdHdvX19jb250ZW50LWxpc3QtaXRlbSAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2Zlc3Npb25hbGx5IG1hbmFnZWQgYW5kIHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXR1cmVzLXRhYi10d29fX2NvbnRlbnQtbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGVja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9maWNpZW50IGluIEdvb2dsZSwgYW5kIG1vc3QgcG9wdWxhciBwcm9kdWN0aXZpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1aXRlc1xuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIHsvKiAvLmZlYXR1cmVzLXRhYi10d29fX2NvbnRlbnQtbGlzdCAqL31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fY29udGVudCAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5jb2wtbGctNiAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiAvLnJvdyAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIC8udGFiLXBhbmUgKi99XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYi1wYW5lIHNob3cgIGFuaW1hdGVkIGZhZGVJblVwXCJcbiAgICAgICAgICAgICAgaWQ9XCJmZWF0dXJlcy10YWItM1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlc1xccmVzb3VyY2VzXFx0YWItMi0xLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVzLXRhYi10d29fX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXdlc29tZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiAvLmNvbC1sZy02ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWF0dXJlcy10YWItdHdvX190ZXh0IGxhcmdlLXBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW1cbiAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluXG4gICAgICAgICAgICAgICAgICAgICAgc29tZSBmb3JtIGluamVjdGVkIGh1bW91ciBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0XG4gICAgICAgICAgICAgICAgICAgICAgbG9vayBldmVuIGJlbGlldmFibGUuIElmIHlvdSBhcmUgZ29pbmcgdG8gdXNlIGEgcGFzc2FnZSBvZlxuICAgICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtLCB5b3UgbmVlZCB0byBiZSBzdXJlIHRoZXJlIGlzbid0IGFueXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgZW1iYXJyYXNzaW5nIGhpZGRlbiBpbiB0aGUgbWlkZGxlIG9mIHRleHQuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fdGV4dCBsYXJnZS1wYXJhZ3JhcGggKi99XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmZWF0dXJlcy10YWItdHdvX19jb250ZW50LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhpZ2hseSB0cmFpbmVkIGluIGFkbWluaXN0cmF0aXZlIHRhc2tzXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogLy5mZWF0dXJlcy10YWItdHdvX19jb250ZW50LWxpc3QtaXRlbSAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2Zlc3Npb25hbGx5IG1hbmFnZWQgYW5kIHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXR1cmVzLXRhYi10d29fX2NvbnRlbnQtbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGVja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9maWNpZW50IGluIEdvb2dsZSwgYW5kIG1vc3QgcG9wdWxhciBwcm9kdWN0aXZpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1aXRlc1xuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fY29udGVudC1saXN0LWl0ZW0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIHsvKiAvLmZlYXR1cmVzLXRhYi10d29fX2NvbnRlbnQtbGlzdCAqL31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIC8uZmVhdHVyZXMtdGFiLXR3b19fY29udGVudCAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5jb2wtbGctNiAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiAvLnJvdyAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIC8udGFiLXBhbmUgKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIC8udGFiLWNvbnRlbnQgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLy5jb250YWluZXIgKi99XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICB7LyogLy5mZWF0dXJlcy10YWItdHdvICovfVxuICAgICAgPGRpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29tcGFyaXNvbi10YWJsZSB3aHktY2hvb3NlLXBhZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtdGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnLWxpbmUgXCI+Q29tcGFyaXNvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICBDb21wYXJlIGluc3RvbiB0byB0aGUgPGJyIC8+IGFsdGVybmF0aXZlcy5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZS1ibG9ja1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiAvLnNlYy10aXRsZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiY29tcGFyaXNvbi10YWJsZV9fdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Db25jZXJuPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkluc3RvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5IaXJlIEZ1bGwtVGltZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5PdXRzb3VyY2VkIFRhc2tzPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Db3N0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiQzOTg8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JDQsMDAwKy9tbzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4kMjAwIC0gJDEsMDAwPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5UaW1lIHRvIFN0YXJ0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPkltbWVkaWF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD40IC0gOCB3ZWVrczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4xIFdlZWs8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlJlcGxhY2VtZW50IElzc3VlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPkVhc3k6IG9uZSBlbWFpbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5EaWZmaWN1bHQ6IE5ldyBIaXJlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPkRpZmZpY3VsdDogTmV3IEhpcmU8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRyYWluaW5nPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlByb2Zlc3Npb25hbGx5IGRvbmU8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+MiAtIDQgd2Vla3M8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+U3BvdHR5PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5FeHBlcnRpc2U8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+RGl2ZXJzZSBTa2lsbHNldHM8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+U3BlY2lmaWMgdG8gMSBQZXJzb248L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+U3BlY2lmaWMgdG8gQ29udHJhY3RvcjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiAvLnRhYmxlLXJlc3BvbnNpdmUgKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIC8uY29udGFpbmVyICovfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHsvKiAvLmNvbXBhcmlzb24tdGFibGUgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVzLXR3byB0aG0tYmxhY2stYmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdHdvX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy10aXRsZSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnLWxpbmUgXCI+QXdlc29tZSBwZW9wbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZS1saW5lIGxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgRGlkIHdlIG1lbnRpb24gb3VyIDxiciAvPiBWQXMgYXJlIGFsc28gcHJldHR5IDxiciAvPiBjb29sXG4gICAgICAgICAgICAgICAgICAgICAgcGVvcGxlPy5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZS1ibG9jayBsaW5lLWJsb2NrLXR3b1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiAvLnNlYy10aXRsZSAqL31cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZlYXR1cmVzLXR3b19fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICBXZSBoaXJlIHRoZSB0eXBlIG9mIHBlb3BsZSB0aGF0IHdlJ2Qgd2FudCB0byBiZSBhcm91bmQgZXZlcnlcbiAgICAgICAgICAgICAgICAgICAgZGF5OiBzbWFydCwgb3V0Z29pbmcgYW5kIGFtYml0aW91cy4gV2Ugd2FudCB0byBtYWtlIHN1cmUgd2VcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdCB5b3UgdG8gYSB0YWxlbnRlZCBWQSB0aGF0IGRvZXMgdG9wIHF1YWxpdHkgd29yayBidXRcbiAgICAgICAgICAgICAgICAgICAgYWxzbyB0byBzb21lb25lIHdpdGggYW4gYXdlc29tZSBwZXJzb25hbGl0eSB0aGF0IHlvdSdsbCBnZXRcbiAgICAgICAgICAgICAgICAgICAgYWxvbmcgd2l0aC4gWW91IG1pZ2h0IGJlIHN1cnByaXNlZCB0aGF0IHNvbWUgb2Ygb3VyIFZBcyBhcmVcbiAgICAgICAgICAgICAgICAgICAgZW50cmVwcmVuZXVycyB0aGVtc2VsdmVzOyBmcm9tIG93bmluZyBhIGN1cGNha2UgYnVzaW5lc3MgdG9cbiAgICAgICAgICAgICAgICAgICAgd3JpdGluZyBhIGZhc2hpb24gYmxvZywgeW91J3JlIHdvcmtpbmcgd2l0aCBzb21lIHJlYWxseVxuICAgICAgICAgICAgICAgICAgICB0YWxlbnRlZCBpbmRpdmlkdWFscy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIHsvKiAvLmZlYXR1cmVzLXR3b19fdGV4dCAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogLy5mZWF0dXJlcy10d29fX2NvbnRlbnQgKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5jb2wtbGctNiAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdHdvX19ib3hcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBkLWZsZXggXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZlYXR1cmVzLXR3b19fYm94LXRpdGxlIHRobS1iYXNlLWJnIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGQtZmxleCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU21hcnQgYW5kIGhpZ2hseSA8YnIgLz4gc2tpbGxlZCBwZW9wbGVcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAvLmZlYXR1cmVzLXR3b19fYm94LXRpdGxlICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTYgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXNcXHJlc291cmNlc1xccGVvcGxlLTEtMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXdlc29tZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiAvLmNvbC1sZy02ICovfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogLy5yb3cgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmbGV4LXJvdy1yZXZlcnNlIG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZmVhdHVyZXMtdHdvX19ib3gtdGl0bGUgdGhtLWJhc2UtYmcgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgZC1mbGV4IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbWJpdGlvdXMsIGxvb2tpbmcgdG8gPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnRpY2lwYXRlIG5lZWRzXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogLy5mZWF0dXJlcy10d29fX2JveC10aXRsZSAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiAvLmNvbC1sZy02ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzXFxyZXNvdXJjZXNcXHBlb3BsZS0xLTIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF3ZXNvbWUgSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogLy5jb2wtbGctNiAqL31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIC8ucm93ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiAvLmZlYXR1cmVzLXR3b19fYm94ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8uY29sLWxnLTYgKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiAvLnJvdyAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogLy5jb250YWluZXIgKi99XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgey8qIC8uZmVhdHVyZXMtdHdvIHRobS1ibGFjay1iZyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFwLXN0eWxlLW9uZVwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImltYWdlc1xccmVzb3VyY2VzXFxtYXAtc2hhcGUtMS0xLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJBd2Vzb21lIEltYWdlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1zaGFwZS0xLTFcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaW1hZ2VzXFxyZXNvdXJjZXNcXG1hcC1zaGFwZS0xLTIucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkF3ZXNvbWUgSW1hZ2VcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwLXNoYXBlLTEtMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJpbWFnZXNcXHJlc291cmNlc1xcbWFwLXNoYXBlLTEtMy5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiQXdlc29tZSBJbWFnZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXAtc2hhcGUtMS0zXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImltYWdlc1xccmVzb3VyY2VzXFxtYXAtc2hhcGUtMS00LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJBd2Vzb21lIEltYWdlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1zaGFwZS0xLTRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaW1hZ2VzXFxyZXNvdXJjZXNcXG1hcC1zaGFwZS0xLTUucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkF3ZXNvbWUgSW1hZ2VcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwLXNoYXBlLTEtNVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtdGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnLWxpbmUgXCI+U3VwZXJodW1hbnM8L3NwYW4+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZS1saW5lIFwiPlxuICAgICAgICAgICAgICAgIFdlIG9ubHkgaGlyZSB0aGUgYmVzdCBvZiB0aGUgYmVzdCA8YnIgLz4gYXNzaXN0YW50cyBvbiB0aGVcbiAgICAgICAgICAgICAgICBwbGFuZXQuXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUtYmxvY2sgXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIC8uc2VjLXRpdGxlICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtYmxvY2tzIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXNcXHJlc291cmNlc1xcbWFwLTEtMS5wbmdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiQXdlc29tZSBJbWFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXBlcnNvbi0xXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXNcXHJlc291cmNlc1xcbWFwLXAtMS0xLmpwZ1wiIGFsdD1cIkF3ZXNvbWUgSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8ubWFwLXBlcnNvbiBwZXJzb24tMSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtcGVyc29uLTJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlc1xccmVzb3VyY2VzXFxtYXAtcC0xLTIuanBnXCIgYWx0PVwiQXdlc29tZSBJbWFnZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5tYXAtcGVyc29uIHBlcnNvbi0xICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1wZXJzb24tM1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzXFxyZXNvdXJjZXNcXG1hcC1wLTEtMy5qcGdcIiBhbHQ9XCJBd2Vzb21lIEltYWdlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiAvLm1hcC1wZXJzb24gcGVyc29uLTEgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXBlcnNvbi00XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXNcXHJlc291cmNlc1xcbWFwLXAtMS00LmpwZ1wiIGFsdD1cIkF3ZXNvbWUgSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8ubWFwLXBlcnNvbiBwZXJzb24tMSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtcGVyc29uLTVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlc1xccmVzb3VyY2VzXFxtYXAtcC0xLTUuanBnXCIgYWx0PVwiQXdlc29tZSBJbWFnZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5tYXAtcGVyc29uIHBlcnNvbi0xICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1wZXJzb24tNlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzXFxyZXNvdXJjZXNcXG1hcC1wLTEtNi5qcGdcIiBhbHQ9XCJBd2Vzb21lIEltYWdlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiAvLm1hcC1wZXJzb24gcGVyc29uLTEgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXBlcnNvbi03XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXNcXHJlc291cmNlc1xcbWFwLXAtMS03LmpwZ1wiIGFsdD1cIkF3ZXNvbWUgSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIC8ubWFwLXBlcnNvbiBwZXJzb24tMSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtcGVyc29uLThcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlc1xccmVzb3VyY2VzXFxtYXAtcC0xLTguanBnXCIgYWx0PVwiQXdlc29tZSBJbWFnZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogLy5tYXAtcGVyc29uIHBlcnNvbi0xICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogLy5tYXAtYmxvY2tzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYmxvY2sgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGhtLWJ0blwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgUmVxdWVzdCBhIENvbnN1bHRhdGlvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi10YWdsaW5lXCI+XG4gICAgICAgICAgICAgICAgTG9va2luZyBmb3IgZXhwZXJ0IFZBIDxpIGNsYXNzTmFtZT1cImluc3Rvbi1pY29uLXNoYXJlXCIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogLy5idG4tYmxvY2sgKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIC8uY29udGFpbmVyICovfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHsvKiAvLm1hcC1zdHlsZS1vbmUgKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2VMYXlvdXRzPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7YFxuICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgICAgIHdpZHRoOiAzMHB4OyAvKkRlc2lyZWQgd2lkdGgqL1xuICAgICAgICAgIGhlaWdodDogMzBweDsgLypEZXNpcmVkIGhlaWdodCovXG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFdoeXZpcmE7XG4iXX0= */\n/*@ sourceURL=/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/whyvira.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Whyvira);

/***/ })

})
//# sourceMappingURL=whyvira.js.cfd2f359b026bc79fc52.hot-update.js.map