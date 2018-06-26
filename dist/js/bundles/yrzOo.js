var pageComponent =
webpackJsonppageComponent([21],{

/***/ 298:
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

var _acessAndLicensesSoy = __webpack_require__(299);

var _acessAndLicensesSoy2 = _interopRequireDefault(_acessAndLicensesSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var yrzOo = function (_Component) {
  _inherits(yrzOo, _Component);

  function yrzOo() {
    _classCallCheck(this, yrzOo);

    return _possibleConstructorReturn(this, (yrzOo.__proto__ || Object.getPrototypeOf(yrzOo)).apply(this, arguments));
  }

  return yrzOo;
}(_metalComponent2.default);

;

_metalSoy2.default.register(yrzOo, _acessAndLicensesSoy2.default);

exports.default = yrzOo;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.yrzOo = undefined;

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

  // This file was automatically generated from acess-and-licenses.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace yrzOo.
   * @public
   */

  goog.module('yrzOo.incrementaldom');

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
    var param574 = function param574() {
      ie_open('h6');
      var dyn42 = opt_data.page.description;
      if (typeof dyn42 == 'function') dyn42();else if (dyn42 != null) itext(dyn42);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('Passwords Configuration');
      ie_close('h3');
      ie_open('p');
      itext('Define your computer password with the same password of wifi. This general password is important in case someone needs to use the computer.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Apple ID');
      ie_close('h3');
      ie_open('p');
      itext('Your Apple ID is the account you use to access Apple services like the App Store. If you do not have an Apple ID, open Apple Store on your computer and create a new one, or go to their ');
      ie_open('a', null, null, 'href', 'https://appleid.apple.com/account#!&page=create');
      itext('website.');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Email Configuration');
      ie_close('h3');
      ie_open('p');
      itext('You should have received an email from the personnel department with your corporate email and the steps for the configuration. If not, contact Rafael Matos (rafael.matos@liferay.com), IT Manager.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h3');
      itext('Tools');
      ie_close('h3');
      ie_open('h5');
      itext('1. JIRA');
      ie_close('h5');
      ie_open('p');
      itext('Contact rafael.matos@liferay.com to request access.');
      ie_close('p');
      ie_open('p');
      itext('For more information about this tool and how we use here, ');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/web/global.engineering/wiki/-/wiki/Quality+Assurance+Main/Jira+Ticket+Formatting#security');
      itext('read this article.');
      ie_close('a');
      ie_close('p');
      ie_open('h5');
      itext('2. Sketch');
      ie_close('h5');
      ie_open('p');
      itext('Download for Mac and open a ticket on JIRA to Operations Liferay LATAM.');
      ie_close('p');
      ie_open('p');
      itext('For more information read ');
      ie_open('a', null, null, 'href', 'link');
      itext('Skecth');
      ie_close('a');
      itext('.');
      ie_close('p');
      ie_open('h5');
      itext('3. Zeplin');
      ie_close('h5');
      ie_open('p');
      itext('Download for MAc.');
      ie_close('p');
      ie_open('p');
      itext('Contact felipe.pires@liferay.com to request access to the team account.');
      ie_close('p');
      ie_open('p');
      itext('For more information about this tool see here.');
      ie_close('p');
      ie_open('h5');
      itext('4. InVision');
      ie_close('h5');
      ie_open('p');
      itext('Open a ticket on JIRA to Operations Liferay LATAM to request access to the team account.');
      ie_close('p');
      ie_open('p');
      itext('For more information read ');
      ie_open('a', null, null, 'href', 'link');
      itext('InVision');
      ie_close('a');
      ie_close('p');
      ie_open('h5');
      itext('5. Milanote');
      ie_close('h5');
      ie_open('p');
      itext('Contact felipe.pires@liferay.com to request access to the team account.');
      ie_close('p');
      ie_open('p');
      itext('For more information read ');
      ie_open('a', null, null, 'href', 'link');
      itext('Milanote');
      ie_close('a');
      ie_close('p');
      ie_open('h5');
      itext('6. Glyphs Mini');
      ie_close('h5');
      ie_open('p');
      itext('Download it from here.');
      ie_close('p');
      ie_open('p');
      itext('For more information about this tool see here.');
      ie_close('p');
      ie_open('h5');
      itext('7. Adobe creative cloud');
      ie_close('h5');
      ie_open('p');
      itext('Contact felipe.pires@liferay.com to request access.');
      ie_close('p');
      ie_open('p');
      itext('For more information about this tool see here.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param574 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'yrzOo.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var yrzOo = function (_Component) {
  _inherits(yrzOo, _Component);

  function yrzOo() {
    _classCallCheck(this, yrzOo);

    return _possibleConstructorReturn(this, (yrzOo.__proto__ || Object.getPrototypeOf(yrzOo)).apply(this, arguments));
  }

  return yrzOo;
}(_metalComponent2.default);

_metalSoy2.default.register(yrzOo, templates);
exports.yrzOo = yrzOo;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[298]);