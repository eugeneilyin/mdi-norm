"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneFormatListBulleted =
/*#__PURE__*/
function TwoToneFormatListBulleted(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M7 5h14v2H7z"
  }), _react.default.createElement("circle", {
    cx: "4",
    cy: "6",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: "M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z"
  }), _react.default.createElement("circle", {
    cx: "4",
    cy: "12",
    r: "1.5"
  }));
};

exports.TwoToneFormatListBulleted = TwoToneFormatListBulleted;