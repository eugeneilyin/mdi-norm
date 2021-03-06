"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDesktopMac =
/*#__PURE__*/
function TwoToneDesktopMac(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 4h18v10H3z"
  }), _react.default.createElement("path", {
    d: "M21 2H3" + _fragments.cy + "h7l-2 3v1h8v-1l-2-3h7" + _fragments.eh + "m0 12H3V4h18z"
  }));
};

exports.TwoToneDesktopMac = TwoToneDesktopMac;