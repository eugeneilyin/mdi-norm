"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundSignalWifi2Bar =
/*#__PURE__*/
function RoundSignalWifi2Bar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M23.64 7" + _fragments.fi + _fragments.si + "z"
  }), _react.default.createElement("path", {
    d: "M4.79 12.52l5.65 7.04c.8 1 2.32 1 3.12 0l5.65-7.05C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z"
  }));
};

exports.RoundSignalWifi2Bar = RoundSignalWifi2Bar;