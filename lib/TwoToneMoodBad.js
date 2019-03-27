"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMoodBad =
/*#__PURE__*/
function TwoToneMoodBad(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.te + "m-1.61 9c.8-2.04 2.78-3.5 5.11-3.5s4.31 1.46 5.11 3.5z"
  }), _react.default.createElement("circle", {
    cx: "8.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: "M11.99 2" + _fragments.bb + "m0-6.5" + _fragments.no
  }), _react.default.createElement("circle", {
    cx: "15.5",
    cy: "9.5",
    r: "1.5"
  }));
};

exports.TwoToneMoodBad = TwoToneMoodBad;