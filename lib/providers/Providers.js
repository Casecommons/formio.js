"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _address = _interopRequireDefault(require("./address"));

var _auth = _interopRequireDefault(require("./auth"));

var _storage = _interopRequireDefault(require("./storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Providers = /*#__PURE__*/function () {
  function Providers() {
    _classCallCheck(this, Providers);
  }

  Providers.addProvider = function addProvider(type, name, provider) {
    Providers.providers[type] = Providers.providers[type] || {};
    Providers.providers[type][name] = provider;
  };

  Providers.addProviders = function addProviders(type, providers) {
    Providers.providers[type] = _lodash["default"].merge(Providers.providers[type], providers);
  };

  Providers.getProvider = function getProvider(type, name) {
    if (Providers.providers[type] && Providers.providers[type][name]) {
      return Providers.providers[type][name];
    }
  };

  Providers.getProviders = function getProviders(type) {
    if (Providers.providers[type]) {
      return Providers.providers[type];
    }
  };

  return _createClass(Providers);
}();

exports["default"] = Providers;
Providers.providers = {
  address: _address["default"],
  auth: _auth["default"],
  storage: _storage["default"]
};