"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneLocalBar =
/*#__PURE__*/
function TwoToneLocalBar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M9.23 9L12 12.11 14.77 9z"
  }), _react.default.createElement("path", {
    d: "M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5zM5.66 5h12.69l-1.78 2H7.43zM12 12.11L9.23 9h5.54z"
  }));
};

exports.TwoToneLocalBar = TwoToneLocalBar;