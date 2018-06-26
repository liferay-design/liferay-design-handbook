var pageComponent =
webpackJsonppageComponent([15],{

/***/ 310:
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

var _manifestAndValuesSoy = __webpack_require__(311);

var _manifestAndValuesSoy2 = _interopRequireDefault(_manifestAndValuesSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wgmRM = function (_Component) {
  _inherits(wgmRM, _Component);

  function wgmRM() {
    _classCallCheck(this, wgmRM);

    return _possibleConstructorReturn(this, (wgmRM.__proto__ || Object.getPrototypeOf(wgmRM)).apply(this, arguments));
  }

  return wgmRM;
}(_metalComponent2.default);

;

_metalSoy2.default.register(wgmRM, _manifestAndValuesSoy2.default);

exports.default = wgmRM;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.wgmRM = undefined;

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

  // This file was automatically generated from manifest-and-values.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace wgmRM.
   * @public
   */

  goog.module('wgmRM.incrementaldom');

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
    var param628 = function param628() {
      ie_open('h6');
      var dyn46 = opt_data.page.description;
      if (typeof dyn46 == 'function') dyn46();else if (dyn46 != null) itext(dyn46);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('Manifest');
      ie_close('h3');
      ie_open('p');
      itext('It\u2019s our duty: improving our current product portfolio and insert the Design culture in all Liferay\u2019s departments, either tacitly or explicitly. As a team, we want to become a reference both inside and outside the company.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Values');
      ie_close('h3');
      ie_open('h5');
      itext('1. Introduction');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('Team members must commit to constantly make sure that all members know, understand and commit to the principles described here, in this document;');
      ie_close('li');
      ie_open('li');
      itext('A member that doesn\u2019t demonstrate being committed to the team, or do not feel comfortable in following the guidelines should be evaluated by its peers. Team should create an assembly in order to understand what are the issues related to the respective member. In case the team and the concerned member have opposite visions, that member can be asked to leave the team;');
      ie_close('li');
      ie_open('li');
      itext('Any guideline written in this document can and should be updated or removed if the team members do not agree with it;');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('2. Flawless Execution');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('All of our deliverables and presentations should represent the "craftsmanship" as a fundamental virtue;');
      ie_close('li');
      ie_open('li');
      itext('It should put effort for \u201Ccraftsmanship\u201D be perceived by the public even when an interface is not finished or has explicit nature;');
      ie_close('li');
      ie_open('li');
      itext('All of our projects must meet the same operating guidelines for building interfaces;');
      ie_close('li');
      ie_open('li');
      itext('The operating guidelines should be composed of rules as simple and scalable as possible;');
      ie_close('li');
      ie_open('li');
      itext('All team members must be able to understand, reproduce and teach, to designers and non-designers such guidelines;');
      ie_close('li');
      ie_open('li');
      itext('It is team\'s responsibility to use the most efficient and updated tools for the craft. All the tools used for this purpose must be easy to use and assimilate by the team members;');
      ie_close('li');
      ie_open('li');
      itext('Members who have greater familiarity with the operational guidelines should review the work of other designers. Designers less experienced should always submit their work for correction of another designer with greater experience;');
      ie_close('li');
      ie_open('li');
      itext('Before a work begins, the team should analyze and establish at least three direct and indirect references to the solution of the problem in matter. References should be constituted by successful cases and experiments carried out by other professionals or leading companies;');
      ie_close('li');
      ie_open('li');
      itext('No work proposed by a member of the team should be shared to others before the team itself or, on appeal, its leader has approved it;');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('3. Shared Knowledge');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('All team members should be aware of what is happening daily in the Design and Technology, within and outside the country;');
      ie_close('li');
      ie_open('li');
      itext('All team members must share their sources of information with other team members. They should form a single content distribution channel;');
      ie_close('li');
      ie_open('li');
      itext('All references and addresses to the sources of information should be stored and available for the team in one place and easily accessible;');
      ie_close('li');
      ie_open('li');
      itext('The team must have a fast and efficient method for reading and selection of shared content;');
      ie_close('li');
      ie_open('li');
      itext('Whenever a team member share a content, it should emphasize the part highlighted and/or why one is sharing it;');
      ie_close('li');
      ie_open('li');
      itext('The team members must amplify collectively their knowledge being able to read, understand, criticize and, if possible, test the integrity of shared content;');
      ie_close('li');
      ie_open('li');
      itext('The team should always keep up with leading products and services, as well as professionals, companies and teams that have the best practices;');
      ie_close('li');
      ie_open('li');
      itext('Team members must attend the best events, read the most important publications and know the key people in the area.');
      ie_close('li');
      ie_open('li');
      itext('All knowledge acquired from events, publications or experiences must be distributed to the team;');
      ie_close('li');
      ie_open('li');
      itext('The team must meet regularly in order to share all the work is being developed;');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('4. Responsive Customer Service');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('Before communicating something, it must be sure that the created message or announcement were designed to solve problems, otherwise it should not be sent;');
      ie_close('li');
      ie_open('li');
      itext('For any kind of work, the designer, independently of his level, should create a communication channel as close as possible to the demandant or employees. Whether internal or external;');
      ie_close('li');
      ie_open('li');
      itext('All designers should be able to communicate clearly, both in writing and orally;');
      ie_close('li');
      ie_open('li');
      itext('The action to answer a call should always be considered as a top priority task. Therefore, it should prioritize it as soon as possible;');
      ie_close('li');
      ie_open('li');
      itext('All designers should remain on standby when it is responding to a call. During work hours,  they should be online in all communication tools that the company uses, specially in case of remotely working;');
      ie_close('li');
      ie_open('li');
      itext('In case of the contacted member is unavailable, another member available should be responsible for the response;');
      ie_close('li');
      ie_open('li');
      itext('A demandant or employee should never wait more than a day to be responded. Be it an internal or external collaborator;');
      ie_close('li');
      ie_open('li');
      itext('When communicating  an absence or delay it must be made in advance for the entire design team and/or other employees or demandant involved;');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('5. Processes Consistency');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('All processes in the area, either operational or communicational nature, must be clear to all team members besides being represented by a visual diagram;');
      ie_close('li');
      ie_open('li');
      itext('A visual diagram should present its main objective, all steps in a process, which people were involved, how many hours were taken, what tools were used and where it was held each operation or communication;');
      ie_close('li');
      ie_open('li');
      itext('All the processes or improved visual diagram should be designed in the most reusable and scalable way as possible;');
      ie_close('li');
      ie_open('li');
      itext('The standards and all processes arising from them, should be available in one place and easily accessible;');
      ie_close('li');
      ie_open('li');
      itext('At the end of each sprint or phase of the project, you must create or review a respective process diagram together with the team and the leader. You should check which are the improvement points and good points in this process. At the end, solutions and enhancements must be shared and inserted into an action plan;');
      ie_close('li');
      ie_open('li');
      itext('When diagnosing a case, the team should look for faults but never blame individuals. One should try to extract obstacles that hinder the satisfaction of demandant or employees;');
      ie_close('li');
      ie_open('li');
      itext('It should be improved all the micro-operations that a process can have. Every second is valuable;');
      ie_close('li');
      ie_open('li');
      itext('All team members must use the same guidelines to make up their processes in a sprint or mark;');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('6. One For All and All For One');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('A problem of a member must be understood as a team problem;');
      ie_close('li');
      ie_open('li');
      itext('The hierarchy of the team should be composed as horizontal as possible. Official information should be shared with the team in a fluid and clearly way;');
      ie_close('li');
      ie_open('li');
      itext('All team members are important, regardless of their performance, level or professional experience;');
      ie_close('li');
      ie_open('li');
      itext('All members are responsible for creating an environment that provides security for others to share their problems and yearnings transparently.');
      ie_close('li');
      ie_open('li');
      itext('It is the team\'s responsibility to understand, reflect and criticize on each other;');
      ie_close('li');
      ie_open('li');
      itext('Corrective feedback to a member must be passed, heard and studied carefully by all members. After correction, you should present the results to the team;');
      ie_close('li');
      ie_open('li');
      itext('Any work published by a member must be credited as a work done by the entire team;');
      ie_close('li');
      ie_open('li');
      itext('A recognition appointed to one of the members must be interpreted as a team achievement. The member appointed must strengthen the participation of the team, whether in public or not, during the occasion of this recognition;');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('7. Server Posture');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('A problem from another area, employee or demandant should be considered a problem for Design area;');
      ie_close('li');
      ie_open('li');
      itext('It should act in advance whenever possible to help other teams, employees or clients;');
      ie_close('li');
      ie_open('li');
      itext('Be accessible towards others should be a recurring practice. Besides this, it should treat every person with courtesy and patience;');
      ie_close('li');
      ie_open('li');
      itext('If a member is not able to provide assistance, or is not able at the moment to do so, he should indicate another person or team that is able to solve the problem in matter;');
      ie_close('li');
      ie_open('li');
      itext('Whenever a team member or developer adopt a defensive or violent posture, you must first understand the real needs behind his action. Only then, you can consider taking a decision on the acts of the same;');
      ie_close('li');
      ie_open('li');
      itext('When facing problems of an employee or team, one should try to build solutions as collaborative as possible. One should encourage those involved to participate in the process of designing these solutions;');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('8. A Master\u2019s Spirit');
      ie_close('h5');
      ie_open('ul');
      ie_open('li');
      itext('The role of tutor, counselor and coach should be taken seriously. The act must be clear and aware that your actions are an example to others;');
      ie_close('li');
      ie_open('li');
      itext('You must cultivate a mind free of self-centric intentions. In the same way, you should place the group welfare above any personal interest;');
      ie_close('li');
      ie_open('li');
      itext('See individuals as people and not just as a professional. You must be attentive and sensitive to individuals needs in each group member;');
      ie_close('li');
      ie_open('li');
      itext('You should cultivate truth and honesty as top values;');
      ie_close('li');
      ie_open('li');
      itext('Whenever there\u2019s an opportunity, you must strengthen the sense of purpose of an individual as well as his responsibilities as part of the group;');
      ie_close('li');
      ie_open('li');
      itext('There should be no doubt as to the position of an individual in relation to his team or to another employee;');
      ie_close('li');
      ie_open('li');
      itext('It is essential to make each person become special compared to others. It shouldn\u2019t have privileged ones in the team.');
      ie_close('li');
      ie_open('li');
      itext('It must understand that each individual has a history, and that this is the true responsible for shaping the advantages and disadvantages of each one. The actual competence is measured by the level of commitment that each individual undertakes to the collective and to his individual improvement aspects;');
      ie_close('li');
      ie_open('li');
      itext('We must understand our predecessors and respect the nature of its historical contexts. Its legacies should be understood as a premise to plan future actions.');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param628 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'wgmRM.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var wgmRM = function (_Component) {
  _inherits(wgmRM, _Component);

  function wgmRM() {
    _classCallCheck(this, wgmRM);

    return _possibleConstructorReturn(this, (wgmRM.__proto__ || Object.getPrototypeOf(wgmRM)).apply(this, arguments));
  }

  return wgmRM;
}(_metalComponent2.default);

_metalSoy2.default.register(wgmRM, templates);
exports.wgmRM = wgmRM;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[310]);