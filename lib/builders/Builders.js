"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _PDFBuilder = _interopRequireDefault(require("../PDFBuilder"));

var _WebformBuilder = _interopRequireDefault(require("../WebformBuilder"));

var _WizardBuilder = _interopRequireDefault(require("../WizardBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Builders = /*#__PURE__*/function () {
  function Builders() {
    _classCallCheck(this, Builders);
  }

  Builders.addBuilder = function addBuilder(name, builder) {
    Builders.builders[name] = builder;
  };

  Builders.addBuilders = function addBuilders(builders) {
    Builders.builders = _lodash["default"].merge(Builders.builders, builders);
  };

  Builders.getBuilder = function getBuilder(name) {
    return Builders.builders[name];
  };

  Builders.getBuilders = function getBuilders() {
    return Builders.builders;
  };

  return _createClass(Builders);
}();

exports["default"] = Builders;
Builders.builders = {
  pdf: _PDFBuilder["default"],
  webform: _WebformBuilder["default"],
  wizard: _WizardBuilder["default"]
};