var pageComponent =
webpackJsonppageComponent([17],{

/***/ 306:
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

var _introductionSoy = __webpack_require__(307);

var _introductionSoy2 = _interopRequireDefault(_introductionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IjYxk = function (_Component) {
  _inherits(IjYxk, _Component);

  function IjYxk() {
    _classCallCheck(this, IjYxk);

    return _possibleConstructorReturn(this, (IjYxk.__proto__ || Object.getPrototypeOf(IjYxk)).apply(this, arguments));
  }

  return IjYxk;
}(_metalComponent2.default);

;

_metalSoy2.default.register(IjYxk, _introductionSoy2.default);

exports.default = IjYxk;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.IjYxk = undefined;

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

  // This file was automatically generated from introduction.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace IjYxk.
   * @public
   */

  goog.module('IjYxk.incrementaldom');

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
    var param612 = function param612() {
      ie_open('h6');
      var dyn45 = opt_data.page.description;
      if (typeof dyn45 == 'function') dyn45();else if (dyn45 != null) itext(dyn45);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('p');
      ie_open('img', null, null, 'src', 'https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif', 'alt', 'minions-introduction');
      ie_close('img');
      ie_close('p');
      ie_open('h3');
      itext('About This Handbook');
      ie_close('h3');
      ie_open('p');
      itext('We know that there is a lot of information to absorb on the first days, first weeks, even in the first few months. Do not worry, we know you will take some time to get it all and it\'s normal to forget some of the things that were said and passed on in those early days \u2013 even the old members forget a few things here and there. This is why we have this handbook. Here, in a simple and direct way, you can understand more about our design team, and if forget something, you can always take a look again.');
      ie_close('p');
      ie_open('p');
      itext('The first topic, Getting Started, it\'s about the things to do during onboarding. The others topics  will cover our processes, the standards we use, the projects we have and a lot of other things. So grab some coffee and some cookies and enjoy! Then we\'ll do a test to see if you\'ve memorized everything...I\'m just kidding!');
      ie_close('p');
      ie_open('p');
      itext('Ah, one important thing: we want to hear your feedback! Did we miss something? Or is there anything not so clear? Please, let us now!');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param612 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'IjYxk.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var IjYxk = function (_Component) {
  _inherits(IjYxk, _Component);

  function IjYxk() {
    _classCallCheck(this, IjYxk);

    return _possibleConstructorReturn(this, (IjYxk.__proto__ || Object.getPrototypeOf(IjYxk)).apply(this, arguments));
  }

  return IjYxk;
}(_metalComponent2.default);

_metalSoy2.default.register(IjYxk, templates);
exports.IjYxk = IjYxk;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[306]);