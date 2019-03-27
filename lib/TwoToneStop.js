"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneStop =
/*#__PURE__*/
function TwoToneStop(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 8h8v8H8z"
  }), _react.default.createElement("path", {
    d: "M6 18h12V6H6zM8 8h8v8H8z"
  }));
};

exports.TwoToneStop = TwoToneStop;