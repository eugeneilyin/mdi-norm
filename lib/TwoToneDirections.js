"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDirections =
/*#__PURE__*/
function TwoToneDirections(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3.01 12l9 9L21 12l-9-9-8.99 9zM14 7.5l3.5 3.5-3.5 3.5V12h-4v3H8v-4" + _fragments.bc + "h5z"
  }), _react.default.createElement("path", {
    d: "M13.42 1.58" + _fragments.bhc + "c.78-.76.79-2.03.02-2.82zm-1.41 19.41l-9-9 9-9 9 9-9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9" + _fragments.e + "z"
  }));
};

exports.TwoToneDirections = TwoToneDirections;