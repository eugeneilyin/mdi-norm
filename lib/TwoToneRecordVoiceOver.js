"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneRecordVoiceOver =
/*#__PURE__*/
function TwoToneRecordVoiceOver(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "9",
    cy: "9",
    r: "2"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M9 17" + _fragments.bfa
  }), _react.default.createElement("path", {
    d: "M9 13" + _fragments.co + "m0 8" + _fragments.wm + "M16.76 5.36l-1.68 1.69" + _fragments.jf
  }));
};

exports.TwoToneRecordVoiceOver = TwoToneRecordVoiceOver;