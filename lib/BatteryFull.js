"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBatteryFull = require("./FilledBatteryFull");

var _OutlineBatteryFull = require("./OutlineBatteryFull");

var _RoundBatteryFull = require("./RoundBatteryFull");

var _SharpBatteryFull = require("./SharpBatteryFull");

var _TwoToneBatteryFull = require("./TwoToneBatteryFull");

var BatteryFull =
/*#__PURE__*/
function BatteryFull(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBatteryFull.FilledBatteryFull, _OutlineBatteryFull.OutlineBatteryFull, _RoundBatteryFull.RoundBatteryFull, _SharpBatteryFull.SharpBatteryFull, _TwoToneBatteryFull.TwoToneBatteryFull);
};

exports.BatteryFull = BatteryFull;