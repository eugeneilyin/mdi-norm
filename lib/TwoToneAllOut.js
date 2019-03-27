"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAllOut =
/*#__PURE__*/
function TwoToneAllOut(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "12",
    cy: "12",
    r: "5"
  }), _react.default.createElement("path", {
    d: _fragments.bib
  }));
};

exports.TwoToneAllOut = TwoToneAllOut;