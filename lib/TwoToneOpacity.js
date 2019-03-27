"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneOpacity =
/*#__PURE__*/
function TwoToneOpacity(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M16.24 9.65L12 5.27 7.76 9.6C6.62 10.73 6.01 12 6 14h12c-.01-2-.62-3.23-1.76-4.35z"
  }), _react.default.createElement("path", {
    d: "M17.66 8L12 2.35 6.34 8" + _fragments.kn
  }));
};

exports.TwoToneOpacity = TwoToneOpacity;