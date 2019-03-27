"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineBookmark =
/*#__PURE__*/
function OutlineBookmark(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M17 3H7" + _fragments.c + "v16l7-3 7 3V5" + _fragments.b + "z"
  }));
};

exports.OutlineBookmark = OutlineBookmark;