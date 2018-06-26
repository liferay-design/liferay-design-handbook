var pageComponent =
webpackJsonppageComponent([23],{

/***/ 294:
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

var _milanoteSoy = __webpack_require__(295);

var _milanoteSoy2 = _interopRequireDefault(_milanoteSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlbnE = function (_Component) {
  _inherits(PlbnE, _Component);

  function PlbnE() {
    _classCallCheck(this, PlbnE);

    return _possibleConstructorReturn(this, (PlbnE.__proto__ || Object.getPrototypeOf(PlbnE)).apply(this, arguments));
  }

  return PlbnE;
}(_metalComponent2.default);

;

_metalSoy2.default.register(PlbnE, _milanoteSoy2.default);

exports.default = PlbnE;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.PlbnE = undefined;

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

  // This file was automatically generated from milanote.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace PlbnE.
   * @public
   */

  goog.module('PlbnE.incrementaldom');

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
    var param547 = function param547() {
      ie_open('h6');
      var dyn40 = opt_data.page.description;
      if (typeof dyn40 == 'function') dyn40();else if (dyn40 != null) itext(dyn40);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('About');
      ie_close('h3');
      ie_open('p');
      itext('Milanote is a tool where we manage and gather information from the projects we are working on. This tool can be accessed via web or you can install the application.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Boards organization');
      ie_close('h3');
      ie_open('p');
      itext('When we share with our team and developers, it is important to maintain consistency so that when naming the projects there is a connection with other tools in which this project is allocated. Not all projects need to have all these boards, they can be added over time.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/board-organization.png', 'alt', 'boards-organization');
      ie_close('img');
      ie_close('p');
      ie_open('h5');
      itext('1. Overview');
      ie_close('h5');
      ie_open('p');
      itext('This is where you put brief descriptions of what the project is about, short and long term goals, team members, and more. An example of the Forms project.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/overview.png', 'alt', 'folder-structure');
      ie_close('img');
      ie_close('p');
      ie_open('h5');
      itext('2. Benchmark');
      ie_close('h5');
      ie_open('p');
      itext('Where we gather screens, and all the information of our main committers. A good practice is to comment on the strengths and weaknesses of how they solve that problem.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/benchmark.png', 'alt', 'folder-structure');
      ie_close('img');
      ie_close('p');
      ie_open('h5');
      itext('3. Heuristics');
      ie_close('h5');
      ie_open('p');
      itext('On this board, we do a product analysis as it currently stands. You can build on ');
      ie_open('a', null, null, 'href', 'https://www.nngroup.com/articles/ten-usability-heuristics/');
      itext('10 heuristics for user interface by Jacob Nielsen.');
      ie_close('a');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/heuristics.png', 'alt', 'folder-structure');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('4. Links');
      ie_close('h4');
      ie_open('p');
      itext('All search links, articles related to that project or features that it has.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/links.png', 'alt', 'links');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('5. Information Architecture');
      ie_close('h4');
      ie_open('p');
      itext('You can build the architecture of your project through cards and notes.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/architecture.png', 'alt', 'architecture');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('6. Branding');
      ie_close('h4');
      ie_open('p');
      itext('Where you organize all the information and actions that the user and the system will do, being able to categorize and group, helping to build the interface.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/design-requirements.png', 'alt', 'design-requirements');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('7. Design Requirements');
      ie_close('h4');
      ie_open('p');
      itext('All material and research related to aspects of project branding. An example below the color of Events branding.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/branding.png', 'alt', 'branding');
      ie_close('img');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param547 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'PlbnE.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var PlbnE = function (_Component) {
  _inherits(PlbnE, _Component);

  function PlbnE() {
    _classCallCheck(this, PlbnE);

    return _possibleConstructorReturn(this, (PlbnE.__proto__ || Object.getPrototypeOf(PlbnE)).apply(this, arguments));
  }

  return PlbnE;
}(_metalComponent2.default);

_metalSoy2.default.register(PlbnE, templates);
exports.PlbnE = PlbnE;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[294]);