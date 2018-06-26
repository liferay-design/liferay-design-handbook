var pageComponent =
webpackJsonppageComponent([9],{

/***/ 320:
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

var _requestsSoy = __webpack_require__(321);

var _requestsSoy2 = _interopRequireDefault(_requestsSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iyPcS = function (_Component) {
  _inherits(iyPcS, _Component);

  function iyPcS() {
    _classCallCheck(this, iyPcS);

    return _possibleConstructorReturn(this, (iyPcS.__proto__ || Object.getPrototypeOf(iyPcS)).apply(this, arguments));
  }

  return iyPcS;
}(_metalComponent2.default);

;

_metalSoy2.default.register(iyPcS, _requestsSoy2.default);

exports.default = iyPcS;

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.iyPcS = undefined;

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

  // This file was automatically generated from requests.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace iyPcS.
   * @public
   */

  goog.module('iyPcS.incrementaldom');

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
    var param677 = function param677() {
      ie_open('h6');
      var dyn50 = opt_data.page.description;
      if (typeof dyn50 == 'function') dyn50();else if (dyn50 != null) itext(dyn50);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('Equipaments');
      ie_close('h3');
      ie_open('p');
      itext('For any equipment you need to request, you must open a ticket on the Jira for the Operations LATAM team.');
      ie_close('p');
      ie_open('p');
      itext('How to ');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/wiki/-/wiki/Main/Operations+LATAM+JIRA+Requests?_36_pageResourcePrimKey=22585374');
      itext('open a ticket on JIRA to Operations Liferay LATAM.');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Refund');
      ie_close('h3');
      ie_open('p');
      itext('The employee may request reimbursement for expenses incurred during trips to the company\'s service, and some benefits, such as education.');
      ie_close('p');
      ie_open('p');
      itext('You can understand the policy and the reimbursement procedure in the article "Policies and Procedures", and also the document template to fill in within ');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?_20_folderId=1413088&_20_viewEntries=1&_20_viewFolders=false&_20_struts_action=%2Fdocument_library%2Fview&p_p_id=20&p_p_lifecycle=0&_20_entryStart=0&_20_entryEnd=20&_20_folderStart=0&_20_folderEnd=20');
      itext('this folder');
      ie_close('a');
      itext(' of our Social Office.');
      ie_close('p');
      ie_open('p');
      itext('The department that takes care of this area is Operations.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Vacations');
      ie_close('h3');
      ie_open('p');
      itext('Each employee have vacations entitlement after completing one year of admission. Before you apply for a vacation, you need to align with the manager of your team and the project\'s stakeholders you are involved with. It\'s important to request the vacations with 30 days notice of the intended date. In this document, you have the step-by-step to create the request through JIRA.');
      ie_close('p');
      ie_open('p');
      itext('Follow ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/topics/_DepartamentoPessoalBrasil');
      itext('#DepartamentoPessoalLatam');
      ie_close('a');
      itext(' topic page on Loop to stay up-to-date with any news related to the department..');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param677 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'iyPcS.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var iyPcS = function (_Component) {
  _inherits(iyPcS, _Component);

  function iyPcS() {
    _classCallCheck(this, iyPcS);

    return _possibleConstructorReturn(this, (iyPcS.__proto__ || Object.getPrototypeOf(iyPcS)).apply(this, arguments));
  }

  return iyPcS;
}(_metalComponent2.default);

_metalSoy2.default.register(iyPcS, templates);
exports.iyPcS = iyPcS;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[320]);