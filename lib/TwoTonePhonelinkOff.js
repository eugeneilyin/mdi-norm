"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePhonelinkOff =
/*#__PURE__*/
function TwoTonePhonelinkOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M22 17v-7h-4v4.61L20.39 17z"
  }), _react.default.createElement("path", {
    d: "M23 8" + _fragments.bfe + "V9" + _fragments.g + "zm-1-2V4H7.39l2 2zM.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.41-1.41L2.06 1.51.65 2.92zM4 6.27L14.73 17H4z"
  }));
};

exports.TwoTonePhonelinkOff = TwoTonePhonelinkOff;