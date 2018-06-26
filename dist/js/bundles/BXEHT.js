var pageComponent =
webpackJsonppageComponent([8],{

/***/ 322:
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

var _travelsSoy = __webpack_require__(323);

var _travelsSoy2 = _interopRequireDefault(_travelsSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BXEHT = function (_Component) {
  _inherits(BXEHT, _Component);

  function BXEHT() {
    _classCallCheck(this, BXEHT);

    return _possibleConstructorReturn(this, (BXEHT.__proto__ || Object.getPrototypeOf(BXEHT)).apply(this, arguments));
  }

  return BXEHT;
}(_metalComponent2.default);

;

_metalSoy2.default.register(BXEHT, _travelsSoy2.default);

exports.default = BXEHT;

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.BXEHT = undefined;

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

  // This file was automatically generated from travels.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace BXEHT.
   * @public
   */

  goog.module('BXEHT.incrementaldom');

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
    var param688 = function param688() {
      ie_open('h6');
      var dyn51 = opt_data.page.description;
      if (typeof dyn51 == 'function') dyn51();else if (dyn51 != null) itext(dyn51);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('Request');
      ie_close('h3');
      ie_open('p');
      itext('Business trips should first be aligned with the manager. And after that, the employee must make the application. This tutorial (in portuguese) explains step by step how to use the system for travel ticket request!');
      ie_close('p');
      ie_open('p');
      itext('For any questions related to travel, you can contact ');
      ie_open('a', null, null, 'href', 'karina.ohara@liferay.com');
      itext('Karina Ohara');
      ie_close('a');
      itext(', and follow the hashtag ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/topics/_TravelLATAM');
      itext('#TravelLATAM.');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Documents');
      ie_close('h3');
      ie_open('p');
      itext('Are you going to need to travel to the international? It is important to pay attention soon to the documents you will need.');
      ie_close('p');
      ie_open('h5');
      itext('1. Passaport');
      ie_close('h5');
      ie_open('p');
      itext('It is the first step for your trip. In this ');
      ie_open('a', null, null, 'href', 'http://www.melhoresdestinos.com.br/como-tirar-passaporte.html');
      itext('article');
      ie_close('a');
      itext(' you can all the steps to take out your passport (Brazil). You can also find on the website of the Federal Police in the category of passport');
      ie_close('p');
      ie_open('h5');
      itext('2. Visto');
      ie_close('h5');
      ie_open('p');
      itext('Once you have a passport in hand, you have to find out if the country requires a visa, or stop countries. Learn how to get your visa here. Liferay also delivers a letter to the official for the visa, you should contact the Personal Department by ');
      ie_open('a', null, null, 'href', 'heloisa.maciel@liferay.com');
      itext('Heloisa Maciel.');
      ie_close('a');
      ie_close('p');
      ie_open('p');
      itext('In this ');
      ie_open('a', null, null, 'href', 'http://www.melhoresdestinos.com.br/15-dicas-para-a-primeira-viagem-ao-exterior.html');
      itext('article');
      ie_close('a');
      itext(' we have some tips for your first trip.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Check List');
      ie_close('h3');
      ie_open('p');
      itext('If you are a first-time traveler, we created a check-list with the items we usually take, a little tip from our team:');
      ie_close('p');
      ie_open('h5');
      itext('1. Geral & Personal Care');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('Vaccine');
      ie_close('li');
      ie_open('li');
      itext('Necessaire');
      ie_close('li');
      ie_open('li');
      itext('Notebook');
      ie_close('li');
      ie_open('li');
      itext('Pen, pencil, and eraser');
      ie_close('li');
      ie_open('li');
      itext('Check Climate');
      ie_close('li');
      ie_open('li');
      itext('Appropriate clothing');
      ie_close('li');
      ie_open('li');
      itext('Toothbrush');
      ie_close('li');
      ie_open('li');
      itext('Shampoo / Conditioner / Moisturizer');
      ie_close('li');
      ie_open('li');
      itext('Deodorant');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('2. Finance');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('Credit cards (make sure you have advised the bank about the trip)');
      ie_close('li');
      ie_open('li');
      itext('Money in cash');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('3. Documents');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('Passport');
      ie_close('li');
      ie_open('li');
      itext('Visa');
      ie_close('li');
      ie_open('li');
      itext('Travel insurance');
      ie_close('li');
      ie_open('li');
      itext('Liferay Letter');
      ie_close('li');
      ie_open('li');
      itext('Driver\'s license');
      ie_close('li');
      ie_open('li');
      itext('Unlock Outdoor Use Cards');
      ie_close('li');
      ie_open('li');
      itext('Round-trip ticket');
      ie_close('li');
      ie_open('li');
      itext('Hotel reservation');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('4. Entertainment');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('Movies');
      ie_close('li');
      ie_open('li');
      itext('Series');
      ie_close('li');
      ie_open('li');
      itext('About us');
      ie_close('li');
      ie_open('li');
      itext('Book');
      ie_close('li');
      ie_open('li');
      itext('Podcasts');
      ie_close('li');
      ie_open('li');
      itext('Trip Guide');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('5. Gadgets');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('Powerbank');
      ie_close('li');
      ie_open('li');
      itext('Kindle');
      ie_close('li');
      ie_open('li');
      itext('Kindle Charger');
      ie_close('li');
      ie_open('li');
      itext('Smartphone');
      ie_close('li');
      ie_open('li');
      itext('Smartphone charger');
      ie_close('li');
      ie_open('li');
      itext('Universal adapter');
      ie_close('li');
      ie_open('li');
      itext('Mac Uploader');
      ie_close('li');
      ie_open('li');
      itext('Extension');
      ie_close('li');
      ie_open('li');
      itext('External HD');
      ie_close('li');
      ie_open('li');
      itext('Ethernet Adapter');
      ie_close('li');
      ie_open('li');
      itext('Macbook');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('6. Medicines');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('Antiallergic');
      ie_close('li');
      ie_open('li');
      itext('Analgesic');
      ie_close('li');
      ie_open('li');
      itext('Digestive');
      ie_close('li');
      ie_open('li');
      itext('Sinusitis and Rhinitis');
      ie_close('li');
      ie_open('li');
      itext('Anti-inflammatory');
      ie_close('li');
      ie_open('li');
      itext('Syrup');
      ie_close('li');
      ie_open('li');
      itext('Headache medicine');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Anything else important that you think is good to be on this list? Speak to us!');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param688 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'BXEHT.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var BXEHT = function (_Component) {
  _inherits(BXEHT, _Component);

  function BXEHT() {
    _classCallCheck(this, BXEHT);

    return _possibleConstructorReturn(this, (BXEHT.__proto__ || Object.getPrototypeOf(BXEHT)).apply(this, arguments));
  }

  return BXEHT;
}(_metalComponent2.default);

_metalSoy2.default.register(BXEHT, templates);
exports.BXEHT = BXEHT;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[322]);