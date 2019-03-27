"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var FilledScatterPlot =
/*#__PURE__*/
function FilledScatterPlot(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "7",
    cy: "14",
    r: "3"
  }), _react.default.createElement("circle", {
    cx: "11",
    cy: "6",
    r: "3"
  }), _react.default.createElement("circle", {
    cx: "16.6",
    cy: "17.6",
    r: "3"
  }));
};

exports.FilledScatterPlot = FilledScatterPlot;