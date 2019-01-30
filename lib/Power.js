"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPower = require("./FilledPower");

var _OutlinePower = require("./OutlinePower");

var _RoundPower = require("./RoundPower");

var _SharpPower = require("./SharpPower");

var _TwoTonePower = require("./TwoTonePower");

var Power =
/*#__PURE__*/
function Power(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPower.FilledPower, _OutlinePower.OutlinePower, _RoundPower.RoundPower, _SharpPower.SharpPower, _TwoTonePower.TwoTonePower);
};

exports.Power = Power;