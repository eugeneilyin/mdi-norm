"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var SharpBorderColor =
/*#__PURE__*/
function SharpBorderColor(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M17.75 8L14 4.25l-10 10V18h3.75zm3.66-3.66L17.66.59 15 3.25 18.75 7z"
  }), _react.default.createElement("path", {
    opacity: ".36",
    d: "M0 20h24v4H0z"
  }));
};

exports.SharpBorderColor = SharpBorderColor;