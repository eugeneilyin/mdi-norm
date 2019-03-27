"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineReportOff =
/*#__PURE__*/
function OutlineReportOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M9.1 5h5.8L19 9.1v5.8l-.22.22 1.42 1.41.8-.8V8.27L15.73 3H8.27l-.8.8 1.41 1.42z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "1"
  }), _react.default.createElement("path", {
    d: "M13 9.33V7h-2v.33" + _fragments.yz + "M14.9 19H9.1L5 14.9V9.1l1.05-1.05 9.9 9.9z"
  }));
};

exports.OutlineReportOff = OutlineReportOff;