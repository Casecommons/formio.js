"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _PDF = _interopRequireDefault(require("../PDF"));

var _Webform = _interopRequireDefault(require("../Webform"));

var _Wizard = _interopRequireDefault(require("../Wizard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Displays = /*#__PURE__*/function () {
  function Displays() {
    _classCallCheck(this, Displays);
  }

  Displays.addDisplay = function addDisplay(name, display) {
    Displays.displays[name] = display;
  };

  Displays.addDisplays = function addDisplays(displays) {
    Displays.displays = _lodash["default"].merge(Displays.displays, displays);
  };

  Displays.getDisplay = function getDisplay(name) {
    return Displays.displays[name];
  };

  Displays.getDisplays = function getDisplays() {
    return Displays.displays;
  };

  return _createClass(Displays);
}();

exports["default"] = Displays;
Displays.displays = {
  pdf: _PDF["default"],
  webform: _Webform["default"],
  wizard: _Wizard["default"]
};