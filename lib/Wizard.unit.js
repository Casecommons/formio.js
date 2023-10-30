"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
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
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.async-iterator.js");
require("core-js/modules/es.symbol.to-string-tag.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/web.timers.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.string.ends-with.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
var _harness = _interopRequireDefault(require("../test/harness"));
var _Wizard = _interopRequireDefault(require("./Wizard"));
var _Formio = _interopRequireDefault(require("./Formio"));
var _powerAssert = _interopRequireDefault(require("power-assert"));
var _lodash = _interopRequireDefault(require("lodash"));
var _wizardConditionalPages = _interopRequireDefault(require("../test/forms/wizardConditionalPages"));
var _wizardValidationOnPageChanged = _interopRequireDefault(require("../test/forms/wizardValidationOnPageChanged"));
var _wizardValidationOnNextBtn = _interopRequireDefault(require("../test/forms/wizardValidationOnNextBtn"));
var _wizardWithEditGrid = _interopRequireDefault(require("../test/forms/wizardWithEditGrid"));
var _conditionalWizardPages = _interopRequireDefault(require("../test/forms/conditionalWizardPages"));
var _wizardWithSimpleConditionalPage = _interopRequireDefault(require("../test/forms/wizardWithSimpleConditionalPage"));
var _wizardWithCustomConditionalPage = _interopRequireDefault(require("../test/forms/wizardWithCustomConditionalPage"));
var _wizardWithFirstConditionalPage = _interopRequireDefault(require("../test/forms/wizardWithFirstConditionalPage"));
var _wizardWithHighPages = _interopRequireDefault(require("../test/forms/wizardWithHighPages"));
var _wizardWithHiddenPanel = _interopRequireDefault(require("../test/forms/wizardWithHiddenPanel"));
var _wizardWithAllowPrevious = _interopRequireDefault(require("../test/forms/wizardWithAllowPrevious"));
var _wizardWithNestedWizard = _interopRequireDefault(require("../test/forms/wizardWithNestedWizard"));
var _formWithSignature = _interopRequireDefault(require("../test/forms/formWithSignature"));
var _wizardWithTooltip = _interopRequireDefault(require("../test/forms/wizardWithTooltip"));
var _wizardForHtmlRenderModeTest = _interopRequireDefault(require("../test/forms/wizardForHtmlRenderModeTest"));
var _wizardTestForm = _interopRequireDefault(require("../test/forms/wizardTestForm"));
var _formWIthNestedWizard = _interopRequireDefault(require("../test/forms/formWIthNestedWizard"));
var _wizardWithDataGridAndEditGrid = _interopRequireDefault(require("../test/forms/wizardWithDataGridAndEditGrid"));
var _customWizard = _interopRequireDefault(require("../test/forms/customWizard"));
var _wizardChildForm = _interopRequireDefault(require("../test/forms/wizardChildForm"));
var _wizardParentForm = _interopRequireDefault(require("../test/forms/wizardParentForm"));
var _wizardWithComponentsWithSameApi = _interopRequireDefault(require("../test/forms/wizardWithComponentsWithSameApi"));
var _conditionallyVisiblePage = _interopRequireDefault(require("../test/forms/conditionallyVisiblePage"));
var _wizardWithPanel = _interopRequireDefault(require("../test/forms/wizardWithPanel"));
var _wizardWithWizard = _interopRequireDefault(require("../test/forms/wizardWithWizard"));
var _simpleTwoPagesWizard = _interopRequireDefault(require("../test/forms/simpleTwoPagesWizard"));
var _wizardWithNestedWizardInEditGrid = _interopRequireDefault(require("../test/forms/wizardWithNestedWizardInEditGrid"));
var _wizardNavigateOrSaveOnEnter = _interopRequireDefault(require("../test/forms/wizardNavigateOrSaveOnEnter"));
var _wizardWithFieldsValidationChild = _interopRequireDefault(require("../test/forms/wizardWithFieldsValidationChild"));
var _wizardWithFieldsValidationParent = _interopRequireDefault(require("../test/forms/wizardWithFieldsValidationParent"));
var _nestedConditionalWizard = _interopRequireDefault(require("../test/forms/nestedConditionalWizard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
describe('Wizard tests', function () {
  it('Should correctly reset values', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    wizard.setForm(_wizardWithDataGridAndEditGrid["default"]).then(function () {
      var dataGrid = wizard.getComponent('dataGrid');
      var editGrid = wizard.getComponent('editGrid');
      var checkComponents = function checkComponents(editGridRowsNumber, dataGridRowsNumber, editGridValue, dataGridValue) {
        _powerAssert["default"].equal(editGrid.editRows.length, editGridRowsNumber, "EditGrit should have ".concat(dataGridRowsNumber, " rows"));
        _powerAssert["default"].equal(editGrid.components.length, editGridRowsNumber, "EditGrit should have ".concat(dataGridRowsNumber, " components"));
        _powerAssert["default"].equal(dataGrid.rows.length, dataGridRowsNumber, "DataGrit should have ".concat(dataGridRowsNumber, " rows"));
        _powerAssert["default"].equal(dataGrid.components.length, dataGridRowsNumber, "DataGrit should have ".concat(dataGridRowsNumber, " components"));
        if (editGridValue) {
          _powerAssert["default"].deepEqual(editGrid.dataValue, editGridValue, 'Should set correct editGrid value');
        }
        if (dataGridValue) {
          _powerAssert["default"].deepEqual(dataGrid.dataValue, dataGridValue, 'Should set correct dataGrid value');
        }
      };
      var event = function event(name, elem) {
        var event = new Event(name);
        elem.dispatchEvent(event);
      };
      checkComponents(0, 1, [], [{
        number: ''
      }]);
      var submission = {
        data: {
          dataGrid: [{
            number: 1111
          }, {
            number: 2222
          }],
          editGrid: [{
            textField: 'test1'
          }, {
            textField: 'test2'
          }]
        }
      };
      wizard.submission = _lodash["default"].cloneDeep(submission);
      setTimeout(function () {
        checkComponents(2, 2, submission.data.editGrid, submission.data.dataGrid);
        wizard.cancel(true);
        setTimeout(function () {
          checkComponents(0, 1, [], [{
            number: ''
          }]);
          event('click', editGrid.refs['editgrid-editGrid-addRow'][0]);
          setTimeout(function () {
            var editGridFirstRowInput = editGrid.element.querySelector('[name="data[editGrid][0][textField]"]');
            editGridFirstRowInput.value = 'test row 1';
            event('input', editGridFirstRowInput);
            event('click', editGrid.refs['editgrid-editGrid-saveRow'][0]);
            var dataGridFirstRowInput = dataGrid.element.querySelector('[name="data[dataGrid][0][number]"]');
            dataGridFirstRowInput.value = 11;
            event('input', dataGridFirstRowInput);
            setTimeout(function () {
              checkComponents(1, 1, [{
                textField: 'test row 1'
              }], [{
                number: 11
              }]);
              event('click', editGrid.refs['editgrid-editGrid-addRow'][0]);
              event('click', dataGrid.refs['datagrid-dataGrid-addRow'][0]);
              setTimeout(function () {
                var editGridFirstRowInput = editGrid.element.querySelector('[name="data[editGrid][1][textField]"]');
                editGridFirstRowInput.value = 'test row 2';
                event('input', editGridFirstRowInput);
                event('click', editGrid.refs['editgrid-editGrid-saveRow'][0]);
                var dataGridFirstRowInput = dataGrid.element.querySelector('[name="data[dataGrid][1][number]"]');
                dataGridFirstRowInput.value = 22;
                event('input', dataGridFirstRowInput);
                setTimeout(function () {
                  var editGridValue = [{
                    textField: 'test row 1'
                  }, {
                    textField: 'test row 2'
                  }];
                  var dataGridValue = [{
                    number: 11
                  }, {
                    number: 22
                  }];
                  checkComponents(2, 2, editGridValue, dataGridValue);
                  _powerAssert["default"].deepEqual(wizard.submission.data, {
                    dataGrid: dataGridValue,
                    editGrid: editGridValue
                  }, 'Should contain correct submission data');
                  done();
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  }).timeout(2500);
  it('Should render nested wizard, navigate pages and trigger validation', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var nestedWizard = _lodash["default"].cloneDeep(_wizardTestForm["default"].form);
    wizard.setForm(_formWIthNestedWizard["default"]).then(function () {
      var nestedFormComp = wizard.getComponent('formNested');
      nestedFormComp.loadSubForm = function () {
        nestedFormComp.formObj = nestedWizard;
        nestedFormComp.subFormLoading = false;
        return new Promise(function (resolve) {
          return resolve(nestedWizard);
        });
      };
      nestedFormComp.createSubForm();
      setTimeout(function () {
        var clickWizardBtn = function clickWizardBtn(pathPart, clickError) {
          var btn = _lodash["default"].get(wizard.refs, clickError ? pathPart : "".concat(wizard.wizardKey, "-").concat(pathPart));
          var clickEvent = new Event('click');
          btn.dispatchEvent(clickEvent);
        };
        var checkPage = function checkPage(pageNumber) {
          _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
        };
        checkPage(0);
        _powerAssert["default"].equal(wizard.pages.length, 5, 'Should have 5 pages');
        _powerAssert["default"].equal(wizard.allPages.length, 5, 'Should have 5 pages');
        _powerAssert["default"].equal(wizard.refs["".concat(wizard.wizardKey, "-link")].length, 5, 'Should contain refs to breadcrumbs of parent and nested wizard');
        clickWizardBtn('next');
        setTimeout(function () {
          checkPage(1);
          _powerAssert["default"].equal(wizard.refs["".concat(wizard.wizardKey)].querySelectorAll('[ref="component"]').length, 1, 'Should not load nested wizard component of the page of nested form if this page contains other components');
          clickWizardBtn('next');
          setTimeout(function () {
            checkPage(2);
            _powerAssert["default"].equal(wizard.refs["".concat(wizard.wizardKey)].querySelectorAll('[ref="component"]').length, 4, 'Should render nested wizard first page components');
            clickWizardBtn('next');
            setTimeout(function () {
              checkPage(2);
              _powerAssert["default"].equal(wizard.errors.length, 1, 'Should show validation error for required field');
              _powerAssert["default"].equal(wizard.refs.errorRef.length, 1, 'Should show alert with error');
              clickWizardBtn('previous');
              setTimeout(function () {
                checkPage(1);
                _powerAssert["default"].equal(wizard.errors.length, 0, 'Should not have validation errors');
                clickWizardBtn('link[4]');
                setTimeout(function () {
                  checkPage(4);
                  _powerAssert["default"].equal(!!wizard.refs["".concat(wizard.wizardKey, "-submit")], true, 'Should have submit btn on the last page');
                  clickWizardBtn('submit');
                  setTimeout(function () {
                    checkPage(4);
                    _powerAssert["default"].equal(wizard.errors.length, 3, 'Should trigger validation errors on submit');
                    _powerAssert["default"].equal(wizard.refs.errorRef.length, 3, 'Should show alert with error on submit');
                    wizard.getComponent('select').setValue('value1');
                    setTimeout(function () {
                      checkPage(4);
                      _powerAssert["default"].equal(wizard.errors.length, 2, 'Should remove validation error if a component is valid');
                      _powerAssert["default"].equal(wizard.refs.errorRef.length, 2, 'Should remove error from alert if component is valid');
                      done();
                    }, 500);
                  }, 500);
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  }).timeout(3000);
  it('Should set submission in wizard with nested wizard', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var nestedWizard = _lodash["default"].cloneDeep(_wizardTestForm["default"].form);
    var submission = {
      data: {
        selectBoxesParent: {
          a: true,
          b: false,
          c: false
        },
        formNested: {
          data: _wizardTestForm["default"].submission.data
        },
        numberParent: 1111
      }
    };
    wizard.setForm(_formWIthNestedWizard["default"]).then(function () {
      var nestedFormComp = wizard.getComponent('formNested');
      nestedFormComp.loadSubForm = function () {
        nestedFormComp.formObj = nestedWizard;
        nestedFormComp.subFormLoading = false;
        return new Promise(function (resolve) {
          return resolve(nestedWizard);
        });
      };
      nestedFormComp.createSubForm();
      setTimeout(function () {
        wizard.submission = _lodash["default"].cloneDeep(submission);
        setTimeout(function () {
          _powerAssert["default"].deepEqual(wizard.data, submission.data, 'Should set wizard submission');
          _powerAssert["default"].deepEqual(wizard.submission.data, submission.data, 'Should get wizard submission data');
          wizard.everyComponent(function (comp) {
            var expectedValue = _lodash["default"].get(submission.data, comp.path, 'no data');
            if (expectedValue !== 'no data') {
              _powerAssert["default"].deepEqual(comp.getValue(), expectedValue, "Should set value for ".concat(comp.component.type, " inside wizard"));
              _powerAssert["default"].deepEqual(comp.dataValue, expectedValue, "Should set value for ".concat(comp.component.type, " inside wizard"));
            }
          });
          done();
        }, 300);
      }, 300);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should show conditional page inside nested wizard', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var nestedWizard = _lodash["default"].cloneDeep(_wizardTestForm["default"].form);
    nestedWizard.components[2].conditional = {
      show: true,
      when: 'checkbox',
      eq: 'true'
    };
    wizard.setForm(_formWIthNestedWizard["default"]).then(function () {
      var nestedFormComp = wizard.getComponent('formNested');
      nestedFormComp.loadSubForm = function () {
        nestedFormComp.formObj = nestedWizard;
        nestedFormComp.subFormLoading = false;
        return new Promise(function (resolve) {
          return resolve(nestedWizard);
        });
      };
      nestedFormComp.createSubForm();
      setTimeout(function () {
        var checkPage = function checkPage(pageNumber) {
          _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
        };
        var clickWizardBtn = function clickWizardBtn(pathPart, clickError) {
          var btn = _lodash["default"].get(wizard.refs, clickError ? pathPart : "".concat(wizard.wizardKey, "-").concat(pathPart));
          var clickEvent = new Event('click');
          btn.dispatchEvent(clickEvent);
        };
        checkPage(0);
        _powerAssert["default"].equal(wizard.pages.length, 4, 'Should have 4 pages');
        _powerAssert["default"].equal(wizard.allPages.length, 4, 'Should have 4 pages');
        _powerAssert["default"].equal(wizard.refs["".concat(wizard.wizardKey, "-link")].length, 4, 'Should contain refs to breadcrumbs of parent and nested wizard');
        clickWizardBtn('link[3]');
        setTimeout(function () {
          checkPage(3);
          _powerAssert["default"].deepEqual(!!wizard.refs["".concat(wizard.wizardKey, "-submit")], true, 'Should hav submit btn on the last page');
          wizard.getComponent('checkbox').setValue(true);
          setTimeout(function () {
            checkPage(3);
            _powerAssert["default"].deepEqual(!!wizard.refs["".concat(wizard.wizardKey, "-submit")], true, 'Should have submit btn on the last page');
            wizard.getComponent('checkbox').setValue(true);
            setTimeout(function () {
              checkPage(3);
              _powerAssert["default"].deepEqual(!!wizard.refs["".concat(wizard.wizardKey, "-submit")], false, 'Should not have submit btn ');
              _powerAssert["default"].equal(wizard.pages.length, 5, 'Should show conditional page');
              _powerAssert["default"].equal(wizard.allPages.length, 5, 'Should show conditional page');
              _powerAssert["default"].equal(wizard.refs["".concat(wizard.wizardKey, "-link")].length, 5, 'Should contain refs to breadcrumbs of visible conditional page');
              clickWizardBtn('next');
              setTimeout(function () {
                checkPage(4);
                clickWizardBtn('previous');
                setTimeout(function () {
                  checkPage(3);
                  wizard.getComponent('checkbox').setValue(false);
                  setTimeout(function () {
                    _powerAssert["default"].equal(wizard.pages.length, 4, 'Should hide conditional page');
                    _powerAssert["default"].equal(wizard.allPages.length, 4, 'Should hide conditional page');
                    _powerAssert["default"].equal(wizard.refs["".concat(wizard.wizardKey, "-link")].length, 4, 'Should contain refs to breadcrumbs of visible pages');
                    _powerAssert["default"].deepEqual(!!wizard.refs["".concat(wizard.wizardKey, "-submit")], true, 'Should have submit btn on the last page');
                    done();
                  }, 500);
                }, 300);
              }, 300);
            }, 500);
          }, 300);
        }, 300);
      }, 300);
    })["catch"](function (err) {
      return done(err);
    });
  }).timeout(3000);
  it('Should render values in HTML render mode', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement, {
      readOnly: true,
      renderMode: 'html'
    });
    var form = _lodash["default"].cloneDeep(_wizardTestForm["default"].form);
    wizard.setForm(form).then(function () {
      var clickWizardBtn = function clickWizardBtn(pathPart, clickError) {
        var btn = _lodash["default"].get(wizard.refs, clickError ? pathPart : "".concat(wizard.wizardKey, "-").concat(pathPart));
        var clickEvent = new Event('click');
        btn.dispatchEvent(clickEvent);
      };
      var checkPage = function checkPage(pageNumber) {
        _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
      };
      var checkValues = function checkValues() {
        wizard.allPages[wizard.page].everyComponent(function (comp) {
          var isParent = !!(comp.component.components || comp.component.rows || comp.component.columns);
          if (!isParent) {
            var isInEditGrid = comp.parent.component.type === 'editgrid';
            var value = isInEditGrid ? comp.parent.refs['editgrid-editGrid-row'][comp.rowIndex].textContent.trim() : comp.element.querySelector("[ref='value']").textContent;
            var expectedValue = _lodash["default"].get(_wizardTestForm["default"].htmlModeValues, comp.path, 'no data');
            _powerAssert["default"].equal(value, expectedValue === 'true' ? 'True' : expectedValue, "".concat(comp.component.key, ": should render value in html render mode"));
          }
        });
      };
      wizard.submission = _lodash["default"].cloneDeep(_wizardTestForm["default"].submission);
      setTimeout(function () {
        checkPage(0);
        checkValues();
        clickWizardBtn('next');
        setTimeout(function () {
          checkPage(1);
          checkValues();
          clickWizardBtn('next');
          setTimeout(function () {
            checkPage(2);
            checkValues();
            done();
          }, 200);
        }, 200);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should redirect to the correct page from the Error list', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement, {
      renderMode: 'html'
    });
    wizard.setForm(_wizardWithComponentsWithSameApi["default"]).then(function () {
      var clickWizardBtn = function clickWizardBtn(pathPart) {
        var _Object$keys$filter = Object.keys(wizard.refs).filter(function (key) {
            return key.indexOf(pathPart) !== -1;
          }),
          _Object$keys$filter2 = _slicedToArray(_Object$keys$filter, 1),
          btnKey = _Object$keys$filter2[0];
        var btn = _lodash["default"].get(wizard.refs, btnKey);
        var clickEvent = new Event('click');
        btn.dispatchEvent(clickEvent);
      };
      var checkPage = function checkPage(pageNumber) {
        _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
      };
      setTimeout(function () {
        checkPage(0);
        wizard.setPage(1);
        setTimeout(function () {
          checkPage(1);
          clickWizardBtn('submit');
          setTimeout(function () {
            _powerAssert["default"].equal(wizard.refs.errorRef.length, 1, 'Should have an error');
            var clickEvent = new Event('click');
            wizard.refs.errorRef[0].dispatchEvent(clickEvent);
            setTimeout(function () {
              checkPage(0);
              done();
            }, 200);
          }, 200);
        }, 300);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should execute advanced logic for wizard pages', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var form = _lodash["default"].cloneDeep(_wizardTestForm["default"].form);
    _lodash["default"].each(form.components, function (comp, index) {
      if (index === 1) {
        comp.logic = [{
          name: 'simple logic',
          trigger: {
            type: 'simple',
            simple: {
              show: true,
              when: 'textField',
              eq: 'tooltip'
            }
          },
          actions: [{
            name: 'merge schema action',
            type: 'mergeComponentSchema',
            schemaDefinition: "schema = { tooltip: 'some tooltip'}"
          }]
        }];
      }
      if (index === 2) {
        comp.logic = [{
          name: 'logic test',
          trigger: {
            type: 'simple',
            simple: {
              show: true,
              when: 'checkbox',
              eq: 'true'
            }
          },
          actions: [{
            name: 'disabled',
            type: 'property',
            property: {
              label: 'Disabled',
              value: 'disabled',
              type: 'boolean'
            },
            state: true
          }]
        }];
      }
    });
    wizard.setForm(form).then(function () {
      var clickWizardBtn = function clickWizardBtn(pathPart, clickError) {
        var btn = _lodash["default"].get(wizard.refs, clickError ? pathPart : "".concat(wizard.wizardKey, "-").concat(pathPart));
        var clickEvent = new Event('click');
        btn.dispatchEvent(clickEvent);
      };
      var checkPage = function checkPage(pageNumber) {
        _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
      };
      checkPage(0);
      wizard.getComponent('textField').setValue('tooltip');
      clickWizardBtn('next');
      setTimeout(function () {
        checkPage(1);
        _powerAssert["default"].equal(wizard.tooltips.length, 1, 'Should have tooltip after advanced logic execution');
        _powerAssert["default"].equal(!!wizard.refs["".concat(wizard.wizardKey, "-tooltip")][0], true, 'Should render tooltip icon');
        wizard.getComponent('checkbox').setValue(true);
        clickWizardBtn('next');
        setTimeout(function () {
          checkPage(2);
          _powerAssert["default"].equal(wizard.allPages[wizard.page].disabled, true, 'Should disable page components after advanced logic execution');
          done();
        }, 200);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should navigate next page according to advanced next page logic', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var form = _lodash["default"].cloneDeep(_wizardTestForm["default"].form);
    _lodash["default"].each(form.components, function (comp, index) {
      if (index === 0) {
        comp.nextPage = "next = data.textField === 'page3' ? 'page3' : 'page2'";
      }
      if (index === 1) {
        comp.nextPage = "next = data.container && data.container.select === 'value1' ? 'page1' : 'page3'";
      }
    });
    wizard.setForm(form).then(function () {
      var clickWizardBtn = function clickWizardBtn(pathPart, clickError) {
        var btn = _lodash["default"].get(wizard.refs, clickError ? pathPart : "".concat(wizard.wizardKey, "-").concat(pathPart));
        var clickEvent = new Event('click');
        btn.dispatchEvent(clickEvent);
      };
      var checkPage = function checkPage(pageNumber) {
        _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
      };
      checkPage(0);
      wizard.getComponent('textField').setValue('page3');
      clickWizardBtn('next');
      setTimeout(function () {
        checkPage(2);
        wizard.getComponent('select').setValue('value1');
        clickWizardBtn('previous');
        setTimeout(function () {
          checkPage(1);
          wizard.getComponent('checkbox').setValue(true);
          clickWizardBtn('next');
          setTimeout(function () {
            checkPage(0);
            done();
          }, 200);
        }, 200);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should not render breadcrumb if it has hidden type', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var form = _lodash["default"].cloneDeep(_wizardTestForm["default"].form);
    _lodash["default"].each(form.components, function (comp) {
      comp.breadcrumb = 'none';
    });
    wizard.setForm(form).then(function () {
      var clickWizardBtn = function clickWizardBtn(pathPart, clickError) {
        var btn = _lodash["default"].get(wizard.refs, clickError ? pathPart : "".concat(wizard.wizardKey, "-").concat(pathPart));
        var clickEvent = new Event('click');
        btn.dispatchEvent(clickEvent);
      };
      var checkPage = function checkPage(pageNumber) {
        _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
      };
      var checkBreadcrumb = function checkBreadcrumb() {
        _powerAssert["default"].equal(_lodash["default"].get(wizard.refs, "".concat(wizard.wizardKey, "-link")).length, 0, 'Should not render wizard breadcrumb');
      };
      checkBreadcrumb();
      wizard.setSubmission(_lodash["default"].cloneDeep(_wizardTestForm["default"].submission));
      setTimeout(function () {
        checkPage(0);
        checkBreadcrumb();
        clickWizardBtn('next');
        setTimeout(function () {
          checkPage(1);
          checkBreadcrumb();
          clickWizardBtn('next');
          setTimeout(function () {
            checkPage(2);
            checkBreadcrumb();
            done();
          }, 100);
        }, 100);
      }, 100);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should not navigate between wizard pages on breadcrumb click if breadcrumbClickable is false', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var form = _lodash["default"].cloneDeep(_wizardTestForm["default"].form);
    _lodash["default"].each(form.components, function (comp) {
      comp.breadcrumbClickable = false;
    });
    wizard.setForm(form).then(function () {
      var clickWizardBtn = function clickWizardBtn(pathPart, clickError) {
        var btn = _lodash["default"].get(wizard.refs, clickError ? pathPart : "".concat(wizard.wizardKey, "-").concat(pathPart));
        var clickEvent = new Event('click');
        btn.dispatchEvent(clickEvent);
      };
      var checkPage = function checkPage(pageNumber) {
        _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
      };
      checkPage(0);
      clickWizardBtn('link[1]');
      setTimeout(function () {
        checkPage(0);
        clickWizardBtn('link[2]');
        setTimeout(function () {
          checkPage(0);
          wizard.setSubmission(_lodash["default"].cloneDeep(_wizardTestForm["default"].submission));
          setTimeout(function () {
            checkPage(0);
            clickWizardBtn('next');
            setTimeout(function () {
              checkPage(1);
              clickWizardBtn('link[0]');
              setTimeout(function () {
                checkPage(1);
                done();
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should set/get wizard submission', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    wizard.setForm(_wizardTestForm["default"].form).then(function () {
      wizard.submission = _lodash["default"].cloneDeep(_wizardTestForm["default"].submission);
      setTimeout(function () {
        _powerAssert["default"].deepEqual(wizard.data, _wizardTestForm["default"].submission.data, 'Should set wizard submission');
        _powerAssert["default"].deepEqual(wizard.submission.data, _wizardTestForm["default"].submission.data, 'Should get wizard submission data');
        wizard.everyComponent(function (comp) {
          var expectedValue = _lodash["default"].get(_wizardTestForm["default"].submission.data, comp.path, 'no data');
          if (expectedValue !== 'no data') {
            _powerAssert["default"].deepEqual(comp.getValue(), expectedValue, "Should set value for ".concat(comp.component.type, " inside wizard"));
            _powerAssert["default"].deepEqual(comp.dataValue, expectedValue, "Should set value for ".concat(comp.component.type, " inside wizard"));
          }
        });
        done();
      }, 300);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should correctly render customized wizard and navigate using custom btns', function (done) {
    var formElement = document.createElement('div');
    var customizedWizard = new _Wizard["default"](formElement);
    customizedWizard.setForm(_customWizard["default"]).then(function () {
      customizedWizard.on('goToNextPage', function () {
        customizedWizard.nextPage();
      });
      customizedWizard.on('goToPrevPage', function () {
        customizedWizard.prevPage();
      });
      var checkBtns = function checkBtns(page) {
        _powerAssert["default"].equal(customizedWizard.page, page, "Should set page ".concat(page + 1));
        _powerAssert["default"].equal(!!customizedWizard.refs["".concat(customizedWizard.wizardKey, "-next")], false, 'Should not render wizard next btn');
        _powerAssert["default"].equal(!!customizedWizard.refs["".concat(customizedWizard.wizardKey, "-cancel")], false, 'Should not render wizard cancel btn');
        _powerAssert["default"].equal(!!customizedWizard.refs["".concat(customizedWizard.wizardKey, "-previous")], false, 'Should not render wizard previous btn');
      };
      var navigatePage = function navigatePage(btnKey) {
        var customBtn = customizedWizard.components[customizedWizard.page].getComponent(btnKey).refs.button;
        var clickEvent = new Event('click');
        customBtn.dispatchEvent(clickEvent);
      };
      checkBtns(0);
      navigatePage('nextPage');
      setTimeout(function () {
        checkBtns(1);
        navigatePage('nextPage1');
        setTimeout(function () {
          checkBtns(2);
          navigatePage('prevPage1');
          setTimeout(function () {
            checkBtns(1);
            navigatePage('prevPage');
            setTimeout(function () {
              checkBtns(0);
              customizedWizard.destroy();
              done();
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should not create a new submission on submission of edited draft submission', function (done) {
    var formElement = document.createElement('div');
    var customizedWizard = new _Wizard["default"](formElement);
    var expectedValues = {
      '1': {
        method: 'post',
        urlEnd: 'submission',
        state: 'draft',
        data: {
          number: '',
          textArea1: '',
          textField: 'test'
        },
        id: undefined
      },
      '2': {
        method: 'put',
        urlEnd: 'someId',
        state: 'draft',
        data: {
          number: 111111,
          textArea1: 'test1',
          textField: 'test1'
        },
        id: 'someId'
      },
      '3': {
        method: 'put',
        urlEnd: 'someId',
        state: 'draft',
        data: {
          number: 22222,
          textArea1: 'test',
          textField: 'test1'
        },
        id: 'someId'
      },
      '4': {
        method: 'put',
        urlEnd: 'someId',
        state: 'draft',
        data: {
          number: 22222,
          textArea1: 'test1',
          textField: 'test1'
        },
        id: 'someId'
      },
      '5': {
        method: 'put',
        urlEnd: 'someId',
        state: 'submitted',
        data: {
          number: 22222,
          textArea1: 'test1',
          textField: 'test1'
        },
        id: 'someId'
      }
    };
    customizedWizard.setForm(_customWizard["default"]).then(function () {
      var formio = new _Formio["default"]('http://test.localhost/draftwizardpages', {});
      var number = 1;
      formio.makeRequest = function (type, url, method, data) {
        _powerAssert["default"].equal(method, expectedValues[number].method, "Should send ".concat(expectedValues[number].method, " request"));
        _powerAssert["default"].equal(data._id, expectedValues[number].id, "Submission data should ".concat(expectedValues[number].id ? '' : 'not', " contain id of editted submission"));
        _powerAssert["default"].equal(url.endsWith(expectedValues[number].urlEnd), true, "Request url should end with ".concat(expectedValues[number].urlEnd));
        _powerAssert["default"].equal(data.state, expectedValues[number].state, "Should set ".concat(expectedValues[number].state, " state for submission"));
        _lodash["default"].each(expectedValues[number].data, function (value, key) {
          _powerAssert["default"].equal(data.data[key], value, "".concat(key, " field should contain \"").concat(value, "\" value in submission object"));
        });
        number = number + 1;
        return new Promise(function (resolve) {
          return resolve({
            _id: 'someId',
            data: {
              number: 22222,
              textArea1: 'test1',
              textField: 'test1'
            },
            metadata: {},
            state: data.state
          });
        });
      };
      customizedWizard.formio = formio;
      customizedWizard.on('goToNextPage', function () {
        customizedWizard.executeSubmit({
          state: 'draft'
        }).then(function () {
          return customizedWizard.nextPage();
        });
      });
      customizedWizard.on('goToPrevPage', function () {
        customizedWizard.executeSubmit({
          state: 'draft'
        }).then(function () {
          return customizedWizard.prevPage();
        });
      });
      customizedWizard.on('saveSubmission', function () {
        customizedWizard.executeSubmit();
      });
      var checkPage = function checkPage(page) {
        _powerAssert["default"].equal(customizedWizard.page, page, "Should set page ".concat(page + 1));
      };
      var navigatePage = function navigatePage(btnKey) {
        var customBtn = customizedWizard.components[customizedWizard.page].getComponent(btnKey).refs.button;
        var clickEvent = new Event('click');
        customBtn.dispatchEvent(clickEvent);
      };
      var setPageCompValue = function setPageCompValue(compKey, value) {
        customizedWizard.components[customizedWizard.page].getComponent(compKey).setValue(value);
      };
      checkPage(0);
      setPageCompValue('textField', 'test');
      navigatePage('nextPage');
      setTimeout(function () {
        checkPage(1);
        setPageCompValue('number', 111111);
        navigatePage('nextPage1');
        setTimeout(function () {
          checkPage(2);
          setPageCompValue('textArea1', 'test');
          navigatePage('prevPage1');
          setTimeout(function () {
            checkPage(1);
            navigatePage('nextPage1');
            setTimeout(function () {
              checkPage(2);
              navigatePage('save');
              setTimeout(function () {
                customizedWizard.destroy();
                done();
              }, 200);
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should show validation alert and components` errors and navigate pages after clicking alert error', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    wizard.setForm(_wizardTestForm["default"].form).then(function () {
      var clickWizardBtn = function clickWizardBtn(pathPart, clickError) {
        var btn = _lodash["default"].get(wizard.refs, clickError ? pathPart : "".concat(wizard.wizardKey, "-").concat(pathPart));
        var clickEvent = new Event('click');
        btn.dispatchEvent(clickEvent);
      };
      var checkPage = function checkPage(pageNumber) {
        _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
      };
      var checkInvalidComp = function checkInvalidComp(compKey, highLight) {
        var comp = wizard.getComponent(compKey);
        _powerAssert["default"].deepEqual(!!comp.error, true, "".concat(compKey, ": should have error"));
        _powerAssert["default"].deepEqual(comp.error.message, "".concat(comp.component.label, " is required"), "".concat(compKey, ": should have correct required validation message"));
        _powerAssert["default"].deepEqual(comp.pristine, false, "".concat(compKey, ": should set pristine to false"));
        _powerAssert["default"].deepEqual(comp.element.classList.contains("".concat(highLight ? 'formio-error-wrapper' : 'has-error')), true, "".concat(compKey, ": should set error class"));
        _powerAssert["default"].deepEqual(comp.refs.messageContainer.querySelector('.error').textContent.trim(), "".concat(comp.component.label, " is required"), "".concat(compKey, ": should display error message"));
      };
      checkPage(0);
      clickWizardBtn('link[2]');
      setTimeout(function () {
        checkPage(2);
        _powerAssert["default"].equal(wizard.errors.length, 0, 'Should not have validation errors');
        clickWizardBtn('submit');
        setTimeout(function () {
          _powerAssert["default"].equal(wizard.errors.length, 3, 'Should have validation errors');
          _powerAssert["default"].equal(wizard.refs.errorRef.length, wizard.errors.length, 'Should show alert with validation errors');
          _powerAssert["default"].equal(!!wizard.element.querySelector('.alert-danger'), true, 'Should have alert with validation errors');
          checkInvalidComp('select', true);
          clickWizardBtn('errorRef[0]', true);
          setTimeout(function () {
            checkPage(0);
            _powerAssert["default"].equal(wizard.errors.length, 1, 'Should have page validation error');
            _powerAssert["default"].equal(wizard.refs.errorRef.length, 3, 'Should keep alert with validation errors');
            checkInvalidComp('textField');
            clickWizardBtn('errorRef[1]', true);
            setTimeout(function () {
              checkPage(1);
              _powerAssert["default"].equal(wizard.errors.length, 1, 'Should have page validation error');
              _powerAssert["default"].equal(wizard.refs.errorRef.length, 3, 'Should keep alert with validation errors');
              checkInvalidComp('checkbox');
              wizard.getComponent('checkbox').setValue(true);
              setTimeout(function () {
                checkPage(1);
                _powerAssert["default"].equal(wizard.errors.length, 0, 'Should not have page validation error');
                _powerAssert["default"].equal(wizard.refs.errorRef.length, 2, 'Should keep alert with validation errors');
                clickWizardBtn('errorRef[1]', true);
                setTimeout(function () {
                  checkPage(2);
                  _powerAssert["default"].equal(wizard.errors.length, 2, 'Should have wizard validation errors');
                  _powerAssert["default"].equal(wizard.refs.errorRef.length, 2, 'Should keep alert with validation errors');
                  wizard.getComponent('select').setValue('value1');
                  setTimeout(function () {
                    _powerAssert["default"].equal(wizard.errors.length, 1, 'Should have wizard validation error');
                    _powerAssert["default"].equal(wizard.refs.errorRef.length, 1, 'Should keep alert with validation errors');
                    clickWizardBtn('errorRef[0]', true);
                    setTimeout(function () {
                      checkPage(0);
                      _powerAssert["default"].equal(wizard.errors.length, 1, 'Should have page validation error');
                      _powerAssert["default"].equal(wizard.refs.errorRef.length, 1, 'Should keep alert with validation errors');
                      wizard.getComponent('textField').setValue('valid');
                      setTimeout(function () {
                        _powerAssert["default"].equal(wizard.errors.length, 0, 'Should not have page validation error');
                        _powerAssert["default"].equal(!!wizard.element.querySelector('.alert-danger'), false, 'Should not have alert with validation errors');
                        clickWizardBtn('link[2]');
                        setTimeout(function () {
                          clickWizardBtn('submit');
                          setTimeout(function () {
                            _powerAssert["default"].equal(wizard.submission.state, 'submitted', 'Should submit the form');
                            done();
                          }, 300);
                        }, 300);
                      }, 300);
                    }, 300);
                  }, 300);
                }, 300);
              }, 300);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    })["catch"](function (err) {
      return done(err);
    });
  }).timeout(3500);
  it('Should navigate wizard pages using navigation buttons and breadcrumbs', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    wizard.setForm(_wizardTestForm["default"].form).then(function () {
      var clickNavigationBtn = function clickNavigationBtn(pathPart) {
        var btn = _lodash["default"].get(wizard.refs, "".concat(wizard.wizardKey, "-").concat(pathPart));
        var clickEvent = new Event('click');
        btn.dispatchEvent(clickEvent);
      };
      var checkPage = function checkPage(pageNumber) {
        _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
      };
      checkPage(0);
      clickNavigationBtn('next');
      setTimeout(function () {
        checkPage(0);
        _powerAssert["default"].equal(wizard.errors.length, 1, 'Should have validation error');
        _powerAssert["default"].equal(wizard.refs.errorRef.length, wizard.errors.length, 'Should show alert with validation error');
        wizard.getComponent('textField').setValue('valid');
        clickNavigationBtn('next');
        setTimeout(function () {
          checkPage(1);
          clickNavigationBtn('next');
          setTimeout(function () {
            checkPage(1);
            _powerAssert["default"].equal(wizard.errors.length, 1, 'Should have validation error');
            _powerAssert["default"].equal(wizard.refs.errorRef.length, wizard.errors.length, 'Should show alert with validation error');
            clickNavigationBtn('previous');
            setTimeout(function () {
              checkPage(0);
              _powerAssert["default"].equal(wizard.errors.length, 0, 'Should not have validation error');
              _powerAssert["default"].equal(!!wizard.refs.errorRef, false, 'Should not have alert with validation error');
              clickNavigationBtn('next');
              setTimeout(function () {
                checkPage(1);
                _powerAssert["default"].equal(wizard.errors.length, 1, 'Should have validation error');
                wizard.getComponent('checkbox').setValue(true);
                clickNavigationBtn('next');
                setTimeout(function () {
                  checkPage(2);
                  _powerAssert["default"].equal(wizard.errors.length, 0, 'Should not have validation error');
                  clickNavigationBtn('link[0]');
                  setTimeout(function () {
                    checkPage(0);
                    _powerAssert["default"].equal(wizard.errors.length, 0, 'Should not have validation error');
                    clickNavigationBtn('link[2]');
                    setTimeout(function () {
                      checkPage(2);
                      done();
                    }, 50);
                  }, 50);
                }, 50);
              }, 50);
            }, 50);
          }, 50);
        }, 50);
      }, 50);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should correctly set values in HTML render mode', function (done) {
    var formElement = document.createElement('div');
    var formHTMLMode = new _Wizard["default"](formElement, {
      readOnly: true,
      renderMode: 'html'
    });
    formHTMLMode.setForm(_wizardForHtmlRenderModeTest["default"].form).then(function () {
      formHTMLMode.setSubmission(_wizardForHtmlRenderModeTest["default"].submission);
      setTimeout(function () {
        var numberValue = formHTMLMode.element.querySelector('[ref="value"]').textContent;
        _powerAssert["default"].equal(+numberValue, _wizardForHtmlRenderModeTest["default"].submission.data.number);
        var nextPageBtn = formHTMLMode.refs["".concat(formHTMLMode.wizardKey, "-next")];
        var clickEvent = new Event('click');
        nextPageBtn.dispatchEvent(clickEvent);
        setTimeout(function () {
          var textValue = formHTMLMode.element.querySelector('[ref="value"]').textContent;
          _powerAssert["default"].equal(textValue, _wizardForHtmlRenderModeTest["default"].submission.data.textField);
          done();
        }, 250);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should show tooltip for wizard pages', function (done) {
    var formElement = document.createElement('div');
    var wizardWithPageTooltip = new _Wizard["default"](formElement);
    wizardWithPageTooltip.setForm(_wizardWithTooltip["default"]).then(function () {
      var clickEvent = new Event('click');
      _powerAssert["default"].equal(wizardWithPageTooltip.tooltips.length, 1);
      var pageTooltipIcon = wizardWithPageTooltip.refs["".concat(wizardWithPageTooltip.wizardKey, "-tooltip")][0];
      _powerAssert["default"].equal(!!pageTooltipIcon, true);
      pageTooltipIcon.dispatchEvent(clickEvent);
      setTimeout(function () {
        var tooltipText = wizardWithPageTooltip.element.querySelector('.tooltip-inner').textContent;
        _powerAssert["default"].equal(tooltipText, wizardWithPageTooltip.currentPanel.tooltip);
        done();
      }, 250);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should not clear wizard data when navigating between wizard pages with hidden panel', function (done) {
    var formElement = document.createElement('div');
    var formWithHiddenPage = new _Wizard["default"](formElement);
    formWithHiddenPage.setForm(_wizardWithHiddenPanel["default"]).then(function () {
      var clickEvent = new Event('click');
      var inputEvent = new Event('input');
      _powerAssert["default"].equal(formWithHiddenPage.pages.length, 2);
      var page1Field = formWithHiddenPage.element.querySelector('[name="data[number]"]');
      page1Field.value = '555';
      page1Field.dispatchEvent(inputEvent);
      setTimeout(function () {
        _powerAssert["default"].equal(formWithHiddenPage.element.querySelector('[name="data[number]"]').value, 555);
        var nextPageBtn = formWithHiddenPage.refs["".concat(formWithHiddenPage.wizardKey, "-next")];
        nextPageBtn.dispatchEvent(clickEvent);
        setTimeout(function () {
          _powerAssert["default"].equal(formWithHiddenPage.page, 1);
          var prevPageBtn = formWithHiddenPage.refs["".concat(formWithHiddenPage.wizardKey, "-previous")];
          prevPageBtn.dispatchEvent(clickEvent);
          setTimeout(function () {
            _powerAssert["default"].equal(formWithHiddenPage.page, 0);
            _powerAssert["default"].equal(formWithHiddenPage.element.querySelector('[name="data[number]"]').value, 555);
            done();
          }, 250);
        }, 200);
      }, 100);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should show signature submission in HTML render mode', function (done) {
    var formElement = document.createElement('div');
    var formWithSignatureHTMLMode = new _Wizard["default"](formElement, {
      readOnly: true,
      renderMode: 'html'
    });
    formWithSignatureHTMLMode.setForm(_formWithSignature["default"].form).then(function () {
      formWithSignatureHTMLMode.setSubmission(_formWithSignature["default"].submission);
      setTimeout(function () {
        var signatureImage = formWithSignatureHTMLMode.element.querySelector('[ref="signatureImage"]');
        _powerAssert["default"].equal(signatureImage.src === _formWithSignature["default"].submission.data.signature, true);
        done();
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should display conditional page after setting submission', function (done) {
    var formElement = document.createElement('div');
    var wizardWithSimpleConditionalPage = new _Wizard["default"](formElement);
    wizardWithSimpleConditionalPage.setForm(_wizardWithSimpleConditionalPage["default"]).then(function () {
      setTimeout(function () {
        _powerAssert["default"].equal(wizardWithSimpleConditionalPage.pages.length, 1);
        _powerAssert["default"].equal(wizardWithSimpleConditionalPage.components.length, 1);
        var submissionData = {
          checkbox: true,
          number: 555
        };
        wizardWithSimpleConditionalPage.setSubmission({
          data: submissionData
        });
        setTimeout(function () {
          _powerAssert["default"].equal(wizardWithSimpleConditionalPage.pages.length, 2);
          _powerAssert["default"].equal(wizardWithSimpleConditionalPage.components.length, 2);
          _powerAssert["default"].deepEqual(wizardWithSimpleConditionalPage.data, submissionData);
          done();
        }, 500);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should display submission data on page with custom conditional logic in readOnly', function (done) {
    var formElement = document.createElement('div');
    var wizardWithCustomConditionalPage = new _Wizard["default"](formElement);
    wizardWithCustomConditionalPage.setForm(_wizardWithCustomConditionalPage["default"]).then(function () {
      setTimeout(function () {
        wizardWithCustomConditionalPage.disabled = true;
        if (wizardWithCustomConditionalPage.options) {
          wizardWithCustomConditionalPage.options.readOnly = true;
        } else {
          wizardWithCustomConditionalPage.options = {
            readOnly: true
          };
        }
        setTimeout(function () {
          _powerAssert["default"].equal(wizardWithCustomConditionalPage.pages.length, 1);
          _powerAssert["default"].equal(wizardWithCustomConditionalPage.components.length, 1);
          var submissionData = {
            checkbox: true,
            number: 555
          };
          wizardWithCustomConditionalPage.setSubmission({
            data: submissionData
          });
          setTimeout(function () {
            _powerAssert["default"].equal(wizardWithCustomConditionalPage.pages.length, 2);
            _powerAssert["default"].equal(wizardWithCustomConditionalPage.components.length, 2);
            _powerAssert["default"].deepEqual(wizardWithCustomConditionalPage.data, submissionData);
            var clickEvent = new Event('click');
            var secondPageBtn = wizardWithCustomConditionalPage.refs["".concat(wizardWithCustomConditionalPage.wizardKey, "-link")][1];
            secondPageBtn.dispatchEvent(clickEvent);
            setTimeout(function () {
              _powerAssert["default"].equal(wizardWithCustomConditionalPage.page, 1);
              var numberComponent = wizardWithCustomConditionalPage.element.querySelector('[name="data[number]"]');
              _powerAssert["default"].equal(numberComponent.value, 555);
              done();
            }, 400);
          }, 300);
        }, 200);
      }, 100);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should show conditional wizard page', function (done) {
    var formElement = document.createElement('div');
    var wizardWithConditionalPage = new _Wizard["default"](formElement);
    wizardWithConditionalPage.setForm(_conditionalWizardPages["default"]).then(function () {
      setTimeout(function () {
        _powerAssert["default"].equal(wizardWithConditionalPage.pages.length, 1);
        _powerAssert["default"].equal(wizardWithConditionalPage.components.length, 1);
        var inputEvent = new Event('input');
        var numberComponent = wizardWithConditionalPage.element.querySelector('[name="data[number]"]');
        numberComponent.value = 5;
        numberComponent.dispatchEvent(inputEvent);
        setTimeout(function () {
          _powerAssert["default"].equal(wizardWithConditionalPage.pages.length, 2);
          _powerAssert["default"].equal(wizardWithConditionalPage.components.length, 2);
          done();
        }, 300);
      }, 200);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should show first conditional wizard page', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    wizard.setForm(_wizardWithFirstConditionalPage["default"]).then(function () {
      _powerAssert["default"].equal(wizard.pages.length, 1);
      _powerAssert["default"].equal(wizard.components.length, 1);
      _powerAssert["default"].equal(wizard.page, 0);
      _powerAssert["default"].equal(wizard.refs["wizard-".concat(wizard.id, "-previous")], null);
      _powerAssert["default"].equal(wizard.refs["wizard-".concat(wizard.id, "-link")][0].parentElement.classList.contains('active'), true);
      wizard.setValue({
        data: {
          b: 'true'
        }
      });
      setTimeout(function () {
        _powerAssert["default"].equal(wizard.pages.length, 2);
        _powerAssert["default"].equal(wizard.components.length, 2);
        _powerAssert["default"].equal(wizard.page, 1);
        _powerAssert["default"].notEqual(wizard.refs["wizard-".concat(wizard.id, "-previous")], null);
        _powerAssert["default"].equal(wizard.refs["wizard-".concat(wizard.id, "-link")][1].parentElement.classList.contains('active'), true);
        done();
      }, 300);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should display editGrid submission data in readOnly mode', function (done) {
    var formElement = document.createElement('div');
    var wizardForm = new _Wizard["default"](formElement, {
      readOnly: true
    });
    wizardForm.setForm(_wizardWithEditGrid["default"]).then(function () {
      wizardForm.setValue({
        data: {
          editGrid: [{
            textField: '111'
          }],
          number: 222
        }
      });
      setTimeout(function () {
        _powerAssert["default"].equal(wizardForm.element.querySelector('[name="data[number]"]').value, '222');
        _harness["default"].clickElement(wizardForm, wizardForm.refs["".concat(wizardForm.wizardKey, "-link")][1]);
        setTimeout(function () {
          _powerAssert["default"].equal(wizardForm.page, 1);
          var ditGridRowValue = wizardForm.element.querySelector('[ref = "editgrid-editGrid-row"]').querySelector('.col-sm-2').textContent.trim();
          _powerAssert["default"].equal(ditGridRowValue, '111');
          done();
        }, 300);
      }, 100);
    })["catch"](function (err) {
      return done(err);
    });
  });
  var wizardForm = null;
  it('Should set components errors if they are after page was changed with navigation', function (done) {
    var formElement = document.createElement('div');
    wizardForm = new _Wizard["default"](formElement);
    wizardForm.setForm(_wizardValidationOnPageChanged["default"]).then(function () {
      _harness["default"].testErrors(wizardForm, {
        data: {
          a: '1',
          c: '',
          textField: ''
        }
      }, [{
        component: 'a',
        message: 'a must have at least 4 characters.'
      }], done);
      _harness["default"].clickElement(wizardForm, wizardForm.refs["".concat(wizardForm.wizardKey, "-link")][2]);
      _powerAssert["default"].equal(wizardForm.page, 2);
      setTimeout(function () {
        _harness["default"].clickElement(wizardForm, wizardForm.refs["".concat(wizardForm.wizardKey, "-link")][0]);
        _powerAssert["default"].equal(wizardForm.page, 0);
        setTimeout(function () {
          var aInput = wizardForm.currentPage.getComponent('a');
          _powerAssert["default"].equal(aInput.errors.length, 1);
          _powerAssert["default"].equal(aInput.errors[0].message, 'a must have at least 4 characters.');
          done();
        }, 100);
      }, 100);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should leave errors for invalid fields after validation on next button and entering valid data in one of the fields', function (done) {
    var formElement = document.createElement('div');
    wizardForm = new _Wizard["default"](formElement);
    wizardForm.setForm(_wizardValidationOnNextBtn["default"]).then(function () {
      _harness["default"].clickElement(wizardForm, wizardForm.refs["".concat(wizardForm.wizardKey, "-next")]);
      setTimeout(function () {
        _powerAssert["default"].equal(wizardForm.errors.length, 2);
        var inputEvent = new Event('input', {
          bubbles: true,
          cancelable: true
        });
        var inputA = formElement.querySelector('input[name="data[a]"]');
        for (var i = 0; i < 5; i++) {
          inputA.value += i;
          inputA.dispatchEvent(inputEvent);
        }
        setTimeout(function () {
          _powerAssert["default"].equal(wizardForm.errors.length, 1);
          done();
        }, 250);
      }, 250);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should not set components errors if in readOnly mode', function (done) {
    var formElement = document.createElement('div');
    wizardForm = new _Wizard["default"](formElement, {
      readOnly: true
    });
    wizardForm.setForm(_wizardValidationOnPageChanged["default"]).then(function () {
      _harness["default"].testSubmission(wizardForm, {
        data: {
          a: '1',
          textField: 'aaa',
          c: '0'
        }
      });
      _harness["default"].clickElement(wizardForm, wizardForm.refs["".concat(wizardForm.wizardKey, "-link")][2]);
      _powerAssert["default"].equal(wizardForm.page, 2);
      _harness["default"].clickElement(wizardForm, wizardForm.refs["".concat(wizardForm.wizardKey, "-link")][0]);
      _powerAssert["default"].equal(wizardForm.page, 0);
      var aInput = wizardForm.currentPage.getComponent('a');
      _powerAssert["default"].equal(aInput.errors.length, 0);
      done();
    });
  });
  it('Should keep values during validation that are conditionally visible', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var submission, form, textField, valid;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          submission = {
            data: {
              a: true,
              b: 'b',
              c: 'c'
            }
          };
          _context.next = 3;
          return _Formio["default"].createForm(_wizardConditionalPages["default"], {});
        case 3:
          form = _context.sent;
          form.validator.config = {
            db: {},
            token: '',
            form: _wizardConditionalPages["default"],
            submission: submission
          };

          // Set the submission data
          form.data = submission.data;
          _powerAssert["default"].deepEqual(form.data, submission.data, 'Should set data properly');
          // Perform calculations and conditions.
          form.calculateValue();
          form.checkConditions();
          (0, _powerAssert["default"])(form.components[2], 'Should contain the 3rd page');
          _powerAssert["default"].equal(form.components[2].visible, true, 'Should be visible');
          textField = form.components[2].components[0];
          _powerAssert["default"].equal(textField.visible, true, 'Inner components of the 3rd page should be visible');
          _powerAssert["default"].equal(textField.parentVisible, true, 'parentVisible of the 3rd page\'s child components should be equal to true');

          // Reset the data
          form.data = {};
          form.setValue(submission, {
            sanitize: true
          });

          // Check the validity of the form.
          _context.next = 18;
          return form.checkAsyncValidity(null, true);
        case 18:
          valid = _context.sent;
          (0, _powerAssert["default"])(valid, 'Should be valid');
          _powerAssert["default"].equal(form.data.c, 'c', 'Should keep the value of a conditionally visible page.');
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('If allowPrevious is given, the breadcrumb bar should be clickable for visited tabs.', function (done) {
    var formElement = document.createElement('div');
    wizardForm = new _Wizard["default"](formElement, {
      allowPrevious: true
    });
    wizardForm.setForm(_wizardWithAllowPrevious["default"]).then(function () {
      _harness["default"].clickElement(wizardForm, wizardForm.refs["".concat(wizardForm.wizardKey, "-link")][1]);
      setTimeout(function () {
        _powerAssert["default"].equal(wizardForm.page, 0, 'Should be disabled for unvisited tabs.');
        _harness["default"].clickElement(wizardForm, wizardForm.refs["".concat(wizardForm.wizardKey, "-next")]);
        setTimeout(function () {
          _powerAssert["default"].equal(wizardForm.enabledIndex, 1, 'Should be clickable for visited tabs.');
          done();
        }, 100);
      }, 100);
    })["catch"](done);
  });
  it('Should scroll to the top of the page when the page is changed', function (done) {
    var formElement = document.createElement('div');
    wizardForm = new _Wizard["default"](formElement);
    wizardForm.setForm(_wizardWithHighPages["default"]).then(function () {
      wizardForm.scrollIntoView(wizardForm.refs["".concat(wizardForm.wizardKey, "-next")]);
      wizardForm.setPage(1);
      setTimeout(function () {
        _powerAssert["default"].equal(wizardForm.refs[wizardForm.wizardKey].scrollTop, 0, 'The top edge of the page should be aligned to the top edge of the window');
        done();
      }, 350);
    })["catch"](done);
  });
  it('Should show the actual page after re-rendering due to nested wizards.', function (done) {
    var formElement = document.createElement('div');
    wizardForm = new _Wizard["default"](formElement);
    wizardForm.setForm(_wizardWithNestedWizard["default"]).then(function () {
      _powerAssert["default"].equal(wizardForm.element.querySelector('.wizard-page'), wizardForm.allPages[0].components[0].element.parentNode);
      done();
    })["catch"](done);
  });
  it('Should render all pages as a part of wizard pagination', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var childForm = _lodash["default"].cloneDeep(_wizardChildForm["default"]);
    var clickEvent = new Event('click');
    wizard.setForm(_wizardParentForm["default"]).then(function () {
      _powerAssert["default"].equal(wizard.components.length, 2);
      _powerAssert["default"].equal(wizard.allPages.length, 2);
      _powerAssert["default"].equal(wizard.allPages[1].component.title, 'Page 3');
      var radioComp = wizard.getComponent('radio1');
      radioComp.setValue('yes');
      wizard.render();
      setTimeout(function () {
        var nestedFormComp = wizard.getComponent('formNested');
        nestedFormComp.loadSubForm = function () {
          nestedFormComp.formObj = childForm;
          nestedFormComp.subFormLoading = false;
          return new Promise(function (resolve) {
            return resolve(childForm);
          });
        };
        nestedFormComp.createSubForm();
        setTimeout(function () {
          _powerAssert["default"].equal(wizard.components.length, 3);
          _powerAssert["default"].equal(wizard.allPages.length, 4);
          _powerAssert["default"].equal(wizard.allPages[1].component.title, 'Child Page 1');
          var checboxComp = wizard.getComponent('checkbox');
          checboxComp.setValue(true);
          wizard.render();
          setTimeout(function () {
            _powerAssert["default"].equal(wizard.components.length, 3);
            _powerAssert["default"].equal(wizard.allPages.length, 5);
            _powerAssert["default"].equal(wizard.allPages[1].component.title, 'Page 2');
            _powerAssert["default"].equal(wizard.element.querySelector('input[name="data[textFieldNearForm]"]'), null);
            var nextPageBtn = wizard.refs["".concat(wizard.wizardKey, "-next")];
            nextPageBtn.dispatchEvent(clickEvent);
            setTimeout(function () {
              _powerAssert["default"].equal(wizard.component.title, 'Page 2');
              _powerAssert["default"].ok(wizard.element.querySelector('input[name="data[textFieldNearForm]"]'));
              done();
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    })["catch"](done);
  });
  describe('Conditional pages', function () {
    it('Should remove page from header when it is hidden', function (done) {
      var formElement = document.createElement('div');
      var form = new _Wizard["default"](formElement);
      form.setForm(_conditionallyVisiblePage["default"]).then(function () {
        var textField = form.getComponent(['textField']);
        _harness["default"].dispatchEvent('input', textField.element, '[name="data[textField]"]', function (input) {
          return input.value = 'hide';
        });
        _powerAssert["default"].equal(form.refs["wizard-".concat(form.id, "-link")].length, 3, 'Should show all the pages in header');
        setTimeout(function () {
          _powerAssert["default"].equal(textField.dataValue, 'hide', 'Should set value');
          var page2 = form.getComponent(['page2']);
          _powerAssert["default"].equal(page2.visible, false, 'Should be hidden by logic');
          _powerAssert["default"].equal(form.refs["wizard-".concat(form.id, "-link")].length, 2, 'Should remove invisible pages from header');
          done();
        }, 300);
      })["catch"](done);
    });
    it('', function (done) {
      var formElement = document.createElement('div');
      _Formio["default"].createForm(formElement, _nestedConditionalWizard["default"]).then(function (form) {
        var nestedFormRadio = form.getComponent(['nestedForm']);
        nestedFormRadio.setValue('yes');
        setTimeout(function () {
          var secondQuestionToOpenNestedFormRadio = form.getComponent(['secondQuestionToOpenNestedForm']);
          (0, _powerAssert["default"])(secondQuestionToOpenNestedFormRadio.visible, 'Should become visible');
          secondQuestionToOpenNestedFormRadio.setValue('openChildForm');
          setTimeout(function () {
            var nestedForm = form.getComponent(['form']);
            (0, _powerAssert["default"])(nestedForm.visible, 'Should become visible');
            nestedForm.subForm.components.forEach(function (comp) {
              _powerAssert["default"].equal(comp.root, nestedForm.subForm, 'The root of the nested components should be set to the' + ' Wizard itself');
            });
            var nestedRadio1 = nestedForm.subForm.getComponent(['radio1']);
            nestedRadio1.setValue('unhidePage3');
            setTimeout(function () {
              var pages = form.element.querySelectorAll('.formio-form nav .pagination .page-item');
              _powerAssert["default"].equal(pages.length, 3, 'Should show the hidden initially page');
              secondQuestionToOpenNestedFormRadio.setValue(2);
              setTimeout(function () {
                (0, _powerAssert["default"])(!nestedForm.visible, 'Should become hidden');
                secondQuestionToOpenNestedFormRadio.setValue('openChildForm');
                setTimeout(function () {
                  (0, _powerAssert["default"])(nestedForm.visible, 'Should become visible again');
                  secondQuestionToOpenNestedFormRadio.setValue('openChildForm');
                  nestedForm.subForm.components.forEach(function (comp) {
                    _powerAssert["default"].equal(comp.root, nestedForm.subForm, 'The root of the nested components should be set to the' + ' Wizard itself');
                  });
                  var nestedRadio1 = nestedForm.subForm.getComponent(['radio1']);
                  nestedRadio1.setValue('unhidePage3');
                  setTimeout(function () {
                    var pages = form.element.querySelectorAll('.formio-form nav .pagination .page-item');
                    _powerAssert["default"].equal(pages.length, 3, 'Should show the hidden initially page');
                    done();
                  });
                }, 400);
              }, 500);
            }, 400);
          }, 500);
        }, 400);
      })["catch"](done);
    });
  });
  it('Should have proper values for localRoot', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var form = _lodash["default"].cloneDeep(_wizardWithPanel["default"]);
    var nestedMiddleForm = _lodash["default"].cloneDeep(_wizardWithWizard["default"]);
    var childForm = _lodash["default"].cloneDeep(_simpleTwoPagesWizard["default"]);
    wizard.setForm(form).then(function () {
      var nestedMiddleFormComp = wizard.getComponent('middleForm');
      nestedMiddleFormComp.loadSubForm = function () {
        nestedMiddleFormComp.formObj = nestedMiddleForm;
        nestedMiddleFormComp.subFormLoading = false;
        return new Promise(function (resolve) {
          return resolve(nestedMiddleForm);
        });
      };
      nestedMiddleFormComp.createSubForm();
      setTimeout(function () {
        var middleWizard = nestedMiddleFormComp.subForm;
        var nestedChildFormComp = middleWizard.getComponent('childForm');
        nestedChildFormComp.loadSubForm = function () {
          nestedChildFormComp.formObj = childForm;
          nestedChildFormComp.subFormLoading = false;
          return new Promise(function (resolve) {
            return resolve(childForm);
          });
        };
        nestedChildFormComp.createSubForm();
        setTimeout(function () {
          var childWizard = nestedChildFormComp.subForm;
          _powerAssert["default"].equal(wizard.id, wizard.root.id);
          _powerAssert["default"].equal(wizard.id, wizard.localRoot.id);
          _powerAssert["default"].equal(wizard.root.id, wizard.localRoot.id);
          _powerAssert["default"].notEqual(middleWizard.id, middleWizard.root.id);
          _powerAssert["default"].equal(middleWizard.id, middleWizard.localRoot.id);
          _powerAssert["default"].notEqual(middleWizard.root.id, middleWizard.localRoot.id);
          _powerAssert["default"].notEqual(childWizard.id, childWizard.root.id);
          _powerAssert["default"].notEqual(childWizard.id, childWizard.localRoot.id);
          _powerAssert["default"].equal(childWizard.root.id, childWizard.localRoot.id);
          done();
        }, 200);
      }, 200);
    });
  });
  it('Should keep wizard pages separate from edit grid inner wizard pages', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var form = _lodash["default"].cloneDeep(_wizardWithNestedWizardInEditGrid["default"]);
    var childForm = _lodash["default"].cloneDeep(_simpleTwoPagesWizard["default"]);
    wizard.setForm(form).then(function () {
      _powerAssert["default"].equal(wizard.components.length, 1);
      _powerAssert["default"].equal(wizard.allPages.length, 1);
      var editGrid = wizard.getComponent('editGrid');
      editGrid.addRow();
      setTimeout(function () {
        var nestedFormComp = wizard.getComponent('formNested');
        nestedFormComp.loadSubForm = function () {
          nestedFormComp.formObj = childForm;
          nestedFormComp.subFormLoading = false;
          return new Promise(function (resolve) {
            return resolve(childForm);
          });
        };
        nestedFormComp.createSubForm();
        setTimeout(function () {
          _powerAssert["default"].equal(nestedFormComp.subForm.components.length, 2);
          _powerAssert["default"].equal(nestedFormComp.subForm.allPages.length, 2);
          _powerAssert["default"].equal(wizard.components.length, 1);
          _powerAssert["default"].equal(wizard.allPages.length, 1);
          done();
        }, 200);
      }, 200);
    });
  });
  it('Should navigate wizard pages and submit form using \'Save on Enter\' option', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    wizard.setForm(_wizardNavigateOrSaveOnEnter["default"].form).then(function () {
      var pressEnter = function pressEnter() {
        var event = new KeyboardEvent('keyup', {
          bubbles: true,
          cancelable: true,
          key: 'Enter',
          keyCode: 13
        });
        document.dispatchEvent(event);
      };
      var checkPage = function checkPage(pageNumber) {
        _powerAssert["default"].equal(wizard.page, pageNumber, "Should open wizard page ".concat(pageNumber + 1));
      };
      checkPage(0);
      pressEnter();
      setTimeout(function () {
        checkPage(1);
        pressEnter();
        setTimeout(function () {
          checkPage(2);
          pressEnter();
          setTimeout(function () {
            _powerAssert["default"].equal(wizard.submission.state, 'submitted', 'Should submit the form');
            done();
          }, 50);
        }, 50);
      }, 50);
    })["catch"](function (err) {
      return done(err);
    });
  });
  it('Should proper validate nested wizard fields', function (done) {
    var formElement = document.createElement('div');
    var wizard = new _Wizard["default"](formElement);
    var childForm = _lodash["default"].cloneDeep(_wizardWithFieldsValidationChild["default"]);
    var parentForm = _lodash["default"].cloneDeep(_wizardWithFieldsValidationParent["default"]);
    var clickEvent = new Event('click');
    wizard.setForm(parentForm).then(function () {
      var nestedFormComp = wizard.getComponent('formNested');
      nestedFormComp.loadSubForm = function () {
        nestedFormComp.formObj = childForm;
        nestedFormComp.subFormLoading = false;
        return new Promise(function (resolve) {
          return resolve(childForm);
        });
      };
      nestedFormComp.createSubForm();
      setTimeout(function () {
        var textField = wizard.getComponent('textField');
        var testValidation = wizard.getComponent('testValidation');
        textField.setValue('one');
        testValidation.setValue('two');
        wizard.render();
        var checkPage = function checkPage(pageNumber) {
          _powerAssert["default"].equal(wizard.page, pageNumber);
        };
        var nextPageBtn = wizard.refs["".concat(wizard.wizardKey, "-next")];
        setTimeout(function () {
          nextPageBtn.dispatchEvent(clickEvent);
          setTimeout(function () {
            checkPage(0);
            _powerAssert["default"].equal(wizard.errors.length, 1);
            _powerAssert["default"].equal(wizard.refs.errorRef.length, wizard.errors.length);
            testValidation.setValue('one');
            nextPageBtn.dispatchEvent(clickEvent);
            setTimeout(function () {
              checkPage(1);
              _powerAssert["default"].equal(wizard.errors.length, 0);
              done();
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    });
  });
});