"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var FilledBubbleChart =
/*#__PURE__*/
function FilledBubbleChart(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "7.2",
    cy: "14.4",
    r: "3.2"
  }), _react.default.createElement("circle", {
    cx: "14.8",
    cy: "18",
    r: "2"
  }), _react.default.createElement("circle", {
    cx: "15.2",
    cy: "8.8",
    r: "4.8"
  }));
};

exports.FilledBubbleChart = FilledBubbleChart;