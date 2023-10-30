"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.array.map.js");
var _addons = _interopRequireWildcard(require("../../../../addons"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _default = exports["default"] = [{
  type: 'editgrid',
  addAnother: 'Add Addon',
  saveRow: 'Save Addon',
  weight: 28,
  input: true,
  key: 'addons',
  label: 'Addons',
  components: [{
    label: 'Name',
    tableView: true,
    key: 'name',
    type: 'select',
    dataSrc: 'custom',
    data: {
      custom: function custom(_ref) {
        var _instance$root, _instance$root$data;
        var instance = _ref.instance;
        var componentType = instance === null || instance === void 0 ? void 0 : (_instance$root = instance.root) === null || _instance$root === void 0 ? void 0 : (_instance$root$data = _instance$root.data) === null || _instance$root$data === void 0 ? void 0 : _instance$root$data.type;
        var availableAddons = Object.keys(_addons["default"]).filter(function (key) {
          var _Addons$key, _Addons$key$info, _Addons$key$info$supp;
          if ((_Addons$key = _addons["default"][key]) !== null && _Addons$key !== void 0 && (_Addons$key$info = _Addons$key.info) !== null && _Addons$key$info !== void 0 && (_Addons$key$info$supp = _Addons$key$info.supportedComponents) !== null && _Addons$key$info$supp !== void 0 && _Addons$key$info$supp.includes(componentType)) {
            return true;
          }
          return false;
        });
        return availableAddons.map(function (addonKey) {
          return {
            value: addonKey,
            label: _addons["default"][addonKey].info.label || addonKey
          };
        });
      }
    },
    input: true
  }].concat(_toConsumableArray(_addons.editForms))
}];