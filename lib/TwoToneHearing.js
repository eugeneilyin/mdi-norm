"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneHearing =
/*#__PURE__*/
function TwoToneHearing(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78" + _fragments.fg + "C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36z"
  }), _react.default.createElement("circle", {
    cx: "14",
    cy: "9",
    r: "2.5"
  }), _react.default.createElement("path", {
    d: _fragments.bcy + "c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2" + _fragments.nr + "z"
  }));
};

exports.TwoToneHearing = TwoToneHearing;