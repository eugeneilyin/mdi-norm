"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPowerOff = require("./FilledPowerOff");

var _OutlinePowerOff = require("./OutlinePowerOff");

var _RoundPowerOff = require("./RoundPowerOff");

var _SharpPowerOff = require("./SharpPowerOff");

var _TwoTonePowerOff = require("./TwoTonePowerOff");

var PowerOff =
/*#__PURE__*/
function PowerOff(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPowerOff.FilledPowerOff, _OutlinePowerOff.OutlinePowerOff, _RoundPowerOff.RoundPowerOff, _SharpPowerOff.SharpPowerOff, _TwoTonePowerOff.TwoTonePowerOff);
};

exports.PowerOff = PowerOff;