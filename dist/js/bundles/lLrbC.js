var pageComponent =
webpackJsonppageComponent([19],{

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _hardwareChecklistSoy = __webpack_require__(303);

var _hardwareChecklistSoy2 = _interopRequireDefault(_hardwareChecklistSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lLrbC = function (_Component) {
  _inherits(lLrbC, _Component);

  function lLrbC() {
    _classCallCheck(this, lLrbC);

    return _possibleConstructorReturn(this, (lLrbC.__proto__ || Object.getPrototypeOf(lLrbC)).apply(this, arguments));
  }

  return lLrbC;
}(_metalComponent2.default);

;

_metalSoy2.default.register(lLrbC, _hardwareChecklistSoy2.default);

exports.default = lLrbC;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.lLrbC = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from hardware-checklist.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace lLrbC.
   * @public
   */

  goog.module('lLrbC.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param596 = function param596() {
      ie_open('h6');
      var dyn44 = opt_data.page.description;
      if (typeof dyn44 == 'function') dyn44();else if (dyn44 != null) itext(dyn44);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('ul');
      ie_open('li');
      itext('Computer;');
      ie_close('li');
      ie_open('li');
      itext('Monitor;');
      ie_close('li');
      ie_open('li');
      itext('Keyboard (wireless or not);');
      ie_close('li');
      ie_open('li');
      itext('Mouse (wireless);');
      ie_close('li');
      ie_open('li');
      itext('Wacom tablet (optional);');
      ie_close('li');
      ie_open('li');
      itext('DVI cable;');
      ie_close('li');
      ie_open('li');
      itext('Thunderbolt cable;');
      ie_close('li');
      ie_open('li');
      itext('Internet cable;');
      ie_close('li');
      ie_open('li');
      itext('Headphone (optional);');
      ie_close('li');
      ie_open('li');
      itext('Network Adapter;');
      ie_close('li');
      ie_open('li');
      itext('Computer stand;');
      ie_close('li');
      ie_open('li');
      itext('Rechargeable batteries;');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('In case of requesting');
      ie_close('h5');
      ie_open('p');
      itext('If you need to order any of those items below, please ');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/wiki/-/wiki/Main/Operations+LATAM+JIRA+Requests?_36_pageResourcePrimKey=22585374');
      itext('open a ticket on JIRA to Operations Liferay LATAM.');
      ie_close('a');
      ie_close('p');
      ie_open('p');
      itext('Anything you need of infrastructure stuff, please contact Rafael Matos (rafael.matos@liferay.com). Please send a copy to felipe.pires@liferay.com and also to admin-br@liferay.com.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param596 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'lLrbC.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var lLrbC = function (_Component) {
  _inherits(lLrbC, _Component);

  function lLrbC() {
    _classCallCheck(this, lLrbC);

    return _possibleConstructorReturn(this, (lLrbC.__proto__ || Object.getPrototypeOf(lLrbC)).apply(this, arguments));
  }

  return lLrbC;
}(_metalComponent2.default);

_metalSoy2.default.register(lLrbC, templates);
exports.lLrbC = lLrbC;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[302]);