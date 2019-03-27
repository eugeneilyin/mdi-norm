"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledBatteryCharging30 =
/*#__PURE__*/
function FilledBatteryCharging30(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15.67 4" + _fragments.iv + "v9.17h2L13 7v5.5h2l-1.07 2H17V5.33" + _fragments.hu + "z"
  }), _react.default.createElement("path", {
    d: "M11 20v-5.5H7v6.17" + _fragments.by + "V14.5h-3.07z"
  }));
};

exports.FilledBatteryCharging30 = FilledBatteryCharging30;