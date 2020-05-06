webpackHotUpdate("static/development/pages/faq.js",{

/***/ "./node_modules/react-accessible-accordion/dist/es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/es/index.js ***!
  \******************************************************************/
/*! exports provided: Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState, resetNextUuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemButton", function() { return AccordionItemButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemHeading", function() { return AccordionItemHeadingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemPanel", function() { return AccordionItemPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemState", function() { return AccordionItemState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetNextUuid", function() { return resetNextUuid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var DisplayName;

(function (DisplayName) {
  DisplayName["Accordion"] = "Accordion";
  DisplayName["AccordionItem"] = "AccordionItem";
  DisplayName["AccordionItemButton"] = "AccordionItemButton";
  DisplayName["AccordionItemHeading"] = "AccordionItemHeading";
  DisplayName["AccordionItemPanel"] = "AccordionItemPanel";
})(DisplayName || (DisplayName = {}));

var DisplayName$1 = DisplayName;

var AccordionStore = function AccordionStore(_ref) {
  var _this = this;

  var _ref$expanded = _ref.expanded,
      _expanded = _ref$expanded === void 0 ? [] : _ref$expanded,
      _ref$allowMultipleExp = _ref.allowMultipleExpanded,
      allowMultipleExpanded = _ref$allowMultipleExp === void 0 ? false : _ref$allowMultipleExp,
      _ref$allowZeroExpande = _ref.allowZeroExpanded,
      allowZeroExpanded = _ref$allowZeroExpande === void 0 ? false : _ref$allowZeroExpande;

  _classCallCheck(this, AccordionStore);

  _defineProperty(this, "expanded", void 0);

  _defineProperty(this, "allowMultipleExpanded", void 0);

  _defineProperty(this, "allowZeroExpanded", void 0);

  _defineProperty(this, "toggleExpanded", function (uuid) {
    if (_this.isItemDisabled(uuid)) {
      return _this;
    }

    var isExpanded = _this.isItemExpanded(uuid);

    if (!isExpanded) {
      return _this.augment({
        expanded: _this.allowMultipleExpanded ? [].concat(_toConsumableArray(_this.expanded), [uuid]) : [uuid]
      });
    } else {
      return _this.augment({
        expanded: _this.expanded.filter(function (expandedUuid) {
          return expandedUuid !== uuid;
        })
      });
    }
  });

  _defineProperty(this, "isItemDisabled", function (uuid) {
    var isExpanded = _this.isItemExpanded(uuid);

    var isOnlyOneExpanded = _this.expanded.length === 1;
    return Boolean(isExpanded && !_this.allowZeroExpanded && isOnlyOneExpanded);
  });

  _defineProperty(this, "isItemExpanded", function (uuid) {
    return _this.expanded.indexOf(uuid) !== -1;
  });

  _defineProperty(this, "getPanelAttributes", function (uuid) {
    var expanded = _this.isItemExpanded(uuid);

    return {
      role: _this.allowMultipleExpanded ? undefined : 'region',
      'aria-hidden': _this.allowMultipleExpanded ? !expanded : undefined,
      'aria-labelledby': _this.getButtonId(uuid),
      id: _this.getPanelId(uuid),
      hidden: expanded ? undefined : true
    };
  });

  _defineProperty(this, "getHeadingAttributes", function (uuid) {
    return {
      role: 'heading'
    };
  });

  _defineProperty(this, "getButtonAttributes", function (uuid) {
    var expanded = _this.isItemExpanded(uuid);

    var disabled = _this.isItemDisabled(uuid);

    return {
      id: _this.getButtonId(uuid),
      'aria-disabled': disabled,
      'aria-expanded': expanded,
      'aria-controls': _this.getPanelId(uuid),
      role: 'button',
      tabIndex: 0
    };
  });

  _defineProperty(this, "getPanelId", function (uuid) {
    return "accordion__panel-".concat(uuid);
  });

  _defineProperty(this, "getButtonId", function (uuid) {
    return "accordion__heading-".concat(uuid);
  });

  _defineProperty(this, "augment", function (args) {
    return new AccordionStore(_objectSpread({
      expanded: _this.expanded,
      allowMultipleExpanded: _this.allowMultipleExpanded,
      allowZeroExpanded: _this.allowZeroExpanded
    }, args));
  });

  this.expanded = _expanded;
  this.allowMultipleExpanded = allowMultipleExpanded;
  this.allowZeroExpanded = allowZeroExpanded;
};

var Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
var Provider =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Provider, _React$PureComponent);

  function Provider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Provider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", new AccordionStore({
      expanded: _this.props.preExpanded,
      allowMultipleExpanded: _this.props.allowMultipleExpanded,
      allowZeroExpanded: _this.props.allowZeroExpanded
    }));

    _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function (key) {
      _this.setState(function (state) {
        return state.toggleExpanded(key);
      }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state.expanded);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isItemDisabled", function (key) {
      return _this.state.isItemDisabled(key);
    });

    _defineProperty(_assertThisInitialized(_this), "isItemExpanded", function (key) {
      return _this.state.isItemExpanded(key);
    });

    _defineProperty(_assertThisInitialized(_this), "getPanelAttributes", function (key) {
      return _this.state.getPanelAttributes(key);
    });

    _defineProperty(_assertThisInitialized(_this), "getHeadingAttributes", function (key) {
      return _this.state.getHeadingAttributes(key);
    });

    _defineProperty(_assertThisInitialized(_this), "getButtonAttributes", function (key) {
      return _this.state.getButtonAttributes(key);
    });

    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          allowZeroExpanded = _this$state.allowZeroExpanded,
          allowMultipleExpanded = _this$state.allowMultipleExpanded;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Provider, {
        value: {
          allowMultipleExpanded: allowMultipleExpanded,
          allowZeroExpanded: allowZeroExpanded,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(Provider, "defaultProps", {
  allowMultipleExpanded: false,
  allowZeroExpanded: false
});

var Consumer =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(Consumer, _React$PureComponent2);

  function Consumer() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, Consumer);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Consumer)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "renderChildren", function (container) {
      return container ? _this2.props.children(container) : null;
    });

    return _this2;
  }

  _createClass(Consumer, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Consumer, null, this.renderChildren);
    }
  }]);

  return Consumer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var Accordion =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Accordion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderAccordion", function (accordionContext) {
      var _this$props = _this.props,
          preExpanded = _this$props.preExpanded,
          allowMultipleExpanded = _this$props.allowMultipleExpanded,
          allowZeroExpanded = _this$props.allowZeroExpanded,
          onChange = _this$props.onChange,
          rest = _objectWithoutProperties(_this$props, ["preExpanded", "allowMultipleExpanded", "allowZeroExpanded", "onChange"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
        "data-accordion-component": "Accordion"
      }, rest));
    });

    return _this;
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Provider, {
        preExpanded: this.props.preExpanded,
        allowMultipleExpanded: this.props.allowMultipleExpanded,
        allowZeroExpanded: this.props.allowZeroExpanded,
        onChange: this.props.onChange
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, this.renderAccordion));
    }
  }]);

  return Accordion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Accordion, "defaultProps", {
  allowMultipleExpanded: undefined,
  allowZeroExpanded: undefined,
  onChange: undefined,
  className: 'accordion',
  children: undefined
});

_defineProperty(Accordion, "displayName", DisplayName$1.Accordion);

var DEFAULT = 0;
var counter = DEFAULT;
function nextUuid() {
  var current = counter;
  counter = counter + 1;
  return current;
}
function resetNextUuid() {
  counter = DEFAULT;
}

var Context$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

var Provider$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Provider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function () {
      _this.props.accordionContext.toggleExpanded(_this.props.uuid);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function (accordionContext) {
      var uuid = _this.props.uuid;
      var expanded = accordionContext.isItemExpanded(uuid);
      var disabled = accordionContext.isItemDisabled(uuid);
      var panelAttributes = accordionContext.getPanelAttributes(uuid);
      var headingAttributes = accordionContext.getHeadingAttributes(uuid);
      var buttonAttributes = accordionContext.getButtonAttributes(uuid);
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context$1.Provider, {
        value: {
          uuid: uuid,
          expanded: expanded,
          disabled: disabled,
          toggleExpanded: _this.toggleExpanded,
          panelAttributes: panelAttributes,
          headingAttributes: headingAttributes,
          buttonAttributes: buttonAttributes
        },
        children: _this.props.children
      });
    });

    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, this.renderChildren);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ProviderWrapper = function ProviderWrapper(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, function (accordionContext) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Provider$1, _extends({}, props, {
      accordionContext: accordionContext
    }));
  });
};
var Consumer$1 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Consumer, _React$PureComponent);

  function Consumer() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, Consumer);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Consumer)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "renderChildren", function (container) {
      return container ? _this2.props.children(container) : null;
    });

    return _this2;
  }

  _createClass(Consumer, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context$1.Consumer, null, this.renderChildren);
    }
  }]);

  return Consumer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var defaultProps = {
  className: 'accordion__item'
};

var AccordionItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AccordionItem, _React$Component);

  function AccordionItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "instanceUuid", nextUuid());

    return _this;
  }

  _createClass(AccordionItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$uuid = _this$props.uuid,
          uuid = _this$props$uuid === void 0 ? this.instanceUuid : _this$props$uuid,
          rest = _objectWithoutProperties(_this$props, ["uuid"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ProviderWrapper, {
        uuid: uuid
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
        "data-accordion-component": "AccordionItem"
      }, rest)));
    }
  }]);

  return AccordionItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(AccordionItem, "defaultProps", defaultProps);

_defineProperty(AccordionItem, "displayName", DisplayName$1.AccordionItem);

function getClosestAccordion(el) {
  return el && (el.matches('[data-accordion-component="Accordion"]') ? el : getClosestAccordion(el.parentElement));
}
function getSiblingButtons(item) {
  var parentAccordion = getClosestAccordion(item);
  return parentAccordion && Array.from(parentAccordion.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function focusFirstSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var first = siblings[0];

  if (first) {
    first.focus();
  }
}
function focusLastSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var last = siblings[siblings.length - 1];

  if (last) {
    last.focus();
  }
}
function focusNextSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var next = siblings[currentIndex + 1];

    if (next) {
      next.focus();
    }
  }
}
function focusPreviousSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var previous = siblings[currentIndex - 1];

    if (previous) {
      previous.focus();
    }
  }
}

var keycodes = {
  DOWN: '40',
  END: '35',
  ENTER: '13',
  HOME: '36',
  LEFT: '37',
  RIGHT: '39',
  SPACE: '32',
  UP: '38'
};

var defaultProps$1 = {
  className: 'accordion__button'
};
var AccordionItemButton =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AccordionItemButton, _React$PureComponent);

  function AccordionItemButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionItemButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItemButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (evt) {
      var keyCode = evt.which.toString();

      if (keyCode === keycodes.ENTER || keyCode === keycodes.SPACE) {
        evt.preventDefault();

        _this.props.toggleExpanded();
      }
      /* The following block is ignored from test coverage because at time
       * time of writing Jest/react-testing-library can not assert 'focus'
       * functionality.
       */
      // istanbul ignore next


      if (evt.target instanceof HTMLElement) {
        switch (keyCode) {
          case keycodes.HOME:
            {
              evt.preventDefault();
              focusFirstSiblingOf(evt.target);
              break;
            }

          case keycodes.END:
            {
              evt.preventDefault();
              focusLastSiblingOf(evt.target);
              break;
            }

          case keycodes.LEFT:
          case keycodes.UP:
            {
              evt.preventDefault();
              focusPreviousSiblingOf(evt.target);
              break;
            }

          case keycodes.RIGHT:
          case keycodes.DOWN:
            {
              evt.preventDefault();
              focusNextSiblingOf(evt.target);
              break;
            }

          default:

        }
      }
    });

    return _this;
  }

  _createClass(AccordionItemButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          toggleExpanded = _this$props.toggleExpanded,
          rest = _objectWithoutProperties(_this$props, ["toggleExpanded"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({}, rest, {
        // tslint:disable-next-line react-a11y-event-has-role
        onClick: toggleExpanded,
        onKeyDown: this.handleKeyPress,
        "data-accordion-component": "AccordionItemButton"
      }));
    }
  }]);

  return AccordionItemButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(AccordionItemButton, "defaultProps", defaultProps$1);

var AccordionItemButtonWrapper = function AccordionItemButtonWrapper(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, function (itemContext) {
    var toggleExpanded = itemContext.toggleExpanded,
        buttonAttributes = itemContext.buttonAttributes;
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AccordionItemButton, _extends({
      toggleExpanded: toggleExpanded
    }, props, buttonAttributes));
  });
};

AccordionItemButtonWrapper.displayName = DisplayName$1.AccordionItemButton;

var defaultProps$2 = {
  className: 'accordion__heading',
  'aria-level': 3
};
var SPEC_ERROR = "AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201CThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201D\n\n";
var AccordionItemHeading =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AccordionItemHeading, _React$PureComponent);

  function AccordionItemHeading() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionItemHeading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItemHeading)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", void 0);

    _defineProperty(_assertThisInitialized(_this), "setRef", function (ref) {
      _this.ref = ref;
    });

    return _this;
  }

  _createClass(AccordionItemHeading, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function VALIDATE(ref) {
      if (ref === undefined) {
        throw new Error('ref is undefined');
      }

      if (!(ref.childElementCount === 1 && ref.firstElementChild && ref.firstElementChild.getAttribute('data-accordion-component') === 'AccordionItemButton')) {
        throw new Error(SPEC_ERROR);
      }
    }
  }]);

  return AccordionItemHeading;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(AccordionItemHeading, "defaultProps", defaultProps$2);

var AccordionItemHeadingWrapper = function AccordionItemHeadingWrapper(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, function (itemContext) {
    var headingAttributes = itemContext.headingAttributes;
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AccordionItemHeading, _extends({}, props, headingAttributes));
  });
};

AccordionItemHeadingWrapper.displayName = DisplayName$1.AccordionItemHeading;

var defaultProps$3 = {
  className: 'accordion__panel'
};

var AccordionItemPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AccordionItemPanel, _React$Component);

  function AccordionItemPanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionItemPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItemPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function (_ref) {
      var panelAttributes = _ref.panelAttributes;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
        "data-accordion-component": "AccordionItemPanel"
      }, _this.props, panelAttributes));
    });

    return _this;
  }

  _createClass(AccordionItemPanel, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, this.renderChildren);
    }
  }]);

  return AccordionItemPanel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(AccordionItemPanel, "defaultProps", defaultProps$3);

_defineProperty(AccordionItemPanel, "displayName", DisplayName$1.AccordionItemPanel);

var AccordionItemState =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AccordionItemState, _React$Component);

  function AccordionItemState() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionItemState);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItemState)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function (itemContext) {
      var expanded = itemContext.expanded,
          disabled = itemContext.disabled;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, _this.props.children({
        expanded: expanded,
        disabled: disabled
      }));
    });

    return _this;
  }

  _createClass(AccordionItemState, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, this.renderChildren);
    }
  }]);

  return AccordionItemState;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);




/***/ }),

/***/ "./pages/faq.js":
/*!**********************!*\
  !*** ./pages/faq.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-accessible-accordion */ "./node_modules/react-accessible-accordion/dist/es/index.js");
/* harmony import */ var _Layouts_HomeLayouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layouts/HomeLayouts */ "./Layouts/HomeLayouts/index.js");
var _this = undefined,
    _jsxFileName = "/media/rizwan/EE107B06107AD4D5/RITESH_PROJECTS/virtualassistant/pages/faq.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Faq = function Faq() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx(_Layouts_HomeLayouts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "inner-banner ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container flex-column-reverse d-flex justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "inner-banner__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "FAQ"), __jsx("ul", {
    className: "thm-breadcrumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "thm-breadcrumb__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "thm-breadcrumb__link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, "Home")), __jsx("li", {
    className: "thm-breadcrumb__item current",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "thm-breadcrumb__link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "FAQ"))))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    allowZeroExpanded: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "What harsh truths do you prefer to ignore?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "Is free will real or just an illusion?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."))))), __jsx("div", {
    className: "col-md-6 col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    allowZeroExpanded: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, "What harsh truths do you prefer to ignore?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, "Is free will real or just an illusion?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ })

})
//# sourceMappingURL=faq.js.f04588778b3c176eb53b.hot-update.js.map