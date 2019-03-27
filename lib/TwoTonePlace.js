"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePlace =
/*#__PURE__*/
function TwoTonePlace(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M17 9" + _fragments.js + "S7 6.24 7 9c0 2.85 2.92 7.21 5 9.88 2.12-2.69 5-7 5-9.88zM9.5 9c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 10.38 9.5 9z"
  }), _react.default.createElement("path", {
    d: "M19 9" + _fragments.hm + "S5 5.13 5 9" + _fragments.bic
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  }));
};

exports.TwoTonePlace = TwoTonePlace;