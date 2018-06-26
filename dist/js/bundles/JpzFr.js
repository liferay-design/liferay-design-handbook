var pageComponent =
webpackJsonppageComponent([24],{

/***/ 292:
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

var _invisionSoy = __webpack_require__(293);

var _invisionSoy2 = _interopRequireDefault(_invisionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JpzFr = function (_Component) {
  _inherits(JpzFr, _Component);

  function JpzFr() {
    _classCallCheck(this, JpzFr);

    return _possibleConstructorReturn(this, (JpzFr.__proto__ || Object.getPrototypeOf(JpzFr)).apply(this, arguments));
  }

  return JpzFr;
}(_metalComponent2.default);

;

_metalSoy2.default.register(JpzFr, _invisionSoy2.default);

exports.default = JpzFr;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.JpzFr = undefined;

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

  // This file was automatically generated from invision.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace JpzFr.
   * @public
   */

  goog.module('JpzFr.incrementaldom');

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
    var param536 = function param536() {
      ie_open('h6');
      var dyn39 = opt_data.page.description;
      if (typeof dyn39 == 'function') dyn39();else if (dyn39 != null) itext(dyn39);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('About');
      ie_close('h3');
      ie_open('p');
      itext('Invision is an online platform where we can create and share initial prototypes or not, show user flows and receive feedback from other team members.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Naming Projects');
      ie_close('h3');
      ie_open('p');
      itext('When we share with our team and developers, it is important to maintain consistency so that when naming the projects there is a connection with other tools in which this project is allocated.');
      ie_close('p');
      ie_open('p');
      itext('For projects: (proj-initials)-EE-SS-story-name');
      ie_close('p');
      ie_open('p');
      ie_open('code');
      itext('For more information read Digital Asset management (DAM) article.');
      ie_close('code');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Organization');
      ie_close('h3');
      ie_open('p');
      itext('For each project section we add, we can divide into sections, for example:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Workflow');
      ie_close('li');
      ie_open('li');
      itext('Components');
      ie_close('li');
      ie_open('li');
      itext('Breakpoints');
      ie_close('li');
      ie_open('li');
      itext('Wireframes');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param536 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'JpzFr.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var JpzFr = function (_Component) {
  _inherits(JpzFr, _Component);

  function JpzFr() {
    _classCallCheck(this, JpzFr);

    return _possibleConstructorReturn(this, (JpzFr.__proto__ || Object.getPrototypeOf(JpzFr)).apply(this, arguments));
  }

  return JpzFr;
}(_metalComponent2.default);

_metalSoy2.default.register(JpzFr, templates);
exports.JpzFr = JpzFr;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[292]);