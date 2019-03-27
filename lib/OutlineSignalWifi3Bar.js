"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineSignalWifi3Bar =
/*#__PURE__*/
function OutlineSignalWifi3Bar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M23.64 7" + _fragments.fi + "L12 21.5 23.64 7z"
  }), _react.default.createElement("path", {
    d: "M3.53 10.95L12 21.5l8.47-10.55C20.04 10.62 16.81 8 12 8s-8.04 2.62-8.47 2.95z"
  }));
};

exports.OutlineSignalWifi3Bar = OutlineSignalWifi3Bar;