var pageComponent =
webpackJsonppageComponent([26],{

/***/ 288:
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

var _quarterReviewSoy = __webpack_require__(289);

var _quarterReviewSoy2 = _interopRequireDefault(_quarterReviewSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ynlik = function (_Component) {
  _inherits(ynlik, _Component);

  function ynlik() {
    _classCallCheck(this, ynlik);

    return _possibleConstructorReturn(this, (ynlik.__proto__ || Object.getPrototypeOf(ynlik)).apply(this, arguments));
  }

  return ynlik;
}(_metalComponent2.default);

;

_metalSoy2.default.register(ynlik, _quarterReviewSoy2.default);

exports.default = ynlik;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ynlik = undefined;

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

  // This file was automatically generated from quarter-review.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ynlik.
   * @public
   */

  goog.module('ynlik.incrementaldom');

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
    var param520 = function param520() {
      ie_open('h6');
      var dyn38 = opt_data.page.description;
      if (typeof dyn38 == 'function') dyn38();else if (dyn38 != null) itext(dyn38);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('What it is');
      ie_close('h3');
      ie_open('p');
      itext('It is a method of evaluating employees. In order for the company and its employees to continue growing, we divide the year into quarters, where we make an evaluation and create goals for every 3 months. Besides the company and leaders accompanying the growth of the employee, he will also self-evaluate.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('How it works');
      ie_close('h3');
      ie_open('p');
      itext('Every 3 months the manager will schedule a review meeting, whether it lasts an average of 3 hours. And in this meeting we will cover 5 topics.');
      ie_close('p');
      ie_open('h5');
      itext('1. Personal Needs & Goals');
      ie_close('h5');
      ie_open('p');
      itext('In this first step the employe will tell yours personal needs and goals, and how liferay is helping in this development process. The questions asked are:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Being truly honest, are you happy at Liferay? How are you feeling in working for Liferay?');
      ie_close('li');
      ie_open('li');
      itext('Speaking in short and long-term periods, what are your aspirations?');
      ie_close('li');
      ie_open('li');
      itext('Is Liferay providing a context that is compatible with your needs and goals?');
      ie_close('li');
      ie_open('li');
      itext('What would make you leave Liferay today?');
      ie_close('li');
      ie_open('li');
      itext('What do you think Liferay or your manager could do for supporting you?');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('2. Expectations');
      ie_close('h5');
      ie_open('p');
      itext('In this step, the employee will think about the expectations he has for himself, the team and the manager. The questions that should be answered:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('What expectations do you have for yourself? Considering your position.');
      ie_close('li');
      ie_open('li');
      itext('What expectations do you think the team has over you?');
      ie_close('li');
      ie_open('li');
      itext('What expectations do you think your managers has over you?');
      ie_close('li');
      ie_open('li');
      itext('What expectations do you have regarding your team?');
      ie_close('li');
      ie_open('li');
      itext('What expectations do you have regarding your managers?');
      ie_close('li');
      ie_open('li');
      itext('What expectations do you have regarding the organization?');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('3. Performance review');
      ie_close('h5');
      ie_open('p');
      itext('In this step, the employee will self-assess in 5 aspects, and the evaluation is: From -3 to -1 = is not meeting expectations, and something is wrong. This case can happen either for personal reasons or not.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('0 = meets basic expectations');
      ie_close('li');
      ie_open('li');
      itext('1 = meets most expectations');
      ie_close('li');
      ie_open('li');
      itext('2 = meets all expectations');
      ie_close('li');
      ie_open('li');
      itext('3 = exceeds all expectations.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('For each note given, it is necessary to contain the facts on which it is based and what the objectives are for it to be improved.');
      ie_close('p');
      ie_open('p');
      itext('The 5 aspects are:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Does he/she have knowledge and experience?');
      ie_close('li');
      ie_open('li');
      itext('Does he/she do quality work?');
      ie_close('li');
      ie_open('li');
      itext('Is he/she reliable?');
      ie_close('li');
      ie_open('li');
      itext('Is he/she a good communicator?');
      ie_close('li');
      ie_open('li');
      itext('Does he/she bring positive energy and a heart to serve?');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('4. Agreement');
      ie_close('h5');
      ie_open('p');
      itext('In this moment, the leader and employer can re-read the performance review for selecting the goals the person will pursue on the next quarter.');
      ie_close('p');
      ie_open('h5');
      itext('5. Motivators');
      ie_close('h5');
      ie_open('p');
      itext('Motivators are cards with various characteristics that involve the corporate world, such as collaboration, feedback, technique, speed, recognition ... where the employee will select the 10 that matter most to him at that moment, placing them in order of priority.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Follow up');
      ie_close('h3');
      ie_open('p');
      itext('The follow up is a weekly meeting with the manager to follow the goals and objectives set for that quarter, always proposing small activities during the week and the months to reach them.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param520 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ynlik.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var ynlik = function (_Component) {
  _inherits(ynlik, _Component);

  function ynlik() {
    _classCallCheck(this, ynlik);

    return _possibleConstructorReturn(this, (ynlik.__proto__ || Object.getPrototypeOf(ynlik)).apply(this, arguments));
  }

  return ynlik;
}(_metalComponent2.default);

_metalSoy2.default.register(ynlik, templates);
exports.ynlik = ynlik;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[288]);