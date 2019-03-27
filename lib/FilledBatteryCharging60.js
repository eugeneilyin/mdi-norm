"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledBatteryCharging60 =
/*#__PURE__*/
function FilledBatteryCharging60(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15.67 4" + _fragments.iv + "V11h3.87L13 7v4h4V5.33" + _fragments.hu + "z"
  }), _react.default.createElement("path", {
    d: _fragments.bns + "l1.87-3.5H7v9.67" + _fragments.by + "V11h-4z"
  }));
};

exports.FilledBatteryCharging60 = FilledBatteryCharging60;