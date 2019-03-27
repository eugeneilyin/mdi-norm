"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var FilledGolfCourse =
/*#__PURE__*/
function FilledGolfCourse(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "19.5",
    cy: "19.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: "M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98z"
  }));
};

exports.FilledGolfCourse = FilledGolfCourse;