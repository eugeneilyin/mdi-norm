"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpBatteryCharging30 =
/*#__PURE__*/
function SharpBatteryCharging30(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.zb + "v10.5h2L13 7v5.5h2l-1.07 2H17z"
  }), _react.default.createElement("path", {
    d: "M11 20v-5.5H7V22h10v-7.5h-3.07z"
  }));
};

exports.SharpBatteryCharging30 = SharpBatteryCharging30;