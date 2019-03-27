"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledBatteryCharging80 =
/*#__PURE__*/
function FilledBatteryCharging80(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15.67 4" + _fragments.iv + "V9h4.93L13 7v2h4V5.33" + _fragments.hu + "z"
  }), _react.default.createElement("path", {
    d: _fragments.bns + "L11.93 9H7v11.67" + _fragments.by + "V9h-4z"
  }));
};

exports.FilledBatteryCharging80 = FilledBatteryCharging80;