"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneViewQuilt =
/*#__PURE__*/
function TwoToneViewQuilt(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M16 12.5h3V16h-3zM6 7h3v9H6zm5 5.5h3V16h-3zM11 7h8v3.5h-8z"
  }), _react.default.createElement("path", {
    d: "M4 5v13h17V5zm5 11H6V7h3zm5 0h-3v-3.5h3zm5 0h-3v-3.5h3zm0-5.5h-8V7h8z"
  }));
};

exports.TwoToneViewQuilt = TwoToneViewQuilt;