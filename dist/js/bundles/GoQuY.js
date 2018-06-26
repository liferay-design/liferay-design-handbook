var pageComponent =
webpackJsonppageComponent([13],{

/***/ 314:
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

var _projectsSoy = __webpack_require__(315);

var _projectsSoy2 = _interopRequireDefault(_projectsSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoQuY = function (_Component) {
  _inherits(GoQuY, _Component);

  function GoQuY() {
    _classCallCheck(this, GoQuY);

    return _possibleConstructorReturn(this, (GoQuY.__proto__ || Object.getPrototypeOf(GoQuY)).apply(this, arguments));
  }

  return GoQuY;
}(_metalComponent2.default);

;

_metalSoy2.default.register(GoQuY, _projectsSoy2.default);

exports.default = GoQuY;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.GoQuY = undefined;

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

  // This file was automatically generated from projects.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace GoQuY.
   * @public
   */

  goog.module('GoQuY.incrementaldom');

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
    var param650 = function param650() {
      ie_open('h6');
      var dyn48 = opt_data.page.description;
      if (typeof dyn48 == 'function') dyn48();else if (dyn48 != null) itext(dyn48);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('Liferay DXP');
      ie_close('h3');
      ie_open('p');
      itext('It is our main product, an open source platform where it is possible to create portals, websites and digital experiences. This product is divided into many projects, such as:');
      ie_close('p');
      ie_open('h5');
      itext('1. Analytics Cloud');
      ie_close('h5');
      ie_open('p');
      itext('Analytics Cloud is a part of Liferay DXP that provides the ability to the users to manage and integrate data from multiple sources, quickly uncover valuable insights, take action on those insights, and measure success. Analytics Cloud is a product that offers to our customer an out of the box functionality that can help them understand, based on data, what happened in these interactions.');
      ie_close('p');
      ie_open('p');
      ie_open('strong');
      itext('Designers:');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_rafael.fernandes');
      itext('Rafael Fernandes');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_jadson.dantas');
      itext('Jadson Dantas');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_christopher.jeong');
      itext('Christopher Jeong');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('2. Forms');
      ie_close('h5');
      ie_open('p');
      itext('Forms is a application on Liferay DXP that allow users to create form based applications with several purposes: registering members on the site, collecting feedbacks, leads contacts, question surveys and other examples.');
      ie_close('p');
      ie_open('p');
      itext('Forms is presented not only as part of Liferay DXP, but also as an ');
      ie_open('a', null, null, 'href', 'https://forms.liferay.com/');
      itext('external application');
      ie_close('a');
      itext(' like test environment where all Liferay Staff can use and give us feedback.');
      ie_close('p');
      ie_open('p');
      ie_open('strong');
      itext('Designers:');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_cassia.oliveira');
      itext('C\xE1ssia Oliveira');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_jadson.dantas');
      itext('Jadson Dantas');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_open('h5');
      itext('3. Workflow');
      ie_close('h5');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://liferay-master.wedeploy.io/web/guest/home?p_p_state=maximized&p_p_mode=view&refererPlid=20120&saveLastPath=false&_com_liferay_login_web_portlet_LoginPortlet_mvcRenderCommandName=%2Flogin%2Flogin&p_p_id=com_liferay_login_web_portlet_LoginPortlet&p_p_lifecycle=0&_com_liferay_login_web_portlet_LoginPortlet_redirect=%2Fgroup%2Fcontrol_panel%2Fmanage%3Fp_p_id%3Dcom_liferay_portal_workflow_web_portlet_ControlPanelWorkflowPortlet%26p_p_lifecycle%3D0%26p_p_state%3Dmaximized%26p_v_l_s_g_id%3D%257BmvccVersion%253D0%252C%2520uuid%253Dd360372e-2417-9492-31e1-2f7001b69571%252C%2520groupId%253D20126%252C%2520companyId%253D20099%252C%2520creatorUserId%253D20103%252C%2520classNameId%253D20032%252C%2520classPK%253D20126%252C%2520parentGroupId%253D0%252C%2520liveGroupId%253D0%252C%2520treePath%253D%252F20126%252F%252C%2520groupKey%253DGuest%252C%2520name%253D%253C%253Fxml%2520version%253D%25271.0%2527%2520encoding%253D%2527UTF-8%2527%253F%253E%253Croot%2520available-locales%253D%2522en_US%2522%2520default-locale%253D%2522en_US%2522%253E%253CName%2520language-id%253D%2522en_US%2522%253EGuest%253C%252FName%253E%253C%252Froot%253E%252C%2520description%253D%252C%2520type%253D1%252C%2520typeSettings%253D%252C%2520manualMembership%253Dtrue%252C%2520membershipRestriction%253D0%252C%2520friendlyURL%253D%252Fguest%252C%2520site%253Dtrue%252C%2520remoteStagingGroupCount%253D0%252C%2520inheritContent%253Dfalse%252C%2520active%253Dtrue%257D');
      itext('Workflow');
      ie_close('a');
      itext(' is a tool for automating business processes on Liferay DXP. It was mainly created for content approval processes and it\u2019s known for its limited capabilities and also for it\u2019s complexity and heavily dependency on IT users. As Liferay is now trying to be more business oriented in the way it approaches it\u2019s products, we aim to take the Workflow into a level where it\u2019s easily understood and useful for different corporations purposes.');
      ie_close('p');
      ie_open('p');
      ie_open('strong');
      itext('Designer:');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_nathalia.moura');
      itext('Nathalia Moura');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Events');
      ie_close('h3');
      ie_open('p');
      itext('Liferay Events is an application (mobile and web), where users can follow the entire schedule of events that Liferay promotes. It is also possible to evaluate the lectures, contents, and download the contents that the speakers offer. Liferay has been doing various events around the world for its customers, and this is a good tool for capturing new leads and understanding our audience. You can download the most recent Liferay Events App in ');
      ie_open('a', null, null, 'href', 'https://itunes.apple.com/br/app/liferay-events/id650199231?mt=8');
      itext('Apple Store');
      ie_close('a');
      itext(' or ');
      ie_open('a', null, null, 'href', 'https://play.google.com/store/apps/details?id=com.liferay.events.global.mobile&hl=pt_BR');
      itext('Play Store.');
      ie_close('a');
      ie_close('p');
      ie_open('p');
      ie_open('strong');
      itext('Designer:');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_cassia.oliveira');
      itext('C\xE1ssia Oliveira');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Loop');
      ie_close('h3');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/');
      itext('Liferay Loop');
      ie_close('a');
      itext(' is an Enterprise Social Network application designed to help the company Organize, Communicate, Collaborate and Engage employees.');
      ie_close('p');
      ie_open('p');
      itext('Liferay Loop provides a view into the company that we\'ve never had before. It allows us to share information based on how we\'re organized so that employees, new and old, can quickly find information about people, groups (Departments, Teams, & Offices), and topics.');
      ie_close('p');
      ie_open('p');
      itext('To learn more how to use this product, ');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/home/-/loop/home/help');
      itext('click here.');
      ie_close('a');
      ie_close('p');
      ie_open('p');
      ie_open('strong');
      itext('Designers:');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_davi.shama');
      itext('Davi Sham\xE1');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_felipe.pires');
      itext('Felipe Pires');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h3');
      itext('WeDeploy');
      ie_close('h3');
      ie_open('p');
      ie_open('a', null, null, 'href', 'https://wedeploy.com/');
      itext('WeDeploy');
      ie_close('a');
      itext(' is a development platform that helps you deploy your simple to complex apps quickly. It also gives you access to intuitive APIs for backend microservices that can enable you to create modern apps faster.');
      ie_close('p');
      ie_open('p');
      itext('From simple applications to full microservice architectures, launch your production-ready environments in a matter of minutes without having to change your stack. For more information, see the wedeploy documentation.');
      ie_close('p');
      ie_open('p');
      ie_open('strong');
      itext('Designers:');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_vitor.fernandes');
      itext('Vitor Fernandes');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_davi.shama');
      itext('Davi Sham\xE1');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h3');
      itext('Screenlets');
      ie_close('h3');
      ie_open('p');
      itext('Liferay Screens speeds up and simplifies developing native mobile apps that use Liferay. A Screenlet is a visual component that you insert into your native app to leverage Liferay Portal\u2019s content and services. Screenlets are available for both IOS and Android to log in to your portal, create accounts, submit forms, display content, and more. You can use any number of Screenlets in your app; they\u2019re independent, so you can use them in modular fashion. The users can customize Screenlets to fit their needs by changing or extending their UI and behavior.');
      ie_close('p');
      ie_open('p');
      itext('Designer:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://loop.liferay.com/web/guest/home/-/loop/people/_cassia.oliveira');
      itext('C\xE1ssia Oliveira');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param650 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'GoQuY.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var GoQuY = function (_Component) {
  _inherits(GoQuY, _Component);

  function GoQuY() {
    _classCallCheck(this, GoQuY);

    return _possibleConstructorReturn(this, (GoQuY.__proto__ || Object.getPrototypeOf(GoQuY)).apply(this, arguments));
  }

  return GoQuY;
}(_metalComponent2.default);

_metalSoy2.default.register(GoQuY, templates);
exports.GoQuY = GoQuY;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[314]);