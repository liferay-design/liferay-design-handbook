var pageComponent =
webpackJsonppageComponent([11],{

/***/ 316:
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

var _benefitsSoy = __webpack_require__(317);

var _benefitsSoy2 = _interopRequireDefault(_benefitsSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MPeUQ = function (_Component) {
  _inherits(MPeUQ, _Component);

  function MPeUQ() {
    _classCallCheck(this, MPeUQ);

    return _possibleConstructorReturn(this, (MPeUQ.__proto__ || Object.getPrototypeOf(MPeUQ)).apply(this, arguments));
  }

  return MPeUQ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(MPeUQ, _benefitsSoy2.default);

exports.default = MPeUQ;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.MPeUQ = undefined;

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

  // This file was automatically generated from benefits.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace MPeUQ.
   * @public
   */

  goog.module('MPeUQ.incrementaldom');

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
    var param661 = function param661() {
      ie_open('h6');
      var dyn49 = opt_data.page.description;
      if (typeof dyn49 == 'function') dyn49();else if (dyn49 != null) itext(dyn49);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h3');
      itext('Education');
      ie_close('h3');
      ie_open('p');
      itext('As one of Liferay\'s values is "learn and get better", one of the benefits we have is education. Where each employee has R$ 4.500 per year to use in courses, lectures, books as long as they are in accordance with their Individual Development Plan (PDI), which must be created with your manager. This PDI is created with the goal of developing the professional, both in technical and behavioral tools.');
      ie_close('p');
      ie_open('p');
      itext('To learn more about how to benefit from education, how to apply for a PDI application and template, visit this ');
      ie_open('a', null, null, 'href', 'https://drive.google.com/drive/u/1/folders/1ySQU8yrFiQU_cC2CNsXrx4g2F2niNWFX');
      itext('folder.');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h3');
      itext('Gympass');
      ie_close('h3');
      ie_open('p');
      itext('Gympass is a plan used for a network of academies, and at Liferay we have a discount for our employees. To learn more about how to use your discount, see these documents.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h3');
      itext('Others Benefits');
      ie_close('h3');
      ie_open('p');
      itext('You can find in our Social Office the documents about other benefits that we have:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?p_p_id=20&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_20_struts_action=%2Fdocument_library%2Fview_file_entry&_20_redirect=https%3A%2F%2Fin.liferay.com%2Fgroup%2Fliferay-brasil%2Fdocuments%3Fp_p_id%3D20%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_20_entryEnd%3D20%26_20_displayStyle%3D%26_20_viewEntries%3D1%26_20_viewFolders%3D1%26_20_folderStart%3D0%26_20_action%3DbrowseFolder%26_20_struts_action%3D%252Fdocument_library%252Fview%26_20_folderEnd%3D20%26_20_entryStart%3D0%26_20_folderId%3D20559386&_20_fileEntryId=29309157');
      itext('Paycheck access');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?p_p_id=20&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_20_struts_action=%2Fdocument_library%2Fview_file_entry&_20_redirect=https%3A%2F%2Fin.liferay.com%2Fgroup%2Fliferay-brasil%2Fdocuments%3Fp_p_id%3D20%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_20_entryEnd%3D20%26_20_displayStyle%3D%26_20_viewEntries%3D1%26_20_viewFolders%3D1%26_20_folderStart%3D0%26_20_action%3DbrowseFolder%26_20_struts_action%3D%252Fdocument_library%252Fview%26_20_folderEnd%3D20%26_20_entryStart%3D0%26_20_folderId%3D20559386&_20_fileEntryId=30427411');
      itext('Childcare assistance');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?p_p_id=20&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_20_struts_action=%2Fdocument_library%2Fview_file_entry&_20_redirect=https%3A%2F%2Fin.liferay.com%2Fgroup%2Fliferay-brasil%2Fdocuments%3Fp_p_id%3D20%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_p_col_id%3Dcolumn-1%26p_p_col_count%3D1%26_20_entryEnd%3D20%26_20_viewEntries%3D1%26_20_viewFolders%3D1%26_20_folderStart%3D0%26_20_action%3DbrowseFolder%26_20_struts_action%3D%252Fdocument_library%252Fview%26_20_folderEnd%3D20%26_20_entryStart%3D0%26_20_folderId%3D20559386&_20_fileEntryId=36070103');
      itext('Funeral assistance');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?p_p_id=20&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_20_struts_action=%2Fdocument_library%2Fview_file_entry&_20_redirect=https%3A%2F%2Fin.liferay.com%2Fgroup%2Fliferay-brasil%2Fdocuments%3Fp_p_id%3D20%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_p_col_id%3Dcolumn-1%26p_p_col_count%3D1%26_20_entryEnd%3D20%26_20_viewEntries%3D1%26_20_viewFolders%3D1%26_20_folderStart%3D0%26_20_action%3DbrowseFolder%26_20_struts_action%3D%252Fdocument_library%252Fview%26_20_folderEnd%3D20%26_20_entryStart%3D0%26_20_folderId%3D20559386&_20_fileEntryId=36069966');
      itext('Lens assistante');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?p_p_id=20&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_20_struts_action=%2Fdocument_library%2Fview_file_entry&_20_redirect=https%3A%2F%2Fin.liferay.com%2Fgroup%2Fliferay-brasil%2Fdocuments%3Fp_p_id%3D20%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_p_col_id%3Dcolumn-1%26p_p_col_count%3D1%26_20_entryEnd%3D20%26_20_viewEntries%3D1%26_20_viewFolders%3D1%26_20_folderStart%3D0%26_20_action%3DbrowseFolder%26_20_struts_action%3D%252Fdocument_library%252Fview%26_20_folderEnd%3D20%26_20_entryStart%3D0%26_20_folderId%3D20559386&_20_fileEntryId=36069890');
      itext('Food and meal');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?p_p_id=20&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_20_struts_action=%2Fdocument_library%2Fview_file_entry&_20_redirect=https%3A%2F%2Fin.liferay.com%2Fgroup%2Fliferay-brasil%2Fdocuments%3Fp_p_id%3D20%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_p_col_id%3Dcolumn-1%26p_p_col_count%3D1%26_20_entryEnd%3D20%26_20_viewEntries%3D1%26_20_viewFolders%3D1%26_20_folderStart%3D0%26_20_action%3DbrowseFolder%26_20_struts_action%3D%252Fdocument_library%252Fview%26_20_folderEnd%3D20%26_20_entryStart%3D0%26_20_folderId%3D20559386&_20_fileEntryId=20847411');
      itext('Buying books');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?p_p_id=20&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_20_struts_action=%2Fdocument_library%2Fview_file_entry&_20_redirect=https%3A%2F%2Fin.liferay.com%2Fgroup%2Fliferay-brasil%2Fdocuments%3Fp_p_id%3D20%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_p_col_id%3Dcolumn-1%26p_p_col_count%3D1%26_20_entryEnd%3D20%26_20_viewEntries%3D1%26_20_viewFolders%3D1%26_20_folderStart%3D0%26_20_action%3DbrowseFolder%26_20_struts_action%3D%252Fdocument_library%252Fview%26_20_folderEnd%3D20%26_20_entryStart%3D0%26_20_folderId%3D20559386&_20_fileEntryId=23381231');
      itext('Laundry');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?_20_folderId=29195708&_20_viewEntries=1&_20_viewFolders=1&_20_struts_action=%2Fdocument_library%2Fview&_20_action=browseFolder&p_p_id=20&p_p_lifecycle=0&_20_entryStart=0&_20_entryEnd=20&_20_folderStart=0&_20_folderEnd=20');
      itext('Work gymnast');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?p_p_id=20&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_20_struts_action=%2Fdocument_library%2Fview_file_entry&_20_redirect=https%3A%2F%2Fin.liferay.com%2Fgroup%2Fliferay-brasil%2Fdocuments%3Fp_p_id%3D20%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_20_entryEnd%3D20%26_20_displayStyle%3D%26_20_viewEntries%3D1%26_20_viewFolders%3D1%26_20_folderStart%3D0%26_20_action%3DbrowseFolder%26_20_struts_action%3D%252Fdocument_library%252Fview%26_20_folderEnd%3D20%26_20_entryStart%3D0%26_20_folderId%3D20559386&_20_fileEntryId=24944900');
      itext('Transportation vouchers');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://in.liferay.com/group/liferay-brasil/documents?p_p_id=20&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_20_struts_action=%2Fdocument_library%2Fview_file_entry&_20_redirect=https%3A%2F%2Fin.liferay.com%2Fgroup%2Fliferay-brasil%2Fdocuments%3Fp_p_id%3D20%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_20_entryEnd%3D20%26_20_displayStyle%3D%26_20_viewEntries%3D1%26_20_viewFolders%3D1%26_20_folderStart%3D0%26_20_action%3DbrowseFolder%26_20_struts_action%3D%252Fdocument_library%252Fview%26_20_folderEnd%3D20%26_20_entryStart%3D0%26_20_folderId%3D20559386&_20_fileEntryId=25000510');
      itext('Life insurance');
      ie_close('a');
      ie_close('li');
      ie_open('li');
      ie_open('a', null, null, 'href', 'https://evp.liferay.com/');
      itext('EVP (Employee Volunteer Program)');
      ie_close('a');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param661 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'MPeUQ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var MPeUQ = function (_Component) {
  _inherits(MPeUQ, _Component);

  function MPeUQ() {
    _classCallCheck(this, MPeUQ);

    return _possibleConstructorReturn(this, (MPeUQ.__proto__ || Object.getPrototypeOf(MPeUQ)).apply(this, arguments));
  }

  return MPeUQ;
}(_metalComponent2.default);

_metalSoy2.default.register(MPeUQ, templates);
exports.MPeUQ = MPeUQ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[316]);