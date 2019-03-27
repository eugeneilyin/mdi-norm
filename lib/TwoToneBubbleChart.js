"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBubbleChart =
/*#__PURE__*/
function TwoToneBubbleChart(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M16.5 12" + _fragments.hh + "S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5z"
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "15.01",
    cy: "18",
    r: "1"
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "7",
    cy: "14",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M7 18" + _fragments.co + "m11.01 6c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-4 0" + _fragments.bc + "s1 .45 1 1-.45 1-1 1-1-.45-1-1zm2.49-4c3.03 0 5.5-2.47 5.5-5.5S19.53 3 16.5 3 11 5.47 11 8.5s2.47 5.5 5.5 5.5zm0-9C18.43 5 20 6.57 20 8.5S18.43 12 16.5 12 13 10.43 13 8.5 14.57 5 16.5 5z"
  }));
};

exports.TwoToneBubbleChart = TwoToneBubbleChart;