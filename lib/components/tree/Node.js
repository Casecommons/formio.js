"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.some.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.object.define-property.js");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Node = /*#__PURE__*/function () {
  function Node(parent) {
    var _this = this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$data = _ref.data,
        data = _ref$data === void 0 ? {} : _ref$data,
        _ref$children = _ref.children,
        children = _ref$children === void 0 ? [] : _ref$children;

    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        checkNode = _ref2.checkNode,
        createComponents = _ref2.createComponents,
        _ref2$isNew = _ref2.isNew,
        isNew = _ref2$isNew === void 0 ? true : _ref2$isNew,
        removeComponents = _ref2.removeComponents,
        _ref2$parentPath = _ref2.parentPath,
        parentPath = _ref2$parentPath === void 0 ? '' : _ref2$parentPath;

    _classCallCheck(this, Node);

    this.parent = parent;
    this.previousData = {};
    this.persistentData = _lodash["default"].cloneDeep(data);
    this["new"] = isNew;
    this.createComponents = createComponents;
    this.checkNode = checkNode;
    this.removeComponents = removeComponents;
    this.revertAvailable = false;
    this.editing = false;
    this.collapsed = false;
    this.components = [];
    this.children = [];
    this.parentPath = parentPath;
    this.resetData();
    this.children = children.map(function (child, index) {
      return new Node(_this, child, {
        checkNode: checkNode,
        createComponents: createComponents,
        isNew: false,
        removeComponents: removeComponents,
        parentPath: _this.getChildrenPath(index)
      });
    });
  }

  var _proto = Node.prototype;

  _proto.getChildrenPath = function getChildrenPath(index) {
    return this.parentPath ? "".concat(this.parentPath, ".children[").concat(index, "]") : '';
  };

  _proto.eachChild = function eachChild(iteratee) {
    iteratee(this);
    this.children.forEach(function (child) {
      return child.eachChild(iteratee);
    });
    return this;
  };

  _proto.getComponents = function getComponents() {
    return this.children.reduce(function (components, child) {
      return components.concat(child.getComponents());
    }, this.components);
  };

  _proto.validateNode = function validateNode() {
    var _this2 = this;

    var valid = true;
    this.getComponents().forEach(function (comp) {
      comp.setPristine(false);
      valid &= comp.checkValidity(null, false, _this2.persistentData);
    });
    return valid;
  };

  _proto.addChild = function addChild() {
    if (this["new"]) {
      return null;
    }

    var child = new Node(this, {}, {
      checkNode: this.checkNode,
      createComponents: this.createComponents,
      isNew: true,
      removeComponents: this.removeComponents,
      parentPath: this.getChildrenPath(this.children.length)
    });
    this.children = this.children.concat(child);
    return child;
  };

  _proto.removeChild = function removeChild(childToRemove) {
    if (!this["new"]) {
      this.children = this.children.filter(function (child) {
        return child !== childToRemove;
      });
    }

    return this;
  };

  _proto.edit = function edit() {
    if (this["new"]) {
      return this;
    }

    this.editing = true;
    return this.resetData();
  };

  _proto.save = function save() {
    var isValid = this.validateNode();

    if (this.changing && isValid) {
      if (this["new"]) {
        this["new"] = false;
      } else {
        this.editing = false;
        this.revertAvailable = true;
      }

      this.commitData();
    }

    return isValid;
  };

  _proto.cancel = function cancel() {
    if (this["new"]) {
      this.remove();
    } else if (this.editing) {
      this.editing = false;
      this.resetData();
    }

    return this;
  };

  _proto.remove = function remove() {
    this.parent.removeChild(this);
    this.parent = null;
    this.clearComponents();
    return this;
  };

  _proto.revert = function revert() {
    if (!this.revertAvailable) {
      return this;
    }

    this.data = this.previousData;
    return this.commitData();
  };

  _proto.commitData = function commitData() {
    this.previousData = this.persistentData;
    this.persistentData = _lodash["default"].cloneDeep(this.data);
    this.clearComponents();
    return this;
  };

  _proto.resetData = function resetData() {
    this.data = _lodash["default"].cloneDeep(this.persistentData);
    this.updateComponentsContext();
    return this;
  };

  _proto.updateComponentsContext = function updateComponentsContext() {
    if (this.changing) {
      this.instantiateComponents();
    } else {
      this.clearComponents();
    }

    return this;
  };

  _proto.instantiateComponents = function instantiateComponents() {
    var _this3 = this;

    this.components = this.createComponents(this.data, this);
    this.components.forEach(function (component) {
      if (_this3.parentPath) {
        var path = _this3.calculateComponentPath(component);

        component.path = path;
      }
    });
    this.checkNode(this);
  };

  _proto.clearComponents = function clearComponents() {
    this.removeComponents(this.components);
    this.components = [];
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
      path = "".concat(this.parentPath, ".data.").concat(component.component.key);
    }

    return path;
  };

  _createClass(Node, [{
    key: "value",
    get: function get() {
      return this["new"] ? null // Check the special case for empty root node.
      : {
        data: _lodash["default"].cloneDeep(this.persistentData),
        children: this.children.filter(function (child) {
          return !child["new"];
        }).map(function (child) {
          return child.value;
        })
      };
    }
  }, {
    key: "isRoot",
    get: function get() {
      return this.parent === null;
    }
  }, {
    key: "changing",
    get: function get() {
      return this["new"] || this.editing;
    }
  }, {
    key: "hasChangingChildren",
    get: function get() {
      return this.changin || this.children.some(function (child) {
        return child.hasChangingChildren;
      });
    }
  }, {
    key: "hasData",
    get: function get() {
      return !_lodash["default"].isEmpty(this.persistentData);
    }
  }, {
    key: "hasChildren",
    get: function get() {
      return Array.isArray(this.children) && this.children.length > 0;
    }
  }]);

  return Node;
}();

exports["default"] = Node;