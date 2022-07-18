"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.regexp.exec.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.find-index.js");

require("core-js/modules/es.array.some.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.object.get-prototype-of.js");

var _lodash = _interopRequireDefault(require("lodash"));

var _NestedComponent2 = _interopRequireDefault(require("../_classes/nested/NestedComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TabsComponent = /*#__PURE__*/function (_NestedComponent) {
  _inherits(TabsComponent, _NestedComponent);

  var _super = _createSuper(TabsComponent);

  TabsComponent.schema = function schema() {
    for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
      extend[_key] = arguments[_key];
    }

    return _NestedComponent2["default"].schema.apply(_NestedComponent2["default"], [{
      label: 'Tabs',
      type: 'tabs',
      input: false,
      key: 'tabs',
      persistent: false,
      tableView: false,
      components: [{
        label: 'Tab 1',
        key: 'tab1',
        components: []
      }],
      verticalLayout: false
    }].concat(extend));
  };

  function TabsComponent() {
    var _this;

    _classCallCheck(this, TabsComponent);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.currentTab = 0;
    _this.noField = true;
    return _this;
  }

  var _proto = TabsComponent.prototype;

  _proto.init = function init() {
    var _this2 = this;

    this.components = [];
    this.tabs = [];

    _lodash["default"].each(this.component.components, function (tab, index) {
      _this2.tabs[index] = []; // Initialize empty tabs.

      tab.components = tab.components || [];

      _lodash["default"].each(tab.components, function (comp) {
        var component = _this2.createComponent(comp);

        component.tab = index;

        _this2.tabs[index].push(component);
      });
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    return _get(_getPrototypeOf(TabsComponent.prototype), "render", this).call(this, this.renderTemplate('tab', {
      tabKey: this.tabKey,
      tabLikey: this.tabLikey,
      tabLinkKey: this.tabLinkKey,
      currentTab: this.currentTab,
      tabComponents: this.tabs.map(function (tab) {
        return _this3.renderComponents(tab);
      })
    }, this.options.flatten || this.options.pdf ? 'flat' : null));
  };

  _proto.attach = function attach(element) {
    var _this$loadRefs,
        _this4 = this;

    this.loadRefs(element, (_this$loadRefs = {}, _defineProperty(_this$loadRefs, this.tabLinkKey, 'multiple'), _defineProperty(_this$loadRefs, this.tabKey, 'multiple'), _defineProperty(_this$loadRefs, this.tabLikey, 'multiple'), _this$loadRefs));
    ['change', 'error'].forEach(function (event) {
      return _this4.on(event, _this4.handleTabsValidation.bind(_this4));
    });

    var superAttach = _get(_getPrototypeOf(TabsComponent.prototype), "attach", this).call(this, element);

    this.refs[this.tabLinkKey].forEach(function (tabLink, index) {
      _this4.addEventListener(tabLink, 'click', function (event) {
        event.preventDefault();

        _this4.setTab(index);
      });
    });
    this.refs[this.tabKey].forEach(function (tab, index) {
      _this4.attachComponents(tab, _this4.tabs[index], _this4.component.components[index].components);
    });
    return superAttach;
  };

  _proto.detach = function detach(all) {
    _get(_getPrototypeOf(TabsComponent.prototype), "detach", this).call(this, all);
  }
  /**
   * Set the current tab.
   *
   * @param index
   */
  ;

  _proto.setTab = function setTab(index) {
    var _this5 = this;

    if (!this.tabs || !this.tabs[index] || !this.refs[this.tabKey] || !this.refs[this.tabKey][index]) {
      return;
    }

    this.currentTab = index;

    _lodash["default"].each(this.refs[this.tabKey], function (tab) {
      _this5.removeClass(tab, 'formio-tab-panel-active');

      tab.style.display = 'none';
    });

    this.addClass(this.refs[this.tabKey][index], 'formio-tab-panel-active');
    this.refs[this.tabKey][index].style.display = 'block';

    _lodash["default"].each(this.refs[this.tabLinkKey], function (tabLink, tabIndex) {
      if (_this5.refs[_this5.tabLinkKey][tabIndex]) {
        _this5.removeClass(tabLink, 'formio-tab-link-active');
      }

      if (_this5.refs[_this5.tabLikey][tabIndex]) {
        _this5.removeClass(_this5.refs[_this5.tabLikey][tabIndex], 'formio-tab-link-container-active');
      }
    });

    if (this.refs[this.tabLikey][index]) {
      this.addClass(this.refs[this.tabLikey][index], 'formio-tab-link-container-active');
    }

    if (this.refs[this.tabLinkKey][index]) {
      this.addClass(this.refs[this.tabLinkKey][index], 'formio-tab-link-active');
    }

    this.triggerChange();
  };

  _proto.beforeFocus = function beforeFocus(component) {
    if ('beforeFocus' in this.parent) {
      this.parent.beforeFocus(this);
    }

    var tabIndex = this.tabs.findIndex(function (tab) {
      return tab.some(function (comp) {
        return comp === component;
      });
    });

    if (tabIndex !== -1 && this.currentTab !== tabIndex) {
      this.setTab(tabIndex);
    }
  };

  _proto.setErrorClasses = function setErrorClasses(elements, dirty, hasErrors, hasMessages) {
    var _this6 = this;

    var element = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.element;

    if (this.component.modalEdit) {
      _get(_getPrototypeOf(TabsComponent.prototype), "setErrorClasses", this).call(this, elements, dirty, hasErrors, hasMessages, element);
    }

    elements.forEach(function (element) {
      _this6.addClass(element, 'is-invalid');

      if (element.getAttribute('ref') !== 'openModal') {
        if (_this6.options.highlightErrors) {
          _this6.addClass(element, 'tab-error');
        } else {
          _this6.addClass(element, 'has-error');
        }
      }
    });
  };

  _proto.clearErrorClasses = function clearErrorClasses(elements) {
    var _this7 = this;

    if (this.options.server || !this.rendered) {
      return;
    }

    if (this.component.modalEdit) {
      var element = Array.isArray(elements) || elements instanceof NodeList ? this.element : elements;

      _get(_getPrototypeOf(TabsComponent.prototype), "clearErrorClasses", this).call(this, element);
    }

    elements = Array.isArray(elements) || elements instanceof NodeList ? elements : [elements];
    elements.forEach(function (element) {
      _this7.removeClass(element, 'is-invalid');

      _this7.removeClass(element, 'tab-error');

      _this7.removeClass(element, 'has-error');
    });
  };

  _proto.handleTabsValidation = function handleTabsValidation() {
    if (!this.refs[this.tabLinkKey] || !this.refs[this.tabLinkKey].length || !this.tabs.length) {
      return;
    }

    this.clearErrorClasses(this.refs[this.tabLinkKey]);
    var invalidTabsIndexes = this.tabs.reduce(function (invalidTabs, tab, tabIndex) {
      var hasComponentWithError = tab.some(function (comp) {
        return !!comp.error;
      });
      return hasComponentWithError ? [].concat(_toConsumableArray(invalidTabs), [tabIndex]) : invalidTabs;
    }, []);

    if (!invalidTabsIndexes.length) {
      return;
    }

    var invalidTabs = _toConsumableArray(this.refs[this.tabLinkKey]).filter(function (_, tabIndex) {
      return invalidTabsIndexes.includes(tabIndex);
    });

    this.setErrorClasses(invalidTabs);
  };

  _createClass(TabsComponent, [{
    key: "defaultSchema",
    get: function get() {
      return TabsComponent.schema();
    }
  }, {
    key: "schema",
    get: function get() {
      var _this8 = this;

      var schema = _get(_getPrototypeOf(TabsComponent.prototype), "schema", this); // We need to clone this because the builder uses the "components" reference and this would reset that reference.


      var components = _lodash["default"].cloneDeep(this.component.components);

      schema.components = components.map(function (tab, index) {
        tab.components = _this8.tabs[index].map(function (component) {
          return component.schema;
        });
        return tab;
      });
      return schema;
    }
  }, {
    key: "tabKey",
    get: function get() {
      return "tab-".concat(this.key);
    }
  }, {
    key: "tabLikey",
    get: function get() {
      return "tabLi-".concat(this.key);
    }
  }, {
    key: "tabLinkKey",
    get: function get() {
      return "tabLink-".concat(this.key);
    }
  }], [{
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Tabs',
        group: 'layout',
        icon: 'folder-o',
        weight: 50,
        documentation: '/userguide/forms/layout-components#tabs',
        schema: TabsComponent.schema()
      };
    }
  }]);

  return TabsComponent;
}(_NestedComponent2["default"]);

exports["default"] = TabsComponent;