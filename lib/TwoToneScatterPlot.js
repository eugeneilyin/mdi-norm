"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneScatterPlot =
/*#__PURE__*/
function TwoToneScatterPlot(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "11",
    cy: "6",
    r: "2"
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "16.6",
    cy: "17.6",
    r: "2"
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "7",
    cy: "14",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M7 10" + _fragments.dr + "m8-10" + _fragments.lq + "S7 3.79 7 6s1.79 4 4 4 4-1.79 4-4zm-4 2" + _fragments.bp + "m5.6 5.6" + _fragments.dr
  }));
};

exports.TwoToneScatterPlot = TwoToneScatterPlot;