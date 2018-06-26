var pageComponent =
webpackJsonppageComponent([20],{

/***/ 300:
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

var _communicationProductivitySoy = __webpack_require__(301);

var _communicationProductivitySoy2 = _interopRequireDefault(_communicationProductivitySoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cxVVh = function (_Component) {
  _inherits(cxVVh, _Component);

  function cxVVh() {
    _classCallCheck(this, cxVVh);

    return _possibleConstructorReturn(this, (cxVVh.__proto__ || Object.getPrototypeOf(cxVVh)).apply(this, arguments));
  }

  return cxVVh;
}(_metalComponent2.default);

;

_metalSoy2.default.register(cxVVh, _communicationProductivitySoy2.default);

exports.default = cxVVh;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.cxVVh = undefined;

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

  // This file was automatically generated from communication-productivity.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace cxVVh.
   * @public
   */

  goog.module('cxVVh.incrementaldom');

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
    var param585 = function param585() {
      ie_open('h6');
      var dyn43 = opt_data.page.description;
      if (typeof dyn43 == 'function') dyn43();else if (dyn43 != null) itext(dyn43);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('Communications Tools');
      ie_close('h3');
      ie_open('h5');
      itext('1. Slack');
      ie_close('h5');
      ie_open('p');
      itext('Our main communication tool in Engineering. If you don\'t have this tool, you can download here. After that use your Liferay email to access, when the invitation arrives in your email. Contact ');
      ie_open('a', null, null, 'href', 'bruno.farache@liferay.com');
      itext('Bruno Farache');
      ie_close('a');
      itext(' (Engineering Leader) for the invite.');
      ie_close('p');
      ie_open('p');
      itext('Workspace: liferayeng.slack.com');
      ie_close('p');
      ie_open('h5');
      itext('2. Hangout');
      ie_close('h5');
      ie_open('p');
      itext('A communication platform by Google and our main communication tool between other departments. You can talk to everyone that have a Liferay\'s email.');
      ie_close('p');
      ie_open('h5');
      itext('3. Skype');
      ie_close('h5');
      ie_open('p');
      itext('Another communication tool for video and audio calls. Download this tool ');
      ie_open('a', null, null, 'href', 'https://www.skype.com/pt-br/');
      itext('here.');
      ie_close('a');
      ie_close('p');
      ie_open('h5');
      itext('4. Loop');
      ie_close('h5');
      ie_open('p');
      itext('A social media created by Liferay, where we can share announcements, company-wide posts or just specific groups. Use your liferay email to access your profile, which has already been created by HR staff. If it has not been created, contact the Personnel department.');
      ie_close('p');
      ie_open('p');
      itext('Click ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/home/-/loop/home/help');
      itext('here');
      ie_close('a');
      itext(' to learn more about using Loop.');
      ie_close('p');
      ie_open('h5');
      itext('5. WhatsApp');
      ie_close('h5');
      ie_open('p');
      itext('Our communication tool for quickly messages.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Liferay - Official: you can request access to ');
      ie_open('a', null, null, 'href', 'eyla.ferreira@liferay.com');
      itext('Leyla Ferreira');
      ie_close('a');
      itext(' (HR Leader)');
      ie_close('li');
      ie_open('li');
      itext('Liferay - Offtopic: you can request access to ');
      ie_open('a', null, null, 'href', 'eyla.ferreira@liferay.com');
      itext('Leyla Ferreira');
      ie_close('a');
      itext(' (HR Leader)l');
      ie_close('li');
      ie_open('li');
      itext('Liferay - Design team: you can request access to anyone on the team.');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Productivity Tools');
      ie_close('h3');
      ie_open('h5');
      itext('1. Google Calendar');
      ie_close('h5');
      ie_open('p');
      itext('The tool we use to schedule meetings. You can see the availability of other members before you invite to a meeting, and the availability of the rooms, using your liferay email. See how to ');
      ie_open('a', null, null, 'href', 'https://grow.liferay.com/people/Adding+Recife+office+rooms+to+Google+Calendar');
      itext('adding Recife Office rooms to Goggle Calendar.');
      ie_close('a');
      ie_close('p');
      ie_open('h5');
      itext('2. JIRA');
      ie_close('h5');
      ie_open('p');
      itext('A software used to manage most Liferay projects, where we can see the progress of the activities of the whole team. For more information how we use this tool, read ');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/web/global.engineering/wiki/-/wiki/Quality+Assurance+Main/Jira+Ticket+Formatting#security');
      itext('this article.');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param585 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'cxVVh.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var cxVVh = function (_Component) {
  _inherits(cxVVh, _Component);

  function cxVVh() {
    _classCallCheck(this, cxVVh);

    return _possibleConstructorReturn(this, (cxVVh.__proto__ || Object.getPrototypeOf(cxVVh)).apply(this, arguments));
  }

  return cxVVh;
}(_metalComponent2.default);

_metalSoy2.default.register(cxVVh, templates);
exports.cxVVh = cxVVh;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[300]);