var pageComponent =
webpackJsonppageComponent([28],{

/***/ 284:
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

var _lexiconSoy = __webpack_require__(285);

var _lexiconSoy2 = _interopRequireDefault(_lexiconSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NAyDy = function (_Component) {
  _inherits(NAyDy, _Component);

  function NAyDy() {
    _classCallCheck(this, NAyDy);

    return _possibleConstructorReturn(this, (NAyDy.__proto__ || Object.getPrototypeOf(NAyDy)).apply(this, arguments));
  }

  return NAyDy;
}(_metalComponent2.default);

;

_metalSoy2.default.register(NAyDy, _lexiconSoy2.default);

exports.default = NAyDy;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.NAyDy = undefined;

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

  // This file was automatically generated from lexicon.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace NAyDy.
   * @public
   */

  goog.module('NAyDy.incrementaldom');

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
    var param498 = function param498() {
      ie_open('h6');
      var dyn36 = opt_data.page.description;
      if (typeof dyn36 == 'function') dyn36();else if (dyn36 != null) itext(dyn36);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('What is Lexicon');
      ie_close('h3');
      ie_open('p');
      itext('Lexicon is a design language created with the aim of providing a common framework for building interfaces within the Liferay product ecosystem. A guide to design principles, components, patterns and contexts of use that contributes to give consistency and coherence to these products and, ultimately, provide a satisfactory and unified experience to its users.');
      ie_close('p');
      ie_open('p');
      itext('Lexicon is a constantly evolving project. An iterative work that seeks to improve and gradually adapt to the evolution of technology and people.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Where to find');
      ie_close('h3');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://lexicondesign.io/');
      itext('Lexicon Site');
      ie_close('a');
      itext(' is then presented as the necessary platform for the diffusion and access to Lexicon system by designers, developers or any other person involved in the creation of digital products. Mainly focused on Liferay community, but open to anyone who wants to make use of its content and also want to contribute with their own proposals and suggestions.');
      ie_close('p');
      ie_open('p');
      itext('You can find the updated master file in the drive folder, in the ');
      ie_open('a', null, null, 'href', 'https://drive.google.com/drive/u/1/folders/1LAA4tn-WrCgfvJzQj7m8-aGGhDv1E5xr');
      itext('lexicon folder.');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Implementation');
      ie_close('h3');
      ie_open('p');
      itext('Lexicon is not an implementation, it is just a set of patterns, rules and behaviors. Many different libraries could implement Lexicon. Liferay\'s Lexicon Experience Language web implementation is ');
      ie_open('a', null, null, 'href', 'https://clayui.com/');
      itext('Clay.');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h3');
      itext('Contacts');
      ie_close('h3');
      ie_open('p');
      itext('If you have any questions or feedback about Lexicon, you can contact ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_victor.valle');
      itext('Victor Valle');
      ie_close('a');
      itext(', ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_emiliano.cicero');
      itext('Emiliano Cicero');
      ie_close('a');
      itext(' or join on slack channel #lexicon in Liferay Engineering.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param498 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'NAyDy.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var NAyDy = function (_Component) {
  _inherits(NAyDy, _Component);

  function NAyDy() {
    _classCallCheck(this, NAyDy);

    return _possibleConstructorReturn(this, (NAyDy.__proto__ || Object.getPrototypeOf(NAyDy)).apply(this, arguments));
  }

  return NAyDy;
}(_metalComponent2.default);

_metalSoy2.default.register(NAyDy, templates);
exports.NAyDy = NAyDy;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[284]);