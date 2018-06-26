var pageComponent =
webpackJsonppageComponent([14],{

/***/ 312:
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

var _membersSoy = __webpack_require__(313);

var _membersSoy2 = _interopRequireDefault(_membersSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pYVux = function (_Component) {
  _inherits(pYVux, _Component);

  function pYVux() {
    _classCallCheck(this, pYVux);

    return _possibleConstructorReturn(this, (pYVux.__proto__ || Object.getPrototypeOf(pYVux)).apply(this, arguments));
  }

  return pYVux;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pYVux, _membersSoy2.default);

exports.default = pYVux;

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pYVux = undefined;

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

  // This file was automatically generated from members.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pYVux.
   * @public
   */

  goog.module('pYVux.incrementaldom');

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
    var param639 = function param639() {
      ie_open('h6');
      var dyn47 = opt_data.page.description;
      if (typeof dyn47 == 'function') dyn47();else if (dyn47 != null) itext(dyn47);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('LATAM (Latin America)');
      ie_close('h3');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_felipe.pires');
      itext('Felipe Pires');
      ie_close('a');
      itext(' - Manager, Senior UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_cassia.oliveira');
      itext('C\xE1ssia Oliveira');
      ie_close('a');
      itext(' - Associate UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_davi.shama');
      itext('Davi Sham\xE1');
      ie_close('a');
      itext(' - Associate UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_gabryelle.barbosa');
      itext('Gabbe Barbosa');
      ie_close('a');
      itext(' - Intern');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_jadson.dantas');
      itext('Jadson Dantas');
      ie_close('a');
      itext(' - UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_nathalia.moura');
      itext('Nathalia Moura');
      ie_close('a');
      itext(' - UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_rafael.fernandes');
      itext('Rafael Fernandes');
      ie_close('a');
      itext(' - Senior UX Designer');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('NA (North America)');
      ie_close('h3');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_paul.hanaoka');
      itext('Paul Hanaoka');
      ie_close('a');
      itext(' - Manager, UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_abel.hancock');
      itext('Abel Hancock');
      ie_close('a');
      itext(' - Associate UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_angelo.youn');
      itext('Angelo Youn');
      ie_close('a');
      itext(' - UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_christopher.jeong');
      itext('Christopher Jeong');
      ie_close('a');
      itext(' - UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_juan.hidalgo');
      itext('Juan Hildalgo');
      ie_close('a');
      itext(' - Director, User Experience');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_naoki.hisamoto');
      itext('Naoki Hisamoto');
      ie_close('a');
      itext(' - Associate UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_patrick.pentz');
      itext('Patrick Pentz');
      ie_close('a');
      itext(' - Associate UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_paul.tiplea');
      itext('Paul Tiplea');
      ie_close('a');
      itext(' - UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_rebecca.wu');
      itext('Rebecca Wu');
      ie_close('a');
      itext(' - Associate UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_ryan.connolly');
      itext('Ryan Connolly');
      ie_close('a');
      itext(' - Manager, UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_vitor.fernandes');
      itext('Vitor Fernandes');
      ie_close('a');
      itext(' - Manager, UX Designer');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('EMEA (Europe, Medium East and Africa)');
      ie_close('h3');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_victor.valle');
      itext('Victor Valle');
      ie_close('a');
      itext(' - Manager, UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_andras.himer');
      itext('Andras Himer');
      ie_close('a');
      itext(' - UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_andrea.censi');
      itext('Andrea Censi');
      ie_close('a');
      itext(' - UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_beatriz.martin');
      itext('Beatriz Martin');
      ie_close('a');
      itext(' - Senior UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_david.aragones');
      itext('David Aragones');
      ie_close('a');
      itext(' - Senior UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_duuriimaa.bargaid');
      itext('Duuriimaa Bargaid');
      ie_close('a');
      itext(' - Associate UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_emiliano.cicero');
      itext('Emiliano Cicero');
      ie_close('a');
      itext(' - UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_giorgia.rizzi');
      itext('Giorga Rizzi');
      ie_close('a');
      itext(' - Associate UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_juan.anton');
      itext('Juan Anton');
      ie_close('a');
      itext(' -  Senior UX Designer');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_susana.vazquez');
      itext('Susana Vazquez');
      ie_close('a');
      itext(' - Associate UX Designer');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param639 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pYVux.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pYVux = function (_Component) {
  _inherits(pYVux, _Component);

  function pYVux() {
    _classCallCheck(this, pYVux);

    return _possibleConstructorReturn(this, (pYVux.__proto__ || Object.getPrototypeOf(pYVux)).apply(this, arguments));
  }

  return pYVux;
}(_metalComponent2.default);

_metalSoy2.default.register(pYVux, templates);
exports.pYVux = pYVux;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[312]);