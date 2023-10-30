"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.regexp.exec.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressProvider = void 0;
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
var _lodash = _interopRequireDefault(require("lodash"));
var _Formio = require("../../Formio");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AddressProvider = exports.AddressProvider = /*#__PURE__*/function () {
  function AddressProvider() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, AddressProvider);
    this.beforeMergeOptions(options);
    this.options = _lodash["default"].merge({}, this.defaultOptions, options);
  }
  _createClass(AddressProvider, [{
    key: "beforeMergeOptions",
    value: function beforeMergeOptions() {
      return;
    }
  }, {
    key: "defaultOptions",
    get: function get() {
      return {};
    }
  }, {
    key: "queryProperty",
    get: function get() {
      return 'query';
    }
  }, {
    key: "responseProperty",
    get: function get() {
      return null;
    }
  }, {
    key: "displayValueProperty",
    get: function get() {
      return null;
    }
  }, {
    key: "serialize",
    value: function serialize(params) {
      return _lodash["default"].toPairs(params).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
      }).join('&');
    }
  }, {
    key: "getRequestOptions",
    value: function getRequestOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _lodash["default"].merge({}, this.options, options);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "getRequestUrl",
    value: function getRequestUrl() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      throw new Error('Method AddressProvider#getRequestUrl(options) is abstract.');
    }
  }, {
    key: "makeRequest",
    value: function makeRequest() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _Formio.GlobalFormio.makeStaticRequest(this.getRequestUrl(options), 'GET', null, {
        noToken: true
      });
    }
  }, {
    key: "search",
    value: function search(query) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var requestOptions = this.getRequestOptions(options);
      var params = requestOptions.params = requestOptions.params || {};
      params[this.queryProperty] = query;
      return this.makeRequest(requestOptions).then(function (result) {
        return _this.responseProperty ? _lodash["default"].get(result, _this.responseProperty, []) : result;
      });
    }
  }, {
    key: "getDisplayValue",
    value: function getDisplayValue(address) {
      return this.displayValueProperty ? _lodash["default"].get(address, this.displayValueProperty, '') : String(address);
    }
  }], [{
    key: "name",
    get: function get() {
      return 'address';
    }
  }, {
    key: "displayName",
    get: function get() {
      return 'Address';
    }
  }]);
  return AddressProvider;
}();