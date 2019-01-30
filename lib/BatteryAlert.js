"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBatteryAlert = require("./FilledBatteryAlert");

var _OutlineBatteryAlert = require("./OutlineBatteryAlert");

var _RoundBatteryAlert = require("./RoundBatteryAlert");

var _SharpBatteryAlert = require("./SharpBatteryAlert");

var _TwoToneBatteryAlert = require("./TwoToneBatteryAlert");

var BatteryAlert =
/*#__PURE__*/
function BatteryAlert(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBatteryAlert.FilledBatteryAlert, _OutlineBatteryAlert.OutlineBatteryAlert, _RoundBatteryAlert.RoundBatteryAlert, _SharpBatteryAlert.SharpBatteryAlert, _TwoToneBatteryAlert.TwoToneBatteryAlert);
};

exports.BatteryAlert = BatteryAlert;