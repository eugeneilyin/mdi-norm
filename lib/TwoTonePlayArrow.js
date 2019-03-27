"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoTonePlayArrow =
/*#__PURE__*/
function TwoTonePlayArrow(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M10 8.64v6.72L15.27 12z"
  }), _react.default.createElement("path", {
    d: "M8 19l11-7L8 5zm2-10.36L15.27 12 10 15.36z"
  }));
};

exports.TwoTonePlayArrow = TwoTonePlayArrow;