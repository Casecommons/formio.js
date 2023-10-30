"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _form = _interopRequireDefault(require("./form.ejs"));
var _align = _interopRequireDefault(require("./align.ejs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  form: _form["default"],
  align: _align["default"]
};