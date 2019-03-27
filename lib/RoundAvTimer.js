"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundAvTimer =
/*#__PURE__*/
function RoundAvTimer(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "17",
    r: "1"
  }), _react.default.createElement("circle", {
    cx: "7",
    cy: "12",
    r: "1"
  }), _react.default.createElement("circle", {
    cx: "17",
    cy: "12",
    r: "1"
  }), _react.default.createElement("path", {
    d: "M12 3" + _fragments.e + "v2" + _fragments.cc + "v-.92c3.31.48 5.87 3.25 6 6.66.14 3.85-3.03 7.2-6.88 7.26C8.19 19.06 5 15.91 5 12c0-1.68.59-3.22 1.58-4.42l4.71 4.72" + _fragments.bn + "L7.26 5.46c-.38-.38-1-.39-1.4-.02C4.1 7.07 3 9.4 3 12c0 5.04 4.14 9.12 9.21 9 4.7-.11 8.63-4.01 8.78-8.71C21.16 7.19 17.07 3 12 3z"
  }));
};

exports.RoundAvTimer = RoundAvTimer;