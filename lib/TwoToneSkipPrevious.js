"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneSkipPrevious =
/*#__PURE__*/
function TwoToneSkipPrevious(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M16 14.14V9.86L12.97 12z"
  }), _react.default.createElement("path", {
    d: "M6 6h2v12H6zm12 12V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86z"
  }));
};

exports.TwoToneSkipPrevious = TwoToneSkipPrevious;