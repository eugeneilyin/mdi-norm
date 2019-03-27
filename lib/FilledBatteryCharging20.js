"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledBatteryCharging20 =
/*#__PURE__*/
function FilledBatteryCharging20(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M11 20v-3H7v3.67" + _fragments.by + "V17h-4.4z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M15.67 4" + _fragments.iv + "V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33" + _fragments.hu + "z"
  }));
};

exports.FilledBatteryCharging20 = FilledBatteryCharging20;