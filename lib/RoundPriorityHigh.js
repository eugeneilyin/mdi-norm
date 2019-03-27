"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundPriorityHigh =
/*#__PURE__*/
function RoundPriorityHigh(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M12 3" + _fragments.c + "v8" + _fragments.d + "s2-.9 2-2V5" + _fragments.b + "z"
  }));
};

exports.RoundPriorityHigh = RoundPriorityHigh;