"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLocalPhone =
/*#__PURE__*/
function TwoToneLocalPhone(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM6.99 7.59c-.24-.83-.39-1.7-.45-2.59h-1.5c.09 1.32.35 2.59.75 3.8z"
  }), _react.default.createElement("path", {
    d: "M3 4c0 9.39 7.61 17 17 17 .55 0 1-.45 1-1" + _fragments.vx + "H4" + _fragments.e + "zm13.4 13.02" + _fragments.v + "v1.49" + _fragments.lo + "zM6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79z"
  }));
};

exports.TwoToneLocalPhone = TwoToneLocalPhone;