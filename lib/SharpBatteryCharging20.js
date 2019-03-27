"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpBatteryCharging20 =
/*#__PURE__*/
function SharpBatteryCharging20(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M11 20v-3H7v5h10v-5h-4.4z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.zb + "v13h4v-2.5H9L13 7v5.5h2L12.6 17H17z"
  }));
};

exports.SharpBatteryCharging20 = SharpBatteryCharging20;