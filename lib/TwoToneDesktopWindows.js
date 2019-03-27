"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDesktopWindows =
/*#__PURE__*/
function TwoToneDesktopWindows(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 4h18v12H3z"
  }), _react.default.createElement("path", {
    d: "M21 2H3" + _fragments.cy + "h7v2H8v2h8v-2h-2v-2h7" + _fragments.eh + "m0 14H3V4h18z"
  }));
};

exports.TwoToneDesktopWindows = TwoToneDesktopWindows;