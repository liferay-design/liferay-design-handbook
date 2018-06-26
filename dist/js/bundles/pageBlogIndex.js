var pageComponent =
webpackJsonppageComponent([35],{

/***/ 262:
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

var _indexSoy = __webpack_require__(263);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageBlogIndex = function (_Component) {
  _inherits(pageBlogIndex, _Component);

  function pageBlogIndex() {
    _classCallCheck(this, pageBlogIndex);

    return _possibleConstructorReturn(this, (pageBlogIndex.__proto__ || Object.getPrototypeOf(pageBlogIndex)).apply(this, arguments));
  }

  return pageBlogIndex;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pageBlogIndex, _indexSoy2.default);

exports.default = pageBlogIndex;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pageBlogIndex = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pageBlogIndex.
   * @public
   */

  goog.module('pageBlogIndex.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('main.incrementaldom', 'render');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    var param258 = function param258() {
      ie_open('div', null, null, 'class', 'blog');
      $allPosts(opt_data, null, opt_ijData);
      ie_close('div');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param258 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pageBlogIndex.render';
  }

  /**
   * @param {{
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $allPosts(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'posts-list posts-list-all');
    ie_open('div', null, null, 'class', 'container');
    var childIdList277 = opt_data.site.index.children['blog'].childIds;
    var childIdListLen277 = childIdList277.length;
    for (var childIdIndex277 = 0; childIdIndex277 < childIdListLen277; childIdIndex277++) {
      var childIdData277 = childIdList277[childIdIndex277];
      var childPage__soy265 = opt_data.site.index.children['blog'].children[childIdData277];
      ie_open('article', null, null, 'class', 'post-item container-blog');
      ie_open('a', null, null, 'class', 'post-item__link', 'href', childPage__soy265.url);
      ie_open('small');
      itext('By ');
      var dyn24 = childPage__soy265.author;
      if (typeof dyn24 == 'function') dyn24();else if (dyn24 != null) itext(dyn24);
      itext(' ');
      ie_open('span');
      itext('| ');
      var dyn25 = childPage__soy265.date;
      if (typeof dyn25 == 'function') dyn25();else if (dyn25 != null) itext(dyn25);
      ie_close('span');
      ie_close('small');
      ie_open('h4', null, null, 'class', 'post-item__title');
      var dyn26 = childPage__soy265.title;
      if (typeof dyn26 == 'function') dyn26();else if (dyn26 != null) itext(dyn26);
      ie_close('h4');
      ie_open('p');
      var dyn27 = childPage__soy265.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('p');
      ie_close('a');
      ie_close('article');
    }
    ie_close('div');
    ie_close('div');
  }
  exports.allPosts = $allPosts;
  if (goog.DEBUG) {
    $allPosts.soyTemplateName = 'pageBlogIndex.allPosts';
  }

  exports.render.params = [];
  exports.render.types = {};
  exports.allPosts.params = ["site"];
  exports.allPosts.types = { "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pageBlogIndex = function (_Component) {
  _inherits(pageBlogIndex, _Component);

  function pageBlogIndex() {
    _classCallCheck(this, pageBlogIndex);

    return _possibleConstructorReturn(this, (pageBlogIndex.__proto__ || Object.getPrototypeOf(pageBlogIndex)).apply(this, arguments));
  }

  return pageBlogIndex;
}(_metalComponent2.default);

_metalSoy2.default.register(pageBlogIndex, templates);
exports.pageBlogIndex = pageBlogIndex;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[262]);