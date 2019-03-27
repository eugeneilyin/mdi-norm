"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineReport =
/*#__PURE__*/
function OutlineReport(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bjo
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "1"
  }), _react.default.createElement("path", {
    d: "M11 7h2v7h-2z"
  }));
};

exports.OutlineReport = OutlineReport;