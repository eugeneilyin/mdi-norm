"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneHowToReg =
/*#__PURE__*/
function TwoToneHowToReg(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "11",
    cy: "8",
    r: "2"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 18h4.99L9 17l.93-.94C7.55 16.33 5.2 17.37 5 18z"
  }), _react.default.createElement("path", {
    d: "M11 12" + _fragments.co + "m-1 12H5c.2-.63 2.55-1.67 4.93-1.94h.03l.46-.45L12 14.06" + _fragments.bgb + "h9zm10.6-5.5l-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z"
  }));
};

exports.TwoToneHowToReg = TwoToneHowToReg;