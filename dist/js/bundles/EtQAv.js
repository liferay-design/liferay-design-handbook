var pageComponent =
webpackJsonppageComponent([31],{

/***/ 278:
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

var _designCritiqueSessionSoy = __webpack_require__(279);

var _designCritiqueSessionSoy2 = _interopRequireDefault(_designCritiqueSessionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EtQAv = function (_Component) {
  _inherits(EtQAv, _Component);

  function EtQAv() {
    _classCallCheck(this, EtQAv);

    return _possibleConstructorReturn(this, (EtQAv.__proto__ || Object.getPrototypeOf(EtQAv)).apply(this, arguments));
  }

  return EtQAv;
}(_metalComponent2.default);

;

_metalSoy2.default.register(EtQAv, _designCritiqueSessionSoy2.default);

exports.default = EtQAv;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.EtQAv = undefined;

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

  // This file was automatically generated from design-critique-session.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace EtQAv.
   * @public
   */

  goog.module('EtQAv.incrementaldom');

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
    var param471 = function param471() {
      ie_open('h6');
      var dyn34 = opt_data.page.description;
      if (typeof dyn34 == 'function') dyn34();else if (dyn34 != null) itext(dyn34);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What it is');
      ie_close('h2');
      ie_open('p');
      itext('The Design Critique is a regular meeting between team members where work in progress is presented in order to get feedback and evaluate whether the solutions proposed are reaching their goals.');
      ie_close('p');
      ie_open('p');
      itext('Why we do it? Feedback is an important tool for improving work and make the design and designers better. It also help us to get aligned as a team, to see things through others perspective, to share knowledge, identify opportunities and to foster a culture of collaboration.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('How it works');
      ie_close('h2');
      ie_open('h5');
      itext('1. When');
      ie_close('h5');
      ie_open('p');
      itext('The meeting happens on demand, but we booked a set schedule on Wednesdays for this moment.');
      ie_close('p');
      ie_open('h5');
      itext('2. Rules');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('Max. 2 projects per session');
      ie_close('li');
      ie_open('li');
      itext('Each presentation may take up to 1h');
      ie_close('li');
      ie_open('li');
      itext('Max. 5 participants (considering facilitator, note taker and critiques)');
      ie_close('li');
      ie_open('li');
      itext('Token');
      ie_close('li');
      ie_open('li');
      itext('15min presentation');
      ie_close('li');
      ie_open('li');
      itext('5min feedback per person');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('3. Roles');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('The presenter must clearly articulate on the problem he/she is trying to solve. Before showing his project, answer these questions:');
      ie_close('p');
      ie_open('ol');
      ie_open('li');
      itext('Why problem is the design trying to solve?');
      ie_close('li');
      ie_open('li');
      itext('Who is the target user?');
      ie_close('li');
      ie_open('li');
      itext('Why is it important to solve this problem for the use? Why is it important for the business to solve this problem?');
      ie_close('li');
      ie_open('li');
      itext('What kind of feedback he wants from critics?');
      ie_close('li');
      ie_close('ol');
      ie_close('li');
      ie_close('ul');
      ie_open('ul');
      ie_open('li');
      itext('The mediator will make sure the meeting will run happily on time and and keep everyone focused on the purpose of the meeting.');
      ie_close('li');
      ie_open('li');
      itext('The note taker will take notes on the feedbacks.');
      ie_close('li');
      ie_open('li');
      itext('The critics must provide feedbacks related to the problem and suggest alternate approaches. This article talks about interesting method of giving feedbacks through questions');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('4. Rounds');
      ie_close('h5');
      ie_open('p');
      itext('Since there might be up to 2 presentations per meeting, each round will cover 1 project and will consider the following steps.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Opening: the session starts with the facilitator explaining the rules;');
      ie_close('li');
      ie_open('li');
      itext('Presentation: up to 15min;');
      ie_close('li');
      ie_open('li');
      itext('Feedbacks: 5min per critique / up to 30min total;');
      ie_close('li');
      ie_open('li');
      itext('Wrap-up: the facilitator makes sure all feedbacks are clarified and points if there is need for further discussion.');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('5. Materials and tools');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('For the room: paper, pencil, timer, TV;');
      ie_close('li');
      ie_open('li');
      itext('For the presentation: laptop, InVision, Figma;');
      ie_close('li');
      ie_open('li');
      itext('Water, coffee and snacks');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Good Practices');
      ie_close('h3');
      ie_open('p');
      itext('For everything to happen well and the meeting to be positive, we have created some good practices.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Be respectful;');
      ie_close('li');
      ie_open('li');
      itext('Encourage constructive criticism;');
      ie_close('li');
      ie_open('li');
      itext('Be positive and congratulate good work;');
      ie_close('li');
      ie_open('li');
      itext('Be empathetic;');
      ie_close('li');
      ie_open('li');
      itext('Be on time;');
      ie_close('li');
      ie_open('li');
      itext('Organize your work before the meeting;');
      ie_close('li');
      ie_open('li');
      itext('Use the sandwich feedback method;');
      ie_close('li');
      ie_open('li');
      itext('Personal feedback, after the meeting;');
      ie_close('li');
      ie_open('li');
      itext('Don\'t try to design in the meeting;');
      ie_close('li');
      ie_open('li');
      itext('Don\'t provide feedback out of script;');
      ie_close('li');
      ie_open('li');
      itext('Avoid parallel conversation;');
      ie_close('li');
      ie_open('li');
      itext('Don\'t take it personal.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('And lastly, an image that represents how well we should behave when receiving feedbacks.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', '/images/folder-structure.png', 'alt', 'folder-structure');
      ie_close('img');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param471 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'EtQAv.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var EtQAv = function (_Component) {
  _inherits(EtQAv, _Component);

  function EtQAv() {
    _classCallCheck(this, EtQAv);

    return _possibleConstructorReturn(this, (EtQAv.__proto__ || Object.getPrototypeOf(EtQAv)).apply(this, arguments));
  }

  return EtQAv;
}(_metalComponent2.default);

_metalSoy2.default.register(EtQAv, templates);
exports.EtQAv = EtQAv;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[278]);