"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.reflect.set.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.date.now.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.object.get-prototype-of.js");

var _Formio = require("../Formio");

var _InputWidget2 = _interopRequireDefault(require("./InputWidget"));

var _utils = require("../utils/utils");

var _moment = _interopRequireDefault(require("moment"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

var DEFAULT_FORMAT = 'yyyy-MM-dd hh:mm a';
var ISO_8601_FORMAT = 'yyyy-MM-ddTHH:mm:ssZ';
var CDN_URL = 'https://cdn.form.io/';
var JSDELIVR_CDN_URL = 'https://cdn.jsdelivr.net';
var CDN_FLATPICKR_LOCALE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.9/l10n';
var SHORTCUT_BUTTONS_PLUGIN_URL = '/npm/shortcut-buttons-flatpickr@0.1.0/dist/';
var SHORTCUT_BUTTONS_CSS = "".concat(JSDELIVR_CDN_URL).concat(SHORTCUT_BUTTONS_PLUGIN_URL, "themes/light.min.css");
var SHORTCUT_BUTTONS_PLUGIN = "".concat(JSDELIVR_CDN_URL).concat(SHORTCUT_BUTTONS_PLUGIN_URL, "shortcut-buttons-flatpickr.min.js");
var isIEBrowser = (0, _utils.getBrowserInfo)().ie;

var CalendarWidget = /*#__PURE__*/function (_InputWidget) {
  _inherits(CalendarWidget, _InputWidget);

  var _super = _createSuper(CalendarWidget);

  /* eslint-enable camelcase */
  function CalendarWidget(settings, component, instance, index) {
    var _this;

    _classCallCheck(this, CalendarWidget);

    _this = _super.call(this, settings, component, instance, index); // Change the format to map to the settings.

    if (_this.settings.noCalendar) {
      _this.settings.format = _this.settings.format.replace(/yyyy-MM-dd /g, '');
    }

    if (!_this.settings.enableTime) {
      _this.settings.format = _this.settings.format.replace(/ hh:mm a$/g, '');
      _this.settings.dateFormat = _this.settings.format;
    } else if (_this.settings.time_24hr) {
      _this.settings.format = _this.settings.format.replace(/hh:mm a$/g, 'HH:mm');
    }

    return _this;
  }
  /**
   * Load the timezones.
   *
   * @return {boolean} TRUE if the zones are loading, FALSE otherwise.
   */


  var _proto = CalendarWidget.prototype;

  _proto.loadZones = function loadZones() {
    var _this2 = this;

    var timezone = this.timezone;

    if (!(0, _utils.zonesLoaded)() && (0, _utils.shouldLoadZones)(timezone)) {
      (0, _utils.loadZones)(timezone).then(function () {
        return _this2.emit('redraw');
      }); // Return zones are loading.

      return true;
    } // Zones are already loaded.


    return false;
  };

  _proto.attach = function attach(input) {
    var _this3 = this,
        _this$component$short;

    var superAttach = _get(_getPrototypeOf(CalendarWidget.prototype), "attach", this).call(this, input);

    var dateFormatInfo = (0, _utils.getLocaleDateFormatInfo)(this.settings.language);
    this.defaultFormat = {
      date: dateFormatInfo.dayFirst ? 'd/m/Y ' : 'm/d/Y ',
      time: 'G:i K'
    };
    this.closedOn = 0;
    this.valueFormat = this.settings.saveAs === 'date' ? ISO_8601_FORMAT : this.settings.dateFormat || ISO_8601_FORMAT;
    this.valueMomentFormat = (0, _utils.convertFormatToMoment)(this.valueFormat);
    var isReadOnly = this.settings.readOnly;
    this.settings.minDate = isReadOnly ? null : (0, _utils.getDateSetting)(this.settings.minDate);
    this.settings.maxDate = isReadOnly ? null : (0, _utils.getDateSetting)(this.settings.maxDate);
    this.settings.disable = this.disabledDates;
    this.settings.disableWeekends ? this.settings.disable.push(this.disableWeekends) : '';
    this.settings.disableWeekdays ? this.settings.disable.push(this.disableWeekdays) : '';
    this.settings.disableFunction ? this.settings.disable.push(this.disableFunction) : '';
    this.settings.wasDefaultValueChanged = false;
    this.settings.defaultValue = '';
    this.settings.manualInputValue = '';
    this.settings.isManuallyOverriddenValue = false;
    this.settings.currentValue = '';
    this.settings.altFormat = (0, _utils.convertFormatToFlatpickr)(this.settings.format);
    this.settings.dateFormat = (0, _utils.convertFormatToFlatpickr)(this.settings.dateFormat);
    this.settings.position = 'auto center';

    this.settings.onChange = function () {
      if (_this3.settings.allowInput) {
        if (_this3.settings.isManuallyOverriddenValue && _this3.settings.enableTime) {
          _this3.calendar._input.value = _this3.settings.manualInputValue;
        } else {
          _this3.settings.manualInputValue = '';
        }

        _this3.settings.isManuallyOverriddenValue = false;
      }

      _this3.emit('update');
    };

    this.settings.onOpen = function () {
      return _this3.hook('onCalendarOpen');
    };

    this.settings.onClose = function () {
      _this3.hook('onCalendarClose');

      _this3.closedOn = Date.now();

      if (_this3.settings.allowInput && _this3.settings.enableTime) {
        _this3.calendar._input.value = _this3.settings.manualInputValue || _this3.calendar._input.value;
        _this3.settings.isManuallyOverriddenValue = false;

        _this3.emit('update');
      }

      if (_this3.settings.wasDefaultValueChanged) {
        _this3.calendar._input.value = _this3.settings.defaultValue;
        _this3.settings.wasDefaultValueChanged = false;
      }

      if (_this3.calendar) {
        _this3.emit('blur');
      }
    };

    _Formio.GlobalFormio.requireLibrary('flatpickr-css', 'flatpickr', [{
      type: 'styles',
      src: "".concat(CDN_URL).concat(this.flatpickrType, "/flatpickr.min.css")
    }], true);

    if (this.component.shortcutButtons) {
      this.component.shortcutButtons = this.component.shortcutButtons.filter(function (btn) {
        return btn.label && btn.onClick;
      });
    }

    if ((_this$component$short = this.component.shortcutButtons) !== null && _this$component$short !== void 0 && _this$component$short.length) {
      _Formio.GlobalFormio.requireLibrary('shortcut-buttons-flatpickr-css', 'ShortcutButtonsPlugin', [{
        type: 'styles',
        src: SHORTCUT_BUTTONS_CSS
      }], true);
    }

    return superAttach.then(function () {
      var _this3$component$shor;

      if ((_this3$component$shor = _this3.component.shortcutButtons) !== null && _this3$component$shor !== void 0 && _this3$component$shor.length) {
        return _Formio.GlobalFormio.requireLibrary('shortcut-buttons-flatpickr', 'ShortcutButtonsPlugin', SHORTCUT_BUTTONS_PLUGIN, true);
      }
    }).then(function (ShortcutButtonsPlugin) {
      return _Formio.GlobalFormio.requireLibrary('flatpickr', 'flatpickr', "".concat(CDN_URL).concat(_this3.flatpickrType, "/flatpickr.min.js"), true).then(function (Flatpickr) {
        var _this3$component$shor2;

        if ((_this3$component$shor2 = _this3.component.shortcutButtons) !== null && _this3$component$shor2 !== void 0 && _this3$component$shor2.length && ShortcutButtonsPlugin) {
          _this3.initShortcutButtonsPlugin(ShortcutButtonsPlugin);
        }

        _this3.settings.formatDate = _this3.getFlatpickrFormatDate(Flatpickr);

        if (_this3._input) {
          var locale = _this3.settings.locale;

          if (locale && locale.length >= 2 && locale !== 'en') {
            return _Formio.GlobalFormio.requireLibrary("flatpickr-".concat(locale), "flatpickr-".concat(locale), "".concat(CDN_FLATPICKR_LOCALE_URL, "/").concat(locale, ".min.js"), false, function () {
              return _this3.initFlatpickr(Flatpickr);
            });
          } else {
            _this3.initFlatpickr(Flatpickr);
          }
        }
      });
    })["catch"](function (err) {
      console.warn(err);
    });
  };

  _proto.defineTimezone = function defineTimezone() {
    if (this.settings.timezone) {
      return this.settings.timezone;
    }

    if (this.settings.displayInTimezone === 'submission' && this.settings.submissionTimezone) {
      return this.settings.submissionTimezone;
    }

    if (this.settings.displayInTimezone === 'utc') {
      return 'UTC';
    } // Return current timezone if none are provided.


    return (0, _utils.currentTimezone)();
  };

  _proto.addSuffix = function addSuffix(suffix) {
    var _this4 = this;

    this.addEventListener(suffix, 'click', function (event) {
      event.stopPropagation();

      if (_this4.calendar) {
        if (!_this4.calendar.isOpen && Date.now() - _this4.closedOn > 200) {
          _this4.calendar.open();
        } else if (_this4.calendar.isOpen) {
          _this4.calendar.close();
        }
      }
    });
    return suffix;
  };

  /**
   * Return the date value.
   *
   * @param date
   * @param format
   * @return {string}
   */
  _proto.getDateValue = function getDateValue(date, format, useTimezone) {
    if (useTimezone) {
      return (0, _utils.momentDate)(date, this.valueFormat, this.timezone).format((0, _utils.convertFormatToMoment)(format));
    }

    return (0, _moment["default"])(date).format((0, _utils.convertFormatToMoment)(format));
  };

  /**
   * Return the value of the selected date.
   *
   * @return {*}
   */
  _proto.getValue = function getValue() {
    // Standard output format.
    if (!this.calendar) {
      return _get(_getPrototypeOf(CalendarWidget.prototype), "getValue", this).call(this);
    } // Get the selected dates from the calendar widget.


    var dates = this.calendar.selectedDates;

    if (!dates || !dates.length) {
      return _get(_getPrototypeOf(CalendarWidget.prototype), "getValue", this).call(this);
    }

    if (!(dates[0] instanceof Date)) {
      return 'Invalid Date';
    }

    return this.getDateValue(dates[0], this.valueFormat, this.settings.saveAs === 'date');
  };

  _proto.isValueISO8601 = function isValueISO8601(value) {
    return value && typeof value === 'string' && value.match(/-[0-9]{2}T[0-9]{2}:/);
  }
  /**
   * Set the selected date value.
   *
   * @param value
   */
  ;

  _proto.setValue = function setValue(value) {
    var saveAsText = this.settings.saveAs === 'text';

    if (!this.calendar) {
      value = value ? (0, _utils.formatDate)(value, (0, _utils.convertFormatToMoment)(this.settings.format), this.timezone, (0, _utils.convertFormatToMoment)(this.valueMomentFormat)) : value;
      return _get(_getPrototypeOf(CalendarWidget.prototype), "setValue", this).call(this, value);
    }

    if (this.isValueISO8601(value)) {
      this.calendar.setDate((0, _moment["default"])(value).toDate(), false);
    } else if (value) {
      var zonesLoading = this.loadZones();

      if (!saveAsText && this.settings.readOnly && !zonesLoading) {
        this.calendar.setDate((0, _utils.momentDate)(value, this.valueFormat, this.timezone).toDate(), false);
      } else {
        this.calendar.setDate((0, _moment["default"])(value, this.valueMomentFormat).toDate(), false);
      }
    } else {
      this.calendar.clear(false);
    }
  };

  _proto.getValueAsString = function getValueAsString(value, format) {
    var inputFormat = format || this.dateFormat;
    var valueFormat = this.calendar ? this.valueFormat : this.settings.dateFormat;

    if (this.settings.saveAs === 'text' && this.componentInstance.parent && !this.settings.readOnly) {
      return (0, _moment["default"])(value, (0, _utils.convertFormatToMoment)(valueFormat)).format((0, _utils.convertFormatToMoment)(valueFormat));
    }

    return (0, _utils.formatDate)(value, inputFormat, this.timezone, (0, _utils.convertFormatToMoment)(valueFormat));
  };

  _proto.setErrorClasses = function setErrorClasses(hasErrors) {
    if (!this.input) {
      return;
    }

    if (hasErrors) {
      this.addClass(this.input, 'is-invalid');
      this.input.setAttribute('aria-invalid', 'true');
    } else {
      this.removeClass(this.input, 'is-invalid');
      this.input.setAttribute('aria-invalid', 'false');
    }
  };

  _proto.validationValue = function validationValue(value) {
    if (typeof value === 'string') {
      return new Date(value);
    }

    return value.map(function (val) {
      return new Date(val);
    });
  };

  _proto.isCalendarElement = function isCalendarElement(element) {
    var _this$calendar, _this$calendar$config, _this$calendar$config2, _this$calendar2, _this$calendar2$calen;

    if (!element) {
      return true;
    }

    if ((_this$calendar = this.calendar) !== null && _this$calendar !== void 0 && (_this$calendar$config = _this$calendar.config) !== null && _this$calendar$config !== void 0 && (_this$calendar$config2 = _this$calendar$config.appendTo) !== null && _this$calendar$config2 !== void 0 && _this$calendar$config2.contains(element)) {
      return true;
    }

    return (_this$calendar2 = this.calendar) === null || _this$calendar2 === void 0 ? void 0 : (_this$calendar2$calen = _this$calendar2.calendarContainer) === null || _this$calendar2$calen === void 0 ? void 0 : _this$calendar2$calen.contains(element);
  };

  _proto.initFlatpickr = function initFlatpickr(Flatpickr) {
    var _this5 = this;

    var dateValue = this._input.value; // Create a new flatpickr.

    this.calendar = new Flatpickr(this._input, _objectSpread(_objectSpread({}, this.settings), {}, {
      disableMobile: true
    }));

    if (dateValue) {
      if (this.isValueISO8601(dateValue)) {
        this.calendar.setDate((0, _moment["default"])(dateValue).toDate(), false, this.settings.altFormat);
      } else {
        this.calendar.setDate((0, _moment["default"])(dateValue, (0, _utils.convertFormatToMoment)(this.dateFormat)).toDate(), false, this.settings.altFormat);
      }
    }

    this.calendar.altInput.addEventListener('input', function (event) {
      if (_this5.settings.allowInput && _this5.settings.currentValue !== event.target.value) {
        _this5.settings.manualInputValue = event.target.value;
        _this5.settings.isManuallyOverriddenValue = true;
        _this5.settings.currentValue = event.target.value;
      }

      if (event.target.value === '' && _this5.calendar.selectedDates.length > 0) {
        _this5.settings.wasDefaultValueChanged = true;
        _this5.settings.defaultValue = event.target.value;

        _this5.calendar.clear();
      } else {
        _this5.settings.wasDefaultValueChanged = false;
      }
    });

    if (!this.settings.readOnly) {
      // Enforce the input mask of the format.
      this.setInputMask(this.calendar._input, (0, _utils.convertFormatToMask)(this.settings.format));
    } // Fixes an issue with IE11 where value is set only after the second click
    // TODO: Remove when the issue is solved in the flatpickr library


    if (isIEBrowser) {
      // Remove the original blur listener, because value will be set to empty since relatedTarget is null in IE11
      var originalBlurListener = this.calendar._handlers.find(function (_ref) {
        var event = _ref.event,
            element = _ref.element;
        return event === 'blur' && element === _this5.calendar._input;
      });

      this.calendar._input.removeEventListener('blur', originalBlurListener.handler); // Add the same event listener as in the original library, but with workaround for IE11 issue


      this.addEventListener(this.calendar._input, 'blur', function (event) {
        var activeElement = _this5.settings.shadowRoot ? _this5.settings.shadowRoot.activeElement : document.activeElement;
        var relatedTarget = event.relatedTarget ? event.relatedTarget : activeElement;
        var isInput = event.target === _this5.calendar._input;

        if (isInput && !_this5.isCalendarElement(relatedTarget)) {
          _this5.calendar.setDate(_this5.calendar._input.value, true, event.target === _this5.calendar.altInput ? _this5.calendar.config.altFormat : _this5.calendar.config.dateFormat);
        }
      });
    } // Make sure we commit the value after a blur event occurs.


    this.addEventListener(this.calendar._input, 'blur', function (event) {
      var activeElement = _this5.settings.shadowRoot ? _this5.settings.shadowRoot.activeElement : document.activeElement;
      var relatedTarget = event.relatedTarget ? event.relatedTarget : activeElement;

      if (!(isIEBrowser && !relatedTarget) && !_this5.isCalendarElement(relatedTarget)) {
        var inputValue = _this5.calendar.input.value;

        var _dateValue = inputValue && _this5.settings.enableTime ? (0, _moment["default"])(_this5.calendar.input.value, (0, _utils.convertFormatToMoment)(_this5.valueFormat)).toDate() : inputValue;

        _this5.calendar.setDate(_dateValue, true, _this5.settings.altFormat);
      } else if (!_this5.calendar.input.value && _this5.calendar.config.noCalendar) {
        var _this5$calendar, _this5$calendar$confi, _this5$calendar2, _this5$calendar2$conf;

        var value = (0, _moment["default"])({
          hour: (_this5$calendar = _this5.calendar) === null || _this5$calendar === void 0 ? void 0 : (_this5$calendar$confi = _this5$calendar.config) === null || _this5$calendar$confi === void 0 ? void 0 : _this5$calendar$confi.defaultHour,
          minute: (_this5$calendar2 = _this5.calendar) === null || _this5$calendar2 === void 0 ? void 0 : (_this5$calendar2$conf = _this5$calendar2.config) === null || _this5$calendar2$conf === void 0 ? void 0 : _this5$calendar2$conf.defaultMinute
        }).toDate();

        _this5.calendar.setDate(value, true, _this5.settings.format);
      }
    }); // FJS-1103: When hit the enter button, the field not saving the year correctly

    this.addEventListener(this.calendar.altInput, 'keydown', function (event) {
      if (event.keyCode === 13) {
        if (_this5.calendar.isOpen) {
          _this5.calendar.close();

          event.stopPropagation();
        }
      }
    });
  };

  _proto.initShortcutButtonsPlugin = function initShortcutButtonsPlugin(ShortcutButtonsPlugin) {
    var _this6 = this;

    this.settings.plugins = [// eslint-disable-next-line new-cap
    ShortcutButtonsPlugin({
      button: this.component.shortcutButtons.map(function (btn) {
        return {
          label: btn.label,
          attributes: btn.attribute
        };
      }),
      onClick: function onClick(index) {
        var getValue = _this6.component.shortcutButtons[index].onClick;

        var date = _this6.evaluate(getValue, {
          date: new Date()
        }, 'date');

        _this6.calendar.setDate(date, true);
      }
    })];
  };

  _proto.getFlatpickrFormatDate = function getFlatpickrFormatDate(Flatpickr) {
    var _this7 = this;

    return function (date, format) {
      // Only format this if this is the altFormat and the form is readOnly.
      if (_this7.settings.readOnly && format === _this7.settings.altFormat) {
        if (!_this7.settings.enableTime || _this7.loadZones()) {
          return Flatpickr.formatDate(date, format);
        }

        var currentValue = new Date(_this7.getValue());

        if (currentValue.toString() === date.toString()) {
          var compValue = _this7.componentInstance.dataValue;

          if (Array.isArray(compValue)) {
            compValue = compValue[_this7.valueIndex];
          }

          return (0, _utils.formatOffset)(Flatpickr.formatDate.bind(Flatpickr), new Date(compValue), format, _this7.timezone);
        }

        return (0, _utils.formatOffset)(Flatpickr.formatDate.bind(Flatpickr), date, format, _this7.timezone);
      }

      return Flatpickr.formatDate(date, format);
    };
  };

  _proto.destroy = function destroy() {
    _get(_getPrototypeOf(CalendarWidget.prototype), "destroy", this).call(this);

    if (this.calendar) {
      this.calendar.destroy();
    }
  };

  _createClass(CalendarWidget, [{
    key: "disableWeekends",
    get: function get() {
      return function (date) {
        return date.getDay() === 0 || date.getDay() === 6;
      };
    }
  }, {
    key: "disableWeekdays",
    get: function get() {
      var _this8 = this;

      return function (date) {
        return !_this8.disableWeekends(date);
      };
    }
  }, {
    key: "disableFunction",
    get: function get() {
      var _this9 = this;

      return function (date) {
        return _this9.evaluate("return ".concat(_this9.settings.disableFunction), {
          date: date
        });
      };
    }
  }, {
    key: "timezone",
    get: function get() {
      return this.defineTimezone();
    }
  }, {
    key: "defaultSettings",
    get: function get() {
      return CalendarWidget.defaultSettings;
    }
  }, {
    key: "disabled",
    set: function set(disabled) {
      _set(_getPrototypeOf(CalendarWidget.prototype), "disabled", disabled, this, true);

      if (this.calendar) {
        if (disabled) {
          this.calendar._input.setAttribute('disabled', 'disabled');
        } else {
          this.calendar._input.removeAttribute('disabled');
        }

        this.calendar.close();
        this.calendar.redraw();
      }
    }
  }, {
    key: "input",
    get: function get() {
      return this.calendar ? this.calendar.altInput : null;
    }
  }, {
    key: "disabledDates",
    get: function get() {
      if (this.settings.disabledDates) {
        var disabledDates = this.settings.disabledDates.split(',');
        return disabledDates.map(function (item) {
          var dateMask = /\d{4}-\d{2}-\d{2}/g;
          var dates = item.match(dateMask);

          if (dates && dates.length) {
            return dates.length === 1 ? item.match(dateMask)[0] : {
              from: item.match(dateMask)[0],
              to: item.match(dateMask)[1]
            };
          }
        });
      }

      return [];
    }
  }, {
    key: "localeFormat",
    get: function get() {
      var format = '';

      if (this.settings.enableDate) {
        format += this.defaultFormat.date;
      }

      if (this.settings.enableTime) {
        format += this.defaultFormat.time;
      }

      return format;
    }
  }, {
    key: "dateTimeFormat",
    get: function get() {
      return this.settings.useLocaleSettings ? this.localeFormat : (0, _utils.convertFormatToFlatpickr)(this.dateFormat);
    }
  }, {
    key: "dateFormat",
    get: function get() {
      return _lodash["default"].get(this.settings, 'format', DEFAULT_FORMAT);
    }
  }, {
    key: "flatpickrType",
    get: function get() {
      return 'flatpickr';
    }
  }], [{
    key: "defaultSettings",
    get:
    /* eslint-disable camelcase */
    function get() {
      return {
        type: 'calendar',
        altInput: true,
        allowInput: true,
        clickOpens: true,
        enableDate: true,
        enableTime: true,
        mode: 'single',
        noCalendar: false,
        format: DEFAULT_FORMAT,
        dateFormat: ISO_8601_FORMAT,
        useLocaleSettings: false,
        language: 'us-en',
        hourIncrement: 1,
        minuteIncrement: 5,
        time_24hr: false,
        saveAs: 'date',
        displayInTimezone: '',
        timezone: '',
        disable: [],
        minDate: '',
        maxDate: ''
      };
    }
  }]);

  return CalendarWidget;
}(_InputWidget2["default"]);

exports["default"] = CalendarWidget;