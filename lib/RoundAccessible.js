"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundAccessible =
/*#__PURE__*/
function RoundAccessible(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "4",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M19 11.9c0-.49-.36-.89-.84-.97-1.25-.21-2.43-.88-3.23-1.76" + _fragments.bfv + "c-.37-.21-.78-.31-1.25-.25C10.73 7.15 10 8.07 10 9.1V15" + _fragments.d + "h5v4" + _fragments.cc + "v-4.5" + _fragments.b + "h-3v-3.45c1 .83 2.4 1.54 3.8 1.82.62.13 1.2-.34 1.2-.97zM12.83 18" + _fragments.qs
  }));
};

exports.RoundAccessible = RoundAccessible;