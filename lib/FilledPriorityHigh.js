"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var FilledPriorityHigh =
/*#__PURE__*/
function FilledPriorityHigh(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M10 3h4v12h-4z"
  }));
};

exports.FilledPriorityHigh = FilledPriorityHigh;