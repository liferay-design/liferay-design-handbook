var pageComponent =
webpackJsonppageComponent([32],{

/***/ 276:
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

var _damSoy = __webpack_require__(277);

var _damSoy2 = _interopRequireDefault(_damSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TcQLj = function (_Component) {
  _inherits(TcQLj, _Component);

  function TcQLj() {
    _classCallCheck(this, TcQLj);

    return _possibleConstructorReturn(this, (TcQLj.__proto__ || Object.getPrototypeOf(TcQLj)).apply(this, arguments));
  }

  return TcQLj;
}(_metalComponent2.default);

;

_metalSoy2.default.register(TcQLj, _damSoy2.default);

exports.default = TcQLj;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.TcQLj = undefined;

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

  // This file was automatically generated from dam.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace TcQLj.
   * @public
   */

  goog.module('TcQLj.incrementaldom');

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
    var param365 = function param365() {
      ie_open('h6');
      var dyn33 = opt_data.page.description;
      if (typeof dyn33 == 'function') dyn33();else if (dyn33 != null) itext(dyn33);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('What is DAM');
      ie_close('h3');
      ie_open('p');
      itext('DAM - Digital Asset Management is a set of good practices for organizing the files and folders of projects that the entire design team works worldwide, so they can be easily found through these standards and consistency.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Rules');
      ie_close('h3');
      ie_open('h5');
      itext('1. Lowercase and hyphens, always');
      ie_close('h5');
      $templateAlias2({ code: 'folder-title\nfile-title', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('2. Numbers at the beginning for timelines');
      ie_close('h5');
      $templateAlias2({ code: '01-first-sprint\n02-second-sprint', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('3. Numbers at the end for versions');
      ie_close('h5');
      $templateAlias2({ code: 'ui-design-01\nui-design-02', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('4. Numbers and letters at the end for variations');
      ie_close('h5');
      $templateAlias2({ code: 'ui-design-01\nui-design-02', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('5. Abbreviations and acronyms are only for proper nouns');
      ie_close('h5');
      $templateAlias2({ code: 'delete-item\nbackground\nux-design', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('6. Dates at the beginning');
      ie_close('h5');
      $templateAlias2({ code: '2017-09-02-add-item\n2018-01-01-delete-item', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('7. Allowed characters');
      ie_close('h5');
      $templateAlias2({ code: '()\n-\n.\na to z\n1234567890', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('8. No empty folders');
      ie_close('h5');
      ie_open('h5');
      itext('9. No files and folders together');
      ie_close('h5');
      ie_open('h5');
      itext('10. Parenthesis for categories');
      ie_close('h5');
      $templateAlias2({ code: '(w)-add-case\n(m)-delete-avatar\n(u)-edit-page\n(t)-create-asset', mode: 'text' }, null, opt_ijData);
      ie_close('article');
      ie_open('p');
      ie_open('br');
      ie_close('br');
      ie_open('br');
      ie_close('br');
      ie_close('p');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Folder Structure');
      ie_close('h3');
      ie_open('p');
      itext('This model of structure was thought to meet all types of projects that we have in Liferay, although some use all the structure others do not need.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Team');
      ie_open('ul');
      ie_open('li');
      itext('Project');
      ie_open('ul');
      ie_open('li');
      itext('Milestone (m)');
      ie_open('ul');
      ie_open('li');
      itext('Module (p)');
      ie_open('ul');
      ie_open('li');
      itext('Sub-module (pp)');
      ie_open('ul');
      ie_open('li');
      itext('Epic (e)');
      ie_open('ul');
      ie_open('li');
      itext('Story (s)');
      ie_open('ul');
      ie_open('li');
      itext('Task (t)');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      ie_open('br');
      ie_close('br');
      ie_open('br');
      ie_close('br');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/folder-structure.png', 'alt', 'folder-structure');
      ie_close('img');
      ie_close('p');
      ie_open('p');
      ie_open('br');
      ie_close('br');
      ie_open('br');
      ie_close('br');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h3');
      itext('Task Level Catalog');
      ie_close('h3');
      ie_open('h5');
      itext('1. (t)-use-case');
      ie_close('h5');
      ie_open('p');
      itext('It\u2019s list of actions or event steps typically defining the interactions between a role and a system to achieve a goal.');
      ie_close('p');
      $templateAlias2({ code: '(u)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('2. (t)-personas');
      ie_close('h5');
      ie_open('p');
      itext('A fictitious identity that reflects one of the user groups for who you are designing.');
      ie_close('p');
      $templateAlias2({ code: '(u)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('3. (t)-task-flows');
      ie_close('h5');
      ie_open('p');
      itext('A graphical representation of activities and actions conducted by users of a system.');
      ie_close('p');
      $templateAlias2({ code: '(t)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('4. (t)-sketches');
      ie_close('h5');
      ie_open('p');
      itext('A rough, often hand-sketched, drawing of a user interface.');
      ie_close('p');
      $templateAlias2({ code: '(s)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('5. (t)-wireframes');
      ie_close('h5');
      ie_open('p');
      itext('A rough guide for the layout of a website or app, either done with pen and paper or with wireframing software.');
      ie_close('p');
      $templateAlias2({ code: '(w)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('6. (t)-mockups');
      ie_close('h5');
      ie_open('p');
      itext('A model which is quite close to the final product, with lots of detail and a good indication of the final proposed aesthetics and functionality.');
      ie_close('p');
      $templateAlias2({ code: '(m)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('7. (t)-animations');
      ie_close('h5');
      ie_open('p');
      itext('Interactive prototypes or animated low/high fidelity UI models.');
      ie_close('p');
      $templateAlias2({ code: '(a)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('8. (t)-breakpoints');
      ie_close('h5');
      ie_open('p');
      itext('It\u2019s an approach to web design which makes web pages render well on a variety of devices and window or screen sizes.');
      ie_close('p');
      $templateAlias2({ code: '(b)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('9. (t)-components');
      ie_close('h5');
      ie_open('p');
      itext('Graphical instructions of the different interactive behaviours an interface element may have.');
      ie_close('p');
      $templateAlias2({ code: '(c)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('10. (t)-notes');
      ie_close('h5');
      ie_open('p');
      itext('Complementary written information to be shared with stakeholder.');
      ie_close('p');
      $templateAlias2({ code: '(n)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_open('h5');
      itext('11. (t)-others');
      ie_close('h5');
      ie_open('p');
      itext('Any other kind of deliverable that does not fit into any existing category.');
      ie_close('p');
      $templateAlias2({ code: '(o)-file-title.ext', mode: 'text' }, null, opt_ijData);
      ie_close('article');
      ie_open('p');
      ie_open('br');
      ie_close('br');
      ie_open('br');
      ie_close('br');
      ie_close('p');
      ie_open('article', null, null, 'id', '5');
      ie_open('h3');
      itext('Deliverables');
      ie_close('h3');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/deliverables-sketch.png', 'alt', 'folder-structure');
      ie_close('img');
      ie_close('p');
      ie_close('article');
      ie_open('p');
      ie_open('br');
      ie_close('br');
      ie_open('br');
      ie_close('br');
      ie_close('p');
      ie_open('article', null, null, 'id', '6');
      ie_open('h3');
      itext('Designer Initials');
      ie_close('h3');
      ie_open('ul');
      ie_open('li');
      itext('AC - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_andrea.censi');
      itext('Andrea Censi');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('AH - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_abel.hancock');
      itext('Abel Hancock');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('AHI - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_andras.himer');
      itext('Andras Himer');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('AY - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_angelo.youn');
      itext('Angelo Youn');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('BM - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_beatriz.martin');
      itext('Beatriz Martin');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('CJ - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_christopher.jeong');
      itext('Christopher Jeong');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('CO - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_cassia.oliveira');
      itext('C\xE1ssia Oliveira');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('DA - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_david.aragones');
      itext('David Aragones');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('DS - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_davi.shama');
      itext('Davi Sham\xE1');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('DB - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_duuriimaa.bargaid');
      itext('Duuriimaa Bargaid');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('EC - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_emiliano.cicero');
      itext('Emiliano Cicero');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('FP - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_felipe.pires');
      itext('Felipe Pires');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('GB - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_gabryelle.barbosa');
      itext('Gabbe Barbosa');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('GR - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_giorgia.rizzi');
      itext('Giorga Rizzi');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('JA - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_juan.anton');
      itext('Juan Anton');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('JD - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_jadson.dantas');
      itext('Jadson Dantas');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('JH - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_juan.anton');
      itext('Juan Anton');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('NH - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_naoki.hisamoto');
      itext('Naoki Hisamoto');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('NM - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_nathalia.moura');
      itext('Nathalia Moura');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('PH - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_paul.hanaoka');
      itext('Paul Hanaoka');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('PP - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_patrick.pentz');
      itext('Patrick Pentz');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('PT - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_paul.tiplea');
      itext('Paul Tiplea');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('RC - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_ryan.connolly');
      itext('Ryan Connolly');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('RF - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_rafael.fernandes');
      itext('Rafael Fernandes');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('RW - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_rebecca.wu');
      itext('Rebecca Wu');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('SV - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_susana.vazquez');
      itext('Susana Vazquez');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('VF - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_vitor.fernandes');
      itext('Vitor Fernandes');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      itext('VV - ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_victor.valle');
      itext('Victor Valle');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('p');
      ie_open('br');
      ie_close('br');
      ie_open('br');
      ie_close('br');
      ie_close('p');
      ie_open('article', null, null, 'id', '7');
      ie_open('h3');
      itext('Project Catalog');
      ie_close('h3');
      ie_open('p');
      itext('To easily be found and identified in InVision, we catalog the projects with their initial letters.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(bl)-Blogs');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_david.aragones');
      itext('David Aragones');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(co)-Comments');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_david.aragones');
      itext('David Aragones');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(cp)-Customer Portal');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: Patrick Pentz');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(dm)-Documents and Media');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_david.aragones');
      itext('David Aragones');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(ec)-Experience Cloud');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_jadson.dantas');
      itext('Jadson Dantas');
      ie_close('a');
      itext(', ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_rafael.fernandes');
      itext('Rafael Fernandes');
      ie_close('a');
      itext(', ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_christopher.jeong');
      itext('Christopher Jeong');
      ie_close('a');
      itext('. ');
      ie_open('br');
      ie_close('br');
      itext('(ect)- touchpoint');
      ie_open('br');
      ie_close('br');
      itext('(eca)- assets');
      ie_open('br');
      ie_close('br');
      itext('(ec)');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(f)-Forms');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_cassia.oliveira');
      itext('C\xE1ssia Oliveira');
      ie_close('a');
      itext(', ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_jadson.dantas');
      itext('Jadson Dantas');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(fs)-Forms Screenlets');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_cassia.oliveira');
      itext('C\xE1ssia Oliveira');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(lexi)-Lexicon');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_victor.valle');
      itext('Victor Valle');
      ie_close('a');
      itext(', ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_juan.anton');
      itext('Juan Anton');
      ie_close('a');
      itext(', ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_emiliano.cicero');
      itext('Emiliano Cicero');
      ie_close('a');
      itext(', ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_susana.vazquez');
      itext('Susana Vazquez');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(msb)-Modern Site Building');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_beatriz.martin');
      itext('Beatriz Martin');
      ie_close('a');
      itext(', ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_duuriimaa.bargaid');
      itext('Duuriimaa Bargaid');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(s)-Search');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_susana.vazquez');
      itext('Susana Vazquez');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(stg)-Staging');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers:');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(usm)-User & System Management');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers:');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(wad)-WeDeploy Admin');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: Vitor Fernandes');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(wc)-WeDeploy Console');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: Vitor Fernandes');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(we)-WeDeploy Emails');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: Vitor Fernandes');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(ws)-WeDeploy Site');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: Vitor Fernandes');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(wem)-Web Experience Management');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers:');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('(w)-Workflow');
      ie_close('strong');
      ie_open('br');
      ie_close('br');
      itext('Designers: Nath\xE1lia Mourac');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('p');
      ie_open('br');
      ie_close('br');
      ie_open('br');
      ie_close('br');
      ie_close('p');
      ie_open('article', null, null, 'id', '8');
      ie_open('h3');
      itext('Invision Naming');
      ie_close('h3');
      ie_open('p');
      ie_open('br');
      ie_close('br');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/invision-naming.png', 'alt', 'invision-naming');
      ie_close('img');
      ie_close('p');
      ie_open('p');
      ie_close('articles');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param365 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'TcQLj.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var TcQLj = function (_Component) {
  _inherits(TcQLj, _Component);

  function TcQLj() {
    _classCallCheck(this, TcQLj);

    return _possibleConstructorReturn(this, (TcQLj.__proto__ || Object.getPrototypeOf(TcQLj)).apply(this, arguments));
  }

  return TcQLj;
}(_metalComponent2.default);

_metalSoy2.default.register(TcQLj, templates);
exports.TcQLj = TcQLj;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[276]);