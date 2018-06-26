var pageComponent =
webpackJsonppageComponent([7],{

/***/ 324:
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

var _workingHoursSoy = __webpack_require__(325);

var _workingHoursSoy2 = _interopRequireDefault(_workingHoursSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DKrFL = function (_Component) {
  _inherits(DKrFL, _Component);

  function DKrFL() {
    _classCallCheck(this, DKrFL);

    return _possibleConstructorReturn(this, (DKrFL.__proto__ || Object.getPrototypeOf(DKrFL)).apply(this, arguments));
  }

  return DKrFL;
}(_metalComponent2.default);

;

_metalSoy2.default.register(DKrFL, _workingHoursSoy2.default);

exports.default = DKrFL;

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.DKrFL = undefined;

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

  // This file was automatically generated from working-hours.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace DKrFL.
   * @public
   */

  goog.module('DKrFL.incrementaldom');

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
    var param699 = function param699() {
      ie_open('h6');
      var dyn52 = opt_data.page.description;
      if (typeof dyn52 == 'function') dyn52();else if (dyn52 != null) itext(dyn52);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('Clockin');
      ie_close('h3');
      ie_open('p');
      itext('For control of hours worked by each employee we use ');
      ie_open('a', null, null, 'href', 'http://clockin.liferay.com/');
      itext('Clockin');
      ie_close('a');
      itext(', software created by Liferay, which stores each beat through the digital point. You can access it through your Liferay email.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Forgotten Registration');
      ie_close('h3');
      ie_open('p');
      itext('In case of home office, or forget to hit the point, you can fill out a document that should be sent to the Personal Department for them to do the adjustments. To learn how to make this adjustment, read this ');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/documents/112442/17829985/Regras+Ponto+Eletronico/5a15c172-c337-47bf-8a50-66232276e743');
      itext('document.');
      ie_close('a');
      ie_close('p');
      ie_open('p');
      itext('You can follow the update of this and other documents in the ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/topics/_DepartamentoPessoalBrasil');
      itext('#DepartamentoPessoalLatam');
      ie_close('a');
      itext(' topic page on Loop.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Extra Hours');
      ie_close('h3');
      ie_open('p');
      itext('The hour bank has its closure twice a year, in July and December. For positive hours, a payment will be made on the employee\'s salary and a discount for negative hours.');
      ie_close('p');
      ie_open('p');
      itext('It is important for the employee to look at the emails sent by the personal department so that they do not accumulate many hours, both positive and negative without the need, aligning with your manager to reset them or taking days off.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param699 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'DKrFL.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var DKrFL = function (_Component) {
  _inherits(DKrFL, _Component);

  function DKrFL() {
    _classCallCheck(this, DKrFL);

    return _possibleConstructorReturn(this, (DKrFL.__proto__ || Object.getPrototypeOf(DKrFL)).apply(this, arguments));
  }

  return DKrFL;
}(_metalComponent2.default);

_metalSoy2.default.register(DKrFL, templates);
exports.DKrFL = DKrFL;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[324]);