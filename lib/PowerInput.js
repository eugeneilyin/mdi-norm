"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPowerInput = require("./FilledPowerInput");

var _OutlinePowerInput = require("./OutlinePowerInput");

var _RoundPowerInput = require("./RoundPowerInput");

var _SharpPowerInput = require("./SharpPowerInput");

var _TwoTonePowerInput = require("./TwoTonePowerInput");

var PowerInput =
/*#__PURE__*/
function PowerInput(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPowerInput.FilledPowerInput, _OutlinePowerInput.OutlinePowerInput, _RoundPowerInput.RoundPowerInput, _SharpPowerInput.SharpPowerInput, _TwoTonePowerInput.TwoTonePowerInput);
};

exports.PowerInput = PowerInput;