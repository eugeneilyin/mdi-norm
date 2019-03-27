"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVoiceOverOff =
/*#__PURE__*/
function TwoToneVoiceOverOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M9 17" + _fragments.bfa + "M7 9c0 1.1.9 2 2 2 .22 0 .42-.04.62-.11L7.11 8.38c-.07.2-.11.4-.11.62z"
  }), _react.default.createElement("path", {
    d: _fragments.hi
  }));
};

exports.TwoToneVoiceOverOff = TwoToneVoiceOverOff;