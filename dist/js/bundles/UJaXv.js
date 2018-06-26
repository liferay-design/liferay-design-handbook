var pageComponent =
webpackJsonppageComponent([22],{

/***/ 296:
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

var _sketchSoy = __webpack_require__(297);

var _sketchSoy2 = _interopRequireDefault(_sketchSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UJaXv = function (_Component) {
  _inherits(UJaXv, _Component);

  function UJaXv() {
    _classCallCheck(this, UJaXv);

    return _possibleConstructorReturn(this, (UJaXv.__proto__ || Object.getPrototypeOf(UJaXv)).apply(this, arguments));
  }

  return UJaXv;
}(_metalComponent2.default);

;

_metalSoy2.default.register(UJaXv, _sketchSoy2.default);

exports.default = UJaXv;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.UJaXv = undefined;

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

  // This file was automatically generated from sketch.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace UJaXv.
   * @public
   */

  goog.module('UJaXv.incrementaldom');

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

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

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
    var param558 = function param558() {
      ie_open('h6');
      var dyn41 = opt_data.page.description;
      if (typeof dyn41 == 'function') dyn41();else if (dyn41 != null) itext(dyn41);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('About');
      ie_close('h3');
      ie_open('p');
      itext('Sketch is one of our main tools where we create the interfaces for the products we are working on.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Plugins');
      ie_close('h3');
      ie_open('p');
      itext('Sketch has several plugins that help and optimize our work, here is a list of the most used in Liferay, what they serve and where you can find them.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://github.com/romannurik/Sketch-ArtboardTricks');
      itext('Artboard Tricks');
      ie_close('a');
      itext(': Automatically rearranges your artboards');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://animaapp.github.io/Auto-Layout/');
      itext('Auto Layout');
      ie_close('a');
      itext(': Design responsive screens in Sketch and publish to HTML');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://www.invisionapp.com/craft');
      itext('Craft');
      ie_close('a');
      itext(': Craft is a suite of plugins to let you design with real data in mind.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://github.com/thierryc/Sketch-Find-And-Replace');
      itext('Find and Replace');
      ie_close('a');
      itext(': Finds text in selected layer(s) and all layers contained within - and replaces it with different text.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://nudg.it/');
      itext('Nudg.it');
      ie_close('a');
      itext(': Nudg.it is a simple app that allows you to quickly edit these settings on the fly.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://github.com/rodi01/RenameIt');
      itext('Rename it');
      ie_close('a');
      itext(': Rename layers and artboards automatically');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'http://sketchrunner.com/');
      itext('Runner');
      ie_close('a');
      itext(': Quickly search through all available plugins and Sketch menu commands.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://github.com/getflourish/Sketch-Mate');
      itext('Sketch');
      ie_close('a');
      itext(': Shortcuts to increase productivity');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://github.com/sonburn/symbol-organizer');
      itext('Symbol Organizer');
      ie_close('a');
      itext(': Organize your symbols page, and layer list, alphabetically and into groupings determined by your symbol names.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://github.com/saranshsolanki/SketchTranslate');
      itext('Sketch Translate');
      ie_close('a');
      itext(': Translate your artboards to different languages. Directly from your Sketch file.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://github.com/timuric/Content-generator-sketch-plugin');
      itext('Content Generator');
      ie_close('a');
      itext(': Quickly create dummy data such as avatars, names, geolocation data etc.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://magicsketch.io/mirror/');
      itext('Magic Mirror');
      ie_close('a');
      itext(': Add Perspective Transformation to Sketch');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Layers Organization');
      ie_close('h3');
      ie_open('p');
      itext('In Sketch, we also have an organization of the layers, so that it facilitates the subsequent editing of both the designer who did and others who can work on it.');
      ie_close('p');
      ie_open('h5');
      itext('1. Order');
      ie_close('h5');
      ie_open('p');
      itext('The order is always decreasing. Sketch automatically saves each new layer created above, but you should always rearrange when creating something new. You can use the Artboard Tricks plugin to rearrange it more quickly. And with each screen of the stream you are creating, list it in descending order.');
      ie_close('p');
      ie_open('h5');
      itext('2. Naming');
      ie_close('h5');
      ie_open('p');
      itext('For each layer the naming must have:');
      ie_close('p');
      $templateAlias2({ code: '01-current-page-(action-element)', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      itext('Examples: 01-home-(scrolled) 02-profile-edit-(hover-save-button)');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param558 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'UJaXv.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var UJaXv = function (_Component) {
  _inherits(UJaXv, _Component);

  function UJaXv() {
    _classCallCheck(this, UJaXv);

    return _possibleConstructorReturn(this, (UJaXv.__proto__ || Object.getPrototypeOf(UJaXv)).apply(this, arguments));
  }

  return UJaXv;
}(_metalComponent2.default);

_metalSoy2.default.register(UJaXv, templates);
exports.UJaXv = UJaXv;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[296]);