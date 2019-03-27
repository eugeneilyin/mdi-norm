"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundAccessibleForward =
/*#__PURE__*/
function RoundAccessibleForward(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "18",
    cy: "4.54",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M15 17" + _fragments.qz + "m3-3.5h-1.86" + _fragments.bdz + "l-.28.76c-.21.56.11 1.17.68 1.33.49.14 1-.11 1.2-.58l.3-.71H13l-1.83 4.1c-.6 1.33.39 2.9 1.85 2.9H18v4" + _fragments.cc + "v-4.5" + _fragments.b + "z"
  }));
};

exports.RoundAccessibleForward = RoundAccessibleForward;