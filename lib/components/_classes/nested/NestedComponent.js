'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.reflect.set.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.number.parse-int.js");

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.array.find-index.js");

require("core-js/modules/es.array.splice.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.every.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.object.get-prototype-of.js");

var _lodash = _interopRequireDefault(require("lodash"));

var _Field2 = _interopRequireDefault(require("../field/Field"));

var _Components = _interopRequireDefault(require("../../Components"));

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NestedComponent = /*#__PURE__*/function (_Field) {
  _inherits(NestedComponent, _Field);

  var _super = _createSuper(NestedComponent);

  NestedComponent.schema = function schema() {
    for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
      extend[_key] = arguments[_key];
    }

    return _Field2["default"].schema.apply(_Field2["default"], [{
      tree: false,
      lazyLoad: false
    }].concat(extend));
  };

  function NestedComponent(component, options, data) {
    var _this;

    _classCallCheck(this, NestedComponent);

    _this = _super.call(this, component, options, data);
    _this.type = 'components';
    _this._collapsed = !!_this.component.collapsed;
    return _this;
  }

  var _proto = NestedComponent.prototype;

  _proto.collapse = function collapse(value) {
    var promise = this.redraw();

    if (!value && !this.pristine) {
      this.checkValidity(this.data, true);
    }

    return promise;
  };

  _proto.componentContext = function componentContext() {
    return this._data;
  };

  _proto.getComponents = function getComponents() {
    return this.components || [];
  }
  /**
   * Perform a deep iteration over every component, including those
   * within other container based components.
   *
   * @param {function} fn - Called for every component.
   */
  ;

  _proto.everyComponent = function everyComponent(fn, options) {
    var components = this.getComponents();

    _lodash["default"].each(components, function (component, index) {
      if (fn(component, components, index) === false) {
        return false;
      }

      if (typeof component.everyComponent === 'function') {
        if (component.everyComponent(fn, options) === false) {
          return false;
        }
      }
    });
  };

  _proto.hasComponent = function hasComponent(component) {
    var result = false;
    this.everyComponent(function (comp) {
      if (comp === component) {
        result = true;
        return false;
      }
    });
    return result;
  };

  _proto.flattenComponents = function flattenComponents() {
    var result = {};
    this.everyComponent(function (component) {
      result[component.component.flattenAs || component.key] = component;
    });
    return result;
  }
  /**
   * Perform an iteration over each component within this container component.
   *
   * @param {function} fn - Called for each component
   */
  ;

  _proto.eachComponent = function eachComponent(fn) {
    _lodash["default"].each(this.getComponents(), function (component, index) {
      if (fn(component, index) === false) {
        return false;
      }
    });
  }
  /**
   * Returns a component provided a key. This performs a deep search within the
   * component tree.
   *
   * @param {string} key - The key of the component to retrieve.
   * @param {function} fn - Called with the component once found.
   * @return {Object} - The component that is located.
   */
  ;

  _proto.getComponent = function getComponent(path, fn, originalPath) {
    originalPath = originalPath || (0, _utils.getStringFromComponentPath)(path);
    path = (0, _utils.getArrayFromComponentPath)(path);
    var pathStr = originalPath;

    var newPath = _lodash["default"].clone(path);

    var key = newPath.shift();
    var remainingPath = newPath;
    var comp = null;
    var possibleComp = null;

    if (_lodash["default"].isNumber(key)) {
      key = remainingPath.shift();
    }

    if (!_lodash["default"].isString(key)) {
      return comp;
    }

    this.everyComponent(function (component, components) {
      var matchPath = component.hasInput && component.path ? pathStr.includes(component.path) : true;

      if (component.component.key === key) {
        possibleComp = component;

        if (matchPath) {
          comp = component;

          if (remainingPath.length > 0 && 'getComponent' in component) {
            comp = component.getComponent(remainingPath, fn, originalPath);
          } else if (fn) {
            fn(component, components);
          }

          return false;
        }
      }
    });

    if (!comp) {
      comp = possibleComp;
    }

    return comp;
  }
  /**
   * Return a component provided the Id of the component.
   *
   * @param {string} id - The Id of the component.
   * @param {function} fn - Called with the component once it is retrieved.
   * @return {Object} - The component retrieved.
   */
  ;

  _proto.getComponentById = function getComponentById(id, fn) {
    var comp = null;
    this.everyComponent(function (component, components) {
      if (component.id === id) {
        comp = component;

        if (fn) {
          fn(component, components);
        }

        return false;
      }
    });
    return comp;
  }
  /**
   * Return a path of component's value.
   *
   * @param {Object} component - The component instance.
   * @return {string} - The component's value path.
   */
  ;

  _proto.calculateComponentPath = function calculateComponentPath(component) {
    var path = '';

    if (component.component.key) {
      var thisPath = this;

      while (thisPath && !thisPath.allowData && thisPath.parent) {
        thisPath = thisPath.parent;
      }

      var rowIndex = component.row ? "[".concat(Number.parseInt(component.row), "]") : '';
      path = thisPath.path ? "".concat(thisPath.path).concat(rowIndex, ".") : '';
      path += component._parentPath && component.component.shouldIncludeSubFormPath ? component._parentPath : '';
      path += component.component.key;
      return path;
    }
  }
  /**
   * Create a new component and add it to the components array.
   *
   * @param component
   * @param data
   */
  ;

  _proto.createComponent = function createComponent(component, options, data, before) {
    var _options;

    if (!component) {
      return;
    }

    options = options || this.options;
    data = data || this.data;
    options.parent = this;
    options.parentVisible = this.visible;
    options.root = ((_options = options) === null || _options === void 0 ? void 0 : _options.root) || this.root || this;
    options.localRoot = this.localRoot;
    options.skipInit = true;

    if (!this.isInputComponent && this.component.shouldIncludeSubFormPath) {
      component.shouldIncludeSubFormPath = true;
    }

    var comp = _Components["default"].create(component, options, data, true);

    var path = this.calculateComponentPath(comp);

    if (path) {
      comp.path = path;
    }

    comp.init();

    if (component.internal) {
      return comp;
    }

    if (before) {
      var index = _lodash["default"].findIndex(this.components, {
        id: before.id
      });

      if (index !== -1) {
        this.components.splice(index, 0, comp);
      } else {
        this.components.push(comp);
      }
    } else {
      this.components.push(comp);
    }

    return comp;
  };

  _proto.getContainer = function getContainer() {
    return this.element;
  };

  _proto.init = function init() {
    this.components = this.components || [];
    this.addComponents();
    return _get(_getPrototypeOf(NestedComponent.prototype), "init", this).call(this);
  }
  /**
   *
   * @param element
   * @param data
   */
  ;

  _proto.addComponents = function addComponents(data, options) {
    var _this2 = this;

    data = data || this.data;
    options = options || this.options;

    if (options.components) {
      this.components = options.components;
    } else {
      var components = this.hook('addComponents', this.componentComponents, this) || [];
      components.forEach(function (component) {
        return _this2.addComponent(component, data);
      });
    }
  }
  /**
   * Add a new component to the components array.
   *
   * @param {Object} component - The component JSON schema to add.
   * @param {Object} data - The submission data object to house the data for this component.
   * @param {HTMLElement} before - A DOM element to insert this element before.
   * @return {Component} - The created component instance.
   */
  ;

  _proto.addComponent = function addComponent(component, data, before, noAdd) {
    data = data || this.data;

    if (this.options.parentPath) {
      component.shouldIncludeSubFormPath = true;
    }

    component = this.hook('addComponent', component, data, before, noAdd);
    var comp = this.createComponent(component, this.options, data, before ? before : null);

    if (noAdd) {
      return comp;
    }

    return comp;
  };

  _proto.beforeFocus = function beforeFocus() {
    if (this.parent && 'beforeFocus' in this.parent) {
      this.parent.beforeFocus(this);
    }
  };

  _proto.render = function render(children) {
    // If already rendering, don't re-render.
    return _get(_getPrototypeOf(NestedComponent.prototype), "render", this).call(this, children || this.renderTemplate(this.templateName, {
      children: !this.visible ? '' : this.renderComponents(),
      nestedKey: this.nestedKey,
      collapsed: this.options.pdf ? false : this.collapsed
    }));
  };

  _proto.renderComponents = function renderComponents(components) {
    components = components || this.getComponents();
    var children = components.map(function (component) {
      return component.render();
    });
    return this.renderTemplate('components', {
      children: children,
      components: components
    });
  };

  _proto.attach = function attach(element) {
    var _this3 = this;

    var superPromise = _get(_getPrototypeOf(NestedComponent.prototype), "attach", this).call(this, element);

    this.loadRefs(element, _defineProperty({
      header: 'single',
      collapsed: this.collapsed
    }, this.nestedKey, 'single'));

    var childPromise = _nativePromiseOnly["default"].resolve();

    if (this.refs[this.nestedKey]) {
      childPromise = this.attachComponents(this.refs[this.nestedKey]);
    }

    if (this.component.collapsible && this.refs.header) {
      this.addEventListener(this.refs.header, 'click', function () {
        _this3.collapsed = !_this3.collapsed;
      });
      this.addEventListener(this.refs.header, 'keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
          e.preventDefault();
          _this3.collapsed = !_this3.collapsed;
        }
      });
    }

    return _nativePromiseOnly["default"].all([superPromise, childPromise]);
  };

  _proto.attachComponents = function attachComponents(element, components, container) {
    components = components || this.components;
    container = container || this.component.components;
    element = this.hook('attachComponents', element, components, container, this);

    if (!element) {
      // Return a non-resolving promise.
      return new _nativePromiseOnly["default"](function () {});
    }

    var index = 0;
    var promises = [];
    Array.prototype.slice.call(element.children).forEach(function (child) {
      if (!child.getAttribute('data-noattach') && components[index]) {
        promises.push(components[index].attach(child));
        index++;
      }
    });
    return _nativePromiseOnly["default"].all(promises);
  }
  /**
   * Remove a component from the components array.
   *
   * @param {Component} component - The component to remove from the components.
   * @param {Array<Component>} components - An array of components to remove this component from.
   */
  ;

  _proto.removeComponent = function removeComponent(component, components) {
    components = components || this.components;
    component.destroy();

    _lodash["default"].remove(components, {
      id: component.id
    });
  }
  /**
   * Removes a component provided the API key of that component.
   *
   * @param {string} key - The API key of the component to remove.
   * @param {function} fn - Called once the component is removed.
   * @return {null}
   */
  ;

  _proto.removeComponentByKey = function removeComponentByKey(key, fn) {
    var _this4 = this;

    var comp = this.getComponent(key, function (component, components) {
      _this4.removeComponent(component, components);

      if (fn) {
        fn(component, components);
      }
    });

    if (!comp) {
      if (fn) {
        fn(null);
      }

      return null;
    }
  }
  /**
   * Removes a component provided the Id of the component.
   *
   * @param {string} id - The Id of the component to remove.
   * @param {function} fn - Called when the component is removed.
   * @return {null}
   */
  ;

  _proto.removeComponentById = function removeComponentById(id, fn) {
    var _this5 = this;

    var comp = this.getComponentById(id, function (component, components) {
      _this5.removeComponent(component, components);

      if (fn) {
        fn(component, components);
      }
    });

    if (!comp) {
      if (fn) {
        fn(null);
      }

      return null;
    }
  };

  _proto.updateValue = function updateValue(value) {
    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.components.reduce(function (changed, comp) {
      return comp.updateValue(null, flags) || changed;
    }, _get(_getPrototypeOf(NestedComponent.prototype), "updateValue", this).call(this, value, flags));
  };

  _proto.shouldSkipValidation = function shouldSkipValidation(data, dirty, row) {
    // Nested components with no input should not be validated.
    if (!this.component.input) {
      return true;
    } else {
      return _get(_getPrototypeOf(NestedComponent.prototype), "shouldSkipValidation", this).call(this, data, dirty, row);
    }
  };

  _proto.checkData = function checkData(data, flags, row, components) {
    if (this.builderMode) {
      return true;
    }

    data = data || this.rootValue;
    flags = flags || {};
    row = row || this.data;
    components = components && _lodash["default"].isArray(components) ? components : this.getComponents();
    var isValid = components.reduce(function (valid, comp) {
      return comp.checkData(data, flags, row) && valid;
    }, _get(_getPrototypeOf(NestedComponent.prototype), "checkData", this).call(this, data, flags, row));
    this.checkModal(isValid, this.isDirty);
    return isValid;
  };

  _proto.checkConditions = function checkConditions(data, flags, row) {
    // check conditions of parent component first, because it may influence on visibility of it's children
    var check = _get(_getPrototypeOf(NestedComponent.prototype), "checkConditions", this).call(this, data, flags, row); //row data of parent component not always corresponds to row of nested components, use comp.data as row data for children instead


    this.getComponents().forEach(function (comp) {
      return comp.checkConditions(data, flags, comp.data);
    });
    return check;
  };

  _proto.clearOnHide = function clearOnHide(show) {
    _get(_getPrototypeOf(NestedComponent.prototype), "clearOnHide", this).call(this, show);

    if (this.component.clearOnHide) {
      if (this.allowData && !this.hasValue()) {
        this.dataValue = this.defaultValue;
      }

      if (this.hasValue()) {
        this.restoreComponentsContext();
      }
    }

    this.getComponents().forEach(function (component) {
      return component.clearOnHide(show);
    });
  };

  _proto.restoreComponentsContext = function restoreComponentsContext() {
    var _this6 = this;

    this.getComponents().forEach(function (component) {
      return component.data = _this6.dataValue;
    });
  }
  /**
   * Allow components to hook into the next page trigger to perform their own logic.
   *
   * @return {*}
   */
  ;

  _proto.beforePage = function beforePage(next) {
    return _nativePromiseOnly["default"].all(this.getComponents().map(function (comp) {
      return comp.beforePage(next);
    }));
  }
  /**
   * Allow components to hook into the submission to provide their own async data.
   *
   * @return {*}
   */
  ;

  _proto.beforeSubmit = function beforeSubmit() {
    return _nativePromiseOnly["default"].all(this.getComponents().map(function (comp) {
      return comp.beforeSubmit();
    }));
  };

  _proto.calculateValue = function calculateValue(data, flags, row) {
    // Do not iterate into children and calculateValues if this nested component is conditionally hidden.
    if (!this.conditionallyVisible()) {
      return false;
    }

    return this.getComponents().reduce(function (changed, comp) {
      return comp.calculateValue(data, flags, row) || changed;
    }, _get(_getPrototypeOf(NestedComponent.prototype), "calculateValue", this).call(this, data, flags, row));
  };

  _proto.isLastPage = function isLastPage() {
    return this.pages.length - 1 === this.page;
  };

  _proto.isValid = function isValid(data, dirty) {
    return this.getComponents().reduce(function (valid, comp) {
      return comp.isValid(data, dirty) && valid;
    }, _get(_getPrototypeOf(NestedComponent.prototype), "isValid", this).call(this, data, dirty));
  };

  _proto.checkValidity = function checkValidity(data, dirty, row, silentCheck) {
    if (!this.checkCondition(row, data)) {
      this.setCustomValidity('');
      return true;
    }

    var isValid = this.getComponents().reduce(function (check, comp) {
      return comp.checkValidity(data, dirty, row, silentCheck) && check;
    }, _get(_getPrototypeOf(NestedComponent.prototype), "checkValidity", this).call(this, data, dirty, row, silentCheck));
    this.checkModal(isValid, dirty);
    return isValid;
  };

  _proto.checkAsyncValidity = function checkAsyncValidity(data, dirty, row, silentCheck) {
    var _this7 = this;

    return this.ready.then(function () {
      var promises = [_get(_getPrototypeOf(NestedComponent.prototype), "checkAsyncValidity", _this7).call(_this7, data, dirty, row, silentCheck)];

      _this7.eachComponent(function (component) {
        return promises.push(component.checkAsyncValidity(data, dirty, row, silentCheck));
      });

      return _nativePromiseOnly["default"].all(promises).then(function (results) {
        return results.reduce(function (valid, result) {
          return valid && result;
        }, true);
      });
    });
  };

  _proto.setPristine = function setPristine(pristine) {
    _get(_getPrototypeOf(NestedComponent.prototype), "setPristine", this).call(this, pristine);

    this.getComponents().forEach(function (comp) {
      return comp.setPristine(pristine);
    });
  };

  _proto.detach = function detach() {
    this.components.forEach(function (component) {
      component.detach();
    });

    _get(_getPrototypeOf(NestedComponent.prototype), "detach", this).call(this);
  };

  _proto.clear = function clear() {
    this.components.forEach(function (component) {
      component.clear();
    });

    _get(_getPrototypeOf(NestedComponent.prototype), "clear", this).call(this);
  };

  _proto.destroy = function destroy() {
    this.destroyComponents();

    _get(_getPrototypeOf(NestedComponent.prototype), "destroy", this).call(this);
  };

  _proto.destroyComponents = function destroyComponents() {
    var _this8 = this;

    var components = this.getComponents().slice();
    components.forEach(function (comp) {
      return _this8.removeComponent(comp, _this8.components);
    });
    this.components = [];
  };

  _proto.getValue = function getValue() {
    return this.data;
  };

  _proto.resetValue = function resetValue() {
    _get(_getPrototypeOf(NestedComponent.prototype), "resetValue", this).call(this);

    this.getComponents().forEach(function (comp) {
      return comp.resetValue();
    });
    this.setPristine(true);
  };

  _proto.setNestedValue = function setNestedValue(component, value) {
    var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    component._data = this.componentContext(component);

    if (component.type === 'button') {
      return false;
    }

    if (value && component.hasValue(value)) {
      return component.setValue(_lodash["default"].get(value, component.key), flags);
    } else if (component.type === 'components') {
      return component.setValue(value, flags);
    } else if ((!this.rootPristine || component.visible) && component.shouldAddDefaultValue) {
      flags.noValidate = !flags.dirty;
      flags.resetValue = true;
      return component.setValue(component.defaultValue, flags);
    }
  };

  _proto.setValue = function setValue(value) {
    var _this9 = this;

    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!value) {
      return false;
    }

    if (value.submitAsDraft && !value.submit) {
      flags.noValidate = true;
    }

    return this.getComponents().reduce(function (changed, component) {
      return _this9.setNestedValue(component, value, flags, changed) || changed;
    }, false);
  };

  _createClass(NestedComponent, [{
    key: "defaultSchema",
    get: function get() {
      return NestedComponent.schema();
    }
  }, {
    key: "schema",
    get: function get() {
      var schema = _get(_getPrototypeOf(NestedComponent.prototype), "schema", this);

      var components = _lodash["default"].uniqBy(this.getComponents(), 'component.key');

      schema.components = _lodash["default"].map(components, 'schema');
      return schema;
    }
  }, {
    key: "collapsed",
    get: function get() {
      return this._collapsed;
    },
    set: function set(value) {
      this._collapsed = value;
      this.collapse(value);
    }
  }, {
    key: "visible",
    get: function get() {
      return _get(_getPrototypeOf(NestedComponent.prototype), "visible", this);
    },
    set: function set(value) {
      // DO NOT CALL super here.  There is an issue where clearOnHide was getting triggered with
      // subcomponents because the "parentVisible" flag was set to false when it should really be
      // set to true.
      var visibilityChanged = this._visible !== value;
      this._visible = value;
      var isVisible = this.visible;
      var forceShow = this.options.show && this.options.show[this.component.key];
      var forceHide = this.options.hide && this.options.hide[this.component.key];
      this.components.forEach(function (component) {
        // Set the parent visibility first since we may have nested components within nested components
        // and they need to be able to determine their visibility based on the parent visibility.
        component.parentVisible = isVisible;
        var conditionallyVisible = component.conditionallyVisible();

        if (forceShow || conditionallyVisible) {
          component.visible = true;
        } else if (forceHide || !isVisible || !conditionallyVisible) {
          component.visible = false;
        } // If hiding a nested component, clear all errors below.


        if (!component.visible) {
          component.error = '';
        }
      });

      if (visibilityChanged) {
        this.clearOnHide();
        this.redraw();
      }
    }
  }, {
    key: "parentVisible",
    get: function get() {
      return _get(_getPrototypeOf(NestedComponent.prototype), "parentVisible", this);
    },
    set: function set(value) {
      var _this10 = this;

      _set(_getPrototypeOf(NestedComponent.prototype), "parentVisible", value, this, true);

      this.components.forEach(function (component) {
        return component.parentVisible = _this10.visible;
      });
    }
  }, {
    key: "disabled",
    get: function get() {
      return _get(_getPrototypeOf(NestedComponent.prototype), "disabled", this);
    },
    set: function set(disabled) {
      _set(_getPrototypeOf(NestedComponent.prototype), "disabled", disabled, this, true);

      this.components.forEach(function (component) {
        return component.parentDisabled = disabled;
      });
    }
  }, {
    key: "parentDisabled",
    get: function get() {
      return _get(_getPrototypeOf(NestedComponent.prototype), "parentDisabled", this);
    },
    set: function set(value) {
      var _this11 = this;

      _set(_getPrototypeOf(NestedComponent.prototype), "parentDisabled", value, this, true);

      this.components.forEach(function (component) {
        component.parentDisabled = _this11.disabled;
      });
    }
  }, {
    key: "ready",
    get: function get() {
      return _nativePromiseOnly["default"].all(this.getComponents().map(function (component) {
        return component.ready;
      }));
    }
  }, {
    key: "currentForm",
    get: function get() {
      return _get(_getPrototypeOf(NestedComponent.prototype), "currentForm", this);
    },
    set: function set(instance) {
      _set(_getPrototypeOf(NestedComponent.prototype), "currentForm", instance, this, true);

      this.getComponents().forEach(function (component) {
        component.currentForm = instance;
      });
    }
  }, {
    key: "rowIndex",
    get: function get() {
      return this._rowIndex;
    },
    set: function set(value) {
      this._rowIndex = value;
      this.eachComponent(function (component) {
        component.rowIndex = value;
      });
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(value) {
      var _this12 = this;

      this._data = value;
      this.eachComponent(function (component) {
        component.data = _this12.componentContext(component);
      });
    }
  }, {
    key: "componentComponents",
    get: function get() {
      return this.component.components || [];
    }
  }, {
    key: "nestedKey",
    get: function get() {
      return "nested-".concat(this.key);
    }
  }, {
    key: "templateName",
    get: function get() {
      return 'container';
    }
  }, {
    key: "isPristine",
    get: function get() {
      return this.pristine && this.getComponents().every(function (c) {
        return c.isPristine;
      });
    }
  }, {
    key: "isDirty",
    get: function get() {
      return this.dirty && this.getComponents().every(function (c) {
        return c.isDirty;
      });
    }
  }, {
    key: "errors",
    get: function get() {
      var thisErrors = this.error ? [this.error] : [];
      return this.getComponents().reduce(function (errors, comp) {
        return errors.concat(comp.errors || []);
      }, thisErrors).filter(function (err) {
        return err.level !== 'hidden';
      });
    }
  }, {
    key: "dataReady",
    get: function get() {
      return _nativePromiseOnly["default"].all(this.getComponents().map(function (component) {
        return component.dataReady;
      }));
    }
  }, {
    key: "lazyLoad",
    get: function get() {
      var _this$component$lazyL;

      return (_this$component$lazyL = this.component.lazyLoad) !== null && _this$component$lazyL !== void 0 ? _this$component$lazyL : false;
    }
  }]);

  return NestedComponent;
}(_Field2["default"]);

exports["default"] = NestedComponent;