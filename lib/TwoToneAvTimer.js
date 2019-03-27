"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAvTimer =
/*#__PURE__*/
function TwoToneAvTimer(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 21" + _fragments.bkf + "h-1v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "17",
    r: "1"
  }), _react.default.createElement("circle", {
    cx: "17",
    cy: "12",
    r: "1"
  }), _react.default.createElement("circle", {
    cx: "7",
    cy: "12",
    r: "1"
  }));
};

exports.TwoToneAvTimer = TwoToneAvTimer;