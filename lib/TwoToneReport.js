"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneReport =
/*#__PURE__*/
function TwoToneReport(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M9.1 5L5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1L14.9 5zM12 17" + _fragments.bj + "m1-3h-2V7h2z"
  }), _react.default.createElement("path", {
    d: _fragments.bjo
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "1"
  }), _react.default.createElement("path", {
    d: "M11 7h2v7h-2z"
  }));
};

exports.TwoToneReport = TwoToneReport;