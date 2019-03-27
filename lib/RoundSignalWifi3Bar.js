"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundSignalWifi3Bar =
/*#__PURE__*/
function RoundSignalWifi3Bar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M23.64 7" + _fragments.fi + _fragments.si + "z"
  }), _react.default.createElement("path", {
    d: "M3.53 10.95l6.91 8.61c.8 1 2.32 1 3.12 0l6.91-8.61C20.04 10.62 16.81 8 12 8s-8.04 2.62-8.47 2.95z"
  }));
};

exports.RoundSignalWifi3Bar = RoundSignalWifi3Bar;