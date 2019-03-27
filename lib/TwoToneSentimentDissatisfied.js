"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSentimentDissatisfied =
/*#__PURE__*/
function TwoToneSentimentDissatisfied(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.te + "m6.95 9.5c-.7-1.19-1.97-2-3.45-2s-2.76.81-3.45 2H6.88C7.68 15.45 9.67 14 12 14s4.32 1.45 5.12 3.5z"
  }), _react.default.createElement("circle", {
    cx: "15.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "8.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: _fragments.ber
  }));
};

exports.TwoToneSentimentDissatisfied = TwoToneSentimentDissatisfied;