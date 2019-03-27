"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpRecordVoiceOver =
/*#__PURE__*/
function SharpRecordVoiceOver(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "4"
  }), _react.default.createElement("path", {
    d: "M9 15" + _fragments.lb + "m6.08-7.95" + _fragments.jf
  }));
};

exports.SharpRecordVoiceOver = SharpRecordVoiceOver;