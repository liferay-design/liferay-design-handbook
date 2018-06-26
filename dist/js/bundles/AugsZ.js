var pageComponent =
webpackJsonppageComponent([30],{

/***/ 280:
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

var _designSprintSoy = __webpack_require__(281);

var _designSprintSoy2 = _interopRequireDefault(_designSprintSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AugsZ = function (_Component) {
  _inherits(AugsZ, _Component);

  function AugsZ() {
    _classCallCheck(this, AugsZ);

    return _possibleConstructorReturn(this, (AugsZ.__proto__ || Object.getPrototypeOf(AugsZ)).apply(this, arguments));
  }

  return AugsZ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(AugsZ, _designSprintSoy2.default);

exports.default = AugsZ;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.AugsZ = undefined;

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

  // This file was automatically generated from design-sprint.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace AugsZ.
   * @public
   */

  goog.module('AugsZ.incrementaldom');

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
    var param482 = function param482() {
      ie_open('h6');
      var dyn35 = opt_data.page.description;
      if (typeof dyn35 == 'function') dyn35();else if (dyn35 != null) itext(dyn35);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('What it is');
      ie_close('h3');
      ie_open('p');
      itext('A design sprint is a five-phase framework that helps answer critical business questions through rapid prototyping and user testing. Sprints let your team reach clearly defined goals and deliverables and gain key learnings, quickly. The process helps spark innovation, encourage user-centered thinking, align your team under a shared vision, and get you to product launch faster.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Phases');
      ie_close('h3');
      ie_open('p');
      itext('Before the Design Sprint, prepare by picking the proper team, environment, materials and tools.');
      ie_close('p');
      ie_open('h5');
      itext('1. Understand');
      ie_close('h5');
      ie_open('p');
      itext('Discover the business opportunity, the audience, the competition, the value proposition, and define metrics of success.');
      ie_close('p');
      ie_open('h5');
      itext('2. Diverge');
      ie_close('h5');
      ie_open('p');
      itext('Explore, develop and iterate creative ways of solving the problem, regardless of feasibility.');
      ie_close('p');
      ie_open('h5');
      itext('3. Converge');
      ie_close('h5');
      ie_open('p');
      itext('Identify ideas that fit the next product cycle and explore them in further detail through storyboarding.');
      ie_close('p');
      ie_open('h5');
      itext('4. Prototype');
      ie_close('h5');
      ie_open('p');
      itext('Design and prepare prototype(s) that can be tested with people.');
      ie_close('p');
      ie_open('h5');
      itext('5. Test');
      ie_close('h5');
      ie_open('p');
      itext('Conduct user testing with people from the product\'s primary target audience. Ask good questions.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Deliverables');
      ie_close('h3');
      ie_open('p');
      itext('The main deliverables after the Design sprint:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Findings from the sprint (notes, user journey maps, storyboards, information architecture diagrams, etc.)');
      ie_close('li');
      ie_open('li');
      itext('Prototypes');
      ie_close('li');
      ie_open('li');
      itext('Report from the user testing with the findings (backed by testing videos)');
      ie_close('li');
      ie_open('li');
      itext('A plan for next steps');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h3');
      itext('Resources');
      ie_close('h3');
      ie_open('p');
      itext('For more content about Design Sprint:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://designsprintkit.withgoogle.com/');
      itext('Design Sprint kit');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://brasil.uxdesign.cc/google-design-sprint-como-funciona-e-como-aplicar-no-seu-projeto-279107363659');
      itext('Google Design Sprint');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param482 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'AugsZ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var AugsZ = function (_Component) {
  _inherits(AugsZ, _Component);

  function AugsZ() {
    _classCallCheck(this, AugsZ);

    return _possibleConstructorReturn(this, (AugsZ.__proto__ || Object.getPrototypeOf(AugsZ)).apply(this, arguments));
  }

  return AugsZ;
}(_metalComponent2.default);

_metalSoy2.default.register(AugsZ, templates);
exports.AugsZ = AugsZ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[280]);