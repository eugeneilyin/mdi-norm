"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneHdrWeak =
/*#__PURE__*/
function TwoToneHdrWeak(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M17 6" + _fragments.fw + "m0 10" + _fragments.dd
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "5",
    cy: "12",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M5 8" + _fragments.dr
  }));
};

exports.TwoToneHdrWeak = TwoToneHdrWeak;