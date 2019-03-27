"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineCasino =
/*#__PURE__*/
function OutlineCasino(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.qi
  }), _react.default.createElement("circle", {
    cx: "7.5",
    cy: "16.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "7.5",
    cy: "7.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "16.5",
    cy: "16.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "16.5",
    cy: "7.5",
    r: "1.5"
  }));
};

exports.OutlineCasino = OutlineCasino;