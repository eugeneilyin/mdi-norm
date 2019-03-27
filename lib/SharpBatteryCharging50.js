"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpBatteryCharging50 =
/*#__PURE__*/
function SharpBatteryCharging50(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M14.47 13.5L11 20v-5.5H9l.53-1H7V22h10v-8.5z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.zb + "v9.5h2.53L13 7v5.5h2l-.53 1H17z"
  }));
};

exports.SharpBatteryCharging50 = SharpBatteryCharging50;