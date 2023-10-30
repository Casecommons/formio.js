"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.reflect.get.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.async-iterator.js");
require("core-js/modules/es.symbol.to-string-tag.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));
var _Formio = require("./Formio");
var _Webform2 = _interopRequireDefault(require("./Webform"));
var _utils = require("./utils/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var PDF = exports["default"] = /*#__PURE__*/function (_Webform) {
  _inherits(PDF, _Webform);
  var _super = _createSuper(PDF);
  function PDF(element, options) {
    var _this;
    _classCallCheck(this, PDF);
    options.display = 'pdf';
    _this = _super.call(this, element, options);
    _this.components = [];
    return _this;
  }
  _createClass(PDF, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      _get(_getPrototypeOf(PDF.prototype), "init", this).call(this);

      // Handle an iframe submission.
      this.on('iframe-submission', function (submission) {
        return _this2.setValue(submission, {
          fromIframe: true
        });
      }, true);
      this.on('iframe-change', function (submission) {
        return _this2.setValue(submission, {
          fromIframe: true
        });
      }, true);
      this.on('iframe-getIframePositions', function (query) {
        var iframe = document.getElementById("iframe-".concat(query.formId));
        if (iframe) {
          var iframeBoundingClientRect = iframe.getBoundingClientRect();
          _this2.postMessage({
            name: 'iframePositions',
            data: {
              formId: query.formId,
              iframe: {
                top: iframeBoundingClientRect.top
              },
              scrollY: window.scrollY || window.pageYOffset
            }
          });
        }
      });

      // Trigger when this form is ready.
      this.on('iframe-ready', function () {
        return _this2.iframeReadyResolve();
      }, true);
    }
  }, {
    key: "render",
    value: function render() {
      this.submitButton = this.addComponent({
        input: true,
        type: 'button',
        action: 'submit',
        internal: true,
        label: 'Submit',
        key: 'submit',
        ref: 'button',
        hidden: this.isSubmitButtonHidden()
      });
      return this.renderTemplate('pdf', {
        submitButton: this.submitButton.render(),
        classes: 'formio-form-pdf',
        children: this.renderComponents()
      });
    }
  }, {
    key: "redraw",
    value: function redraw() {
      this.postMessage({
        name: 'redraw'
      });
      return this.builderMode ? _nativePromiseOnly["default"].resolve() : _get(_getPrototypeOf(PDF.prototype), "redraw", this).call(this);
    }
  }, {
    key: "rebuild",
    value: function rebuild() {
      if (this.builderMode && this.component.components) {
        this.destroyComponents();
        this.addComponents();
        return _nativePromiseOnly["default"].resolve();
      }
      this.postMessage({
        name: 'redraw'
      });
      return _get(_getPrototypeOf(PDF.prototype), "rebuild", this).call(this);
    }

    // Do not attach nested components for pdf.
  }, {
    key: "attachComponents",
    value: function attachComponents(element, components, container) {
      components = components || this.components;
      container = container || this.component.components;
      element = this.hook('attachComponents', element, components, container, this);
      return Promise.resolve();
    }
  }, {
    key: "attach",
    value: function attach(element) {
      var _this3 = this;
      return _get(_getPrototypeOf(PDF.prototype), "attach", this).call(this, element).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var iframeSrc, _this3$options, appEnv, headers, acceptedEnvs, bodyRequest, htmlBody, iframeWindow, iframeDoc, submitButton, form;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this3.loadRefs(element, {
                button: 'single',
                buttonMessageContainer: 'single',
                buttonMessage: 'single',
                zoomIn: 'single',
                zoomOut: 'single',
                iframeContainer: 'single'
              });
              _this3.submitButton.refs = _objectSpread({}, _this3.refs);
              _this3.submitButton.attachButton();

              // Reset the iframeReady promise.
              _this3.iframeReady = new _nativePromiseOnly["default"](function (resolve, reject) {
                _this3.iframeReadyResolve = resolve;
                _this3.iframeReadyReject = reject;
              });

              // iframes cannot be in the template so manually create it
              iframeSrc = _this3.getSrc();
              _this3.iframeElement = _this3.ce('iframe', {
                src: iframeSrc,
                id: "iframe-".concat(_this3.id),
                seamless: true,
                "class": 'formio-iframe'
              });
              _this3.iframeElement.formioContainer = _this3.component.components;
              _this3.iframeElement.formioComponent = _this3;

              // Append the iframe to the iframeContainer in the template
              _this3.empty(_this3.refs.iframeContainer);
              _this3.appendChild(_this3.refs.iframeContainer, _this3.iframeElement);
              _this3$options = _this3.options, appEnv = _this3$options.appEnv, headers = _this3$options.headers;
              acceptedEnvs = [];
              if (!acceptedEnvs.includes(appEnv)) {
                _context.next = 30;
                break;
              }
              _context.prev = 13;
              _context.next = 16;
              return fetch(iframeSrc, {
                method: 'GET',
                headers: _objectSpread({
                  credentials: 'include'
                }, headers)
              });
            case 16:
              bodyRequest = _context.sent;
              _context.next = 19;
              return bodyRequest.text();
            case 19:
              htmlBody = _context.sent;
              iframeWindow = _this3.iframeElement.contentWindow || _this3.iframeElement.contentDocument.parentWindow;
              iframeDoc = iframeWindow.document;
              iframeDoc.open();
              iframeDoc.write(htmlBody);
              iframeDoc.close();
              _context.next = 30;
              break;
            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](13);
              console.log('error setting pdf iframe', _context.t0);
            case 30:
              // Post the form to the iframe
              _this3.form.base = _Formio.GlobalFormio.getBaseUrl();
              _this3.form.projectUrl = _Formio.GlobalFormio.getProjectUrl();
              _this3.postMessage({
                name: 'form',
                data: _this3.form
              });

              // Hide the submit button if the associated component is hidden
              submitButton = _this3.components.find(function (c) {
                return c.element === _this3.refs.button;
              });
              if (submitButton) {
                _this3.refs.button.classList.toggle('hidden', !submitButton.visible);
              }
              _this3.addEventListener(_this3.refs.zoomIn, 'click', function (event) {
                event.preventDefault();
                _this3.postMessage({
                  name: 'zoomIn'
                });
              });
              _this3.addEventListener(_this3.refs.zoomOut, 'click', function (event) {
                event.preventDefault();
                _this3.postMessage({
                  name: 'zoomOut'
                });
              });
              form = (0, _utils.fastCloneDeep)(_this3.form);
              if (_this3.formio) {
                form.projectUrl = _this3.formio.projectUrl;
                form.url = _this3.formio.formUrl;
                form.base = _this3.formio.base;
                _this3.postMessage({
                  name: 'token',
                  data: _this3.formio.getToken()
                });
              }
              _this3.emit('attach');
            case 40:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[13, 27]]);
      })));
    }

    /**
     * Get the submission from the iframe.
     *
     * @return {Promise<any>}
     */
  }, {
    key: "getSubmission",
    value: function getSubmission() {
      var _this4 = this;
      return new _nativePromiseOnly["default"](function (resolve) {
        _this4.once('iframe-submission', resolve);
        _this4.postMessage({
          name: 'getSubmission'
        });
      });
    }

    /**
     * Ensure we have the submission from the iframe before we submit the form.
     *
     * @param options
     * @return {*}
     */
  }, {
    key: "submitForm",
    value: function submitForm() {
      var _this5 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.postMessage({
        name: 'getErrors'
      });
      return this.getSubmission().then(function () {
        return _get(_getPrototypeOf(PDF.prototype), "submitForm", _this5).call(_this5, options);
      });
    }
  }, {
    key: "getSrc",
    value: function getSrc() {
      if (!this._form || !this._form.settings || !this._form.settings.pdf) {
        return '';
      }
      var iframeSrc = "".concat(this._form.settings.pdf.src, ".html");
      var params = ["id=".concat(this.id)];
      if (this.options.showCheckboxBackground || this._form.settings.showCheckboxBackground) {
        params.push('checkboxbackground=1');
      }
      if (this.options.readOnly) {
        params.push('readonly=1');
      }
      if (this.options.zoom) {
        params.push("zoom=".concat(this.options.zoom));
      }
      if (this.builderMode) {
        params.push('builder=1');
      }
      if (params.length) {
        iframeSrc += "?".concat(params.join('&'));
      }
      return iframeSrc;
    }
  }, {
    key: "setForm",
    value: function setForm(form) {
      var _this6 = this;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _get(_getPrototypeOf(PDF.prototype), "setForm", this).call(this, form, flags).then(function () {
        if (_this6.formio) {
          form.projectUrl = _this6.formio.projectUrl;
          form.url = _this6.formio.formUrl;
          form.base = _this6.formio.base;
          _this6.postMessage({
            name: 'token',
            data: _this6.formio.getToken()
          });
        }
        _this6.postMessage({
          name: 'form',
          data: _this6.form
        });
      });
    }

    /**
     * Set's the value of this form component.
     *
     * @param submission
     * @param flags
     */
  }, {
    key: "setValue",
    value: function setValue(submission) {
      var _this7 = this;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var changed = _get(_getPrototypeOf(PDF.prototype), "setValue", this).call(this, submission, flags);
      if (!flags || !flags.fromIframe) {
        this.once('iframe-ready', function () {
          if (changed) {
            _this7.postMessage({
              name: 'submission',
              data: submission
            });
          }
        });
      }
      return changed;
    }
  }, {
    key: "postMessage",
    value: function postMessage(message) {
      var _this8 = this;
      // If we get here before the iframeReady promise is set up, it's via the superclass constructor
      if (!this.iframeReady) {
        return;
      }
      if (!message.type) {
        message.type = 'iframe-data';
      }
      this.iframeReady.then(function () {
        if (_this8.iframeElement && _this8.iframeElement.contentWindow && !(message.name === 'form' && _this8.iframeFormSetUp)) {
          _this8.iframeElement.contentWindow.postMessage(JSON.stringify(message), '*');
          _this8.iframeFormSetUp = message.name === 'form';
        }
      });
    }
  }, {
    key: "focusOnComponent",
    value: function focusOnComponent(key) {
      this.postMessage({
        name: 'focusErroredField',
        data: key
      });
    }

    // Do not clear the iframe.
  }, {
    key: "clear",
    value: function clear() {}
  }, {
    key: "showErrors",
    value: function showErrors(error, triggerEvent) {
      var _this$refs$buttonMess;
      var helpBlock = document.getElementById('submit-error');
      var submitError = this.t('submitError');
      var isSubmitErrorShown = ((_this$refs$buttonMess = this.refs.buttonMessage) === null || _this$refs$buttonMess === void 0 ? void 0 : _this$refs$buttonMess.textContent.trim()) === submitError;
      if (!helpBlock && this.errors.length && !isSubmitErrorShown) {
        var p = this.ce('p', {
          "class": 'help-block'
        });
        this.setContent(p, submitError);
        p.addEventListener('click', function () {
          window.scrollTo(0, 0);
        });
        var div = this.ce('div', {
          id: 'submit-error',
          "class": 'has-error'
        });
        this.appendTo(p, div);
        this.appendTo(div, this.element);
      }
      if (!this.errors.length && helpBlock) {
        helpBlock.remove();
      }
      _get(_getPrototypeOf(PDF.prototype), "showErrors", this).call(this, error, triggerEvent);
    }
  }, {
    key: "isSubmitButtonHidden",
    value: function isSubmitButtonHidden() {
      var hidden = false;
      (0, _utils.eachComponent)(this.component.components, function (component) {
        if (component.type === 'button' && (component.action === 'submit' || !component.action)) {
          hidden = component.hidden || false;
        }
      });
      return hidden;
    }
  }]);
  return PDF;
}(_Webform2["default"]);
/**
 * Listen for window messages.
 */
if (typeof window !== 'undefined') {
  window.addEventListener('message', function (event) {
    var eventData = null;
    try {
      eventData = JSON.parse(event.data);
    } catch (err) {
      eventData = null;
    }

    // If this form exists, then emit the event within this form.
    if (eventData && eventData.name && eventData.formId && _Formio.GlobalFormio.forms.hasOwnProperty(eventData.formId)) {
      _Formio.GlobalFormio.forms[eventData.formId].emit("iframe-".concat(eventData.name), eventData.data);
    }
  });
}