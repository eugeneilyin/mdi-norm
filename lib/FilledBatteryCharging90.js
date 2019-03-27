"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledBatteryCharging90 =
/*#__PURE__*/
function FilledBatteryCharging90(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15.67 4" + _fragments.iv + "V8h5.47L13 7v1h4V5.33" + _fragments.hu + "z"
  }), _react.default.createElement("path", {
    d: _fragments.bns + "L12.47 8H7v12.67" + _fragments.by + "V8h-4z"
  }));
};

exports.FilledBatteryCharging90 = FilledBatteryCharging90;