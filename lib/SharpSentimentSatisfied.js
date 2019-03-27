"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpSentimentSatisfied =
/*#__PURE__*/
function SharpSentimentSatisfied(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "15.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "8.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: "M11.99 2" + _fragments.bb + "m0-4" + _fragments.biy
  }));
};

exports.SharpSentimentSatisfied = SharpSentimentSatisfied;