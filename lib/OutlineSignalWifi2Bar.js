"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineSignalWifi2Bar =
/*#__PURE__*/
function OutlineSignalWifi2Bar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M23.64 7" + _fragments.fi + "L12 21.5 23.64 7z"
  }), _react.default.createElement("path", {
    d: "M4.79 12.52L12 21.5l7.21-8.99C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z"
  }));
};

exports.OutlineSignalWifi2Bar = OutlineSignalWifi2Bar;