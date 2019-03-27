"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneShare =
/*#__PURE__*/
function TwoToneShare(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "18",
    cy: "5",
    r: "1"
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "6",
    cy: "12",
    r: "1"
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "18",
    cy: "19.02",
    r: "1"
  }), _react.default.createElement("path", {
    d: _fragments.bny
  }));
};

exports.TwoToneShare = TwoToneShare;