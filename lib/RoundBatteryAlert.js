"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundBatteryAlert =
/*#__PURE__*/
function RoundBatteryAlert(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.sc + "M13 18" + _fragments.me + "m0-5" + _fragments.em + "v-3" + _fragments.ho + "z"
  }));
};

exports.RoundBatteryAlert = RoundBatteryAlert;