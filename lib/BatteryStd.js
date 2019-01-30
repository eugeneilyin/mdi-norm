"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBatteryStd = require("./FilledBatteryStd");

var _OutlineBatteryStd = require("./OutlineBatteryStd");

var _RoundBatteryStd = require("./RoundBatteryStd");

var _SharpBatteryStd = require("./SharpBatteryStd");

var _TwoToneBatteryStd = require("./TwoToneBatteryStd");

var BatteryStd =
/*#__PURE__*/
function BatteryStd(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBatteryStd.FilledBatteryStd, _OutlineBatteryStd.OutlineBatteryStd, _RoundBatteryStd.RoundBatteryStd, _SharpBatteryStd.SharpBatteryStd, _TwoToneBatteryStd.TwoToneBatteryStd);
};

exports.BatteryStd = BatteryStd;