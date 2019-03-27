"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineGroupWork =
/*#__PURE__*/
function OutlineGroupWork(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.ku
  }), _react.default.createElement("circle", {
    cx: "8",
    cy: "14",
    r: "2"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "2"
  }), _react.default.createElement("circle", {
    cx: "16",
    cy: "14",
    r: "2"
  }));
};

exports.OutlineGroupWork = OutlineGroupWork;