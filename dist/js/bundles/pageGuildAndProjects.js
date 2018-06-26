var pageComponent =
webpackJsonppageComponent([16],{

/***/ 308:
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

var _indexSoy = __webpack_require__(309);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageGuildAndProjects = function (_Component) {
  _inherits(pageGuildAndProjects, _Component);

  function pageGuildAndProjects() {
    _classCallCheck(this, pageGuildAndProjects);

    return _possibleConstructorReturn(this, (pageGuildAndProjects.__proto__ || Object.getPrototypeOf(pageGuildAndProjects)).apply(this, arguments));
  }

  return pageGuildAndProjects;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pageGuildAndProjects, _indexSoy2.default);

exports.default = pageGuildAndProjects;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pageGuildAndProjects = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pageGuildAndProjects.
   * @public
   */

  goog.module('pageGuildAndProjects.incrementaldom');

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

  /**
   * @param {{
   *    page: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    ie_open('html', null, null, 'lang', 'en');
    ie_open('head');
    ie_open('meta', null, null, 'charset', 'UTF-8');
    ie_close('meta');
    ie_open('meta', null, null, 'http-equiv', 'refresh', 'content', '0; URL=\'' + opt_data.page.url + '\'');
    ie_close('meta');
    ie_close('head');
    ie_close('html');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pageGuildAndProjects.render';
  }

  exports.render.params = ["page"];
  exports.render.types = { "page": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pageGuildAndProjects = function (_Component) {
  _inherits(pageGuildAndProjects, _Component);

  function pageGuildAndProjects() {
    _classCallCheck(this, pageGuildAndProjects);

    return _possibleConstructorReturn(this, (pageGuildAndProjects.__proto__ || Object.getPrototypeOf(pageGuildAndProjects)).apply(this, arguments));
  }

  return pageGuildAndProjects;
}(_metalComponent2.default);

_metalSoy2.default.register(pageGuildAndProjects, templates);
exports.pageGuildAndProjects = pageGuildAndProjects;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[308]);