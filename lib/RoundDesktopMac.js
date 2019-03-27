"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundDesktopMac =
/*#__PURE__*/
function RoundDesktopMac(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M21 2H3" + _fragments.cy + "h7l-1.63 2.45c-.44.66.03 1.55.83 1.55h5.6c.8 0 1.28-.89.83-1.55L14 18h7" + _fragments.eh + "m0 12H3V5" + _fragments.vw + "z"
  }));
};

exports.RoundDesktopMac = RoundDesktopMac;