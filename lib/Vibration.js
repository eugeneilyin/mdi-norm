"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVibration = require("./FilledVibration");

var _OutlineVibration = require("./OutlineVibration");

var _RoundVibration = require("./RoundVibration");

var _SharpVibration = require("./SharpVibration");

var _TwoToneVibration = require("./TwoToneVibration");

var Vibration =
/*#__PURE__*/
function Vibration(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVibration.FilledVibration, _OutlineVibration.OutlineVibration, _RoundVibration.RoundVibration, _SharpVibration.SharpVibration, _TwoToneVibration.TwoToneVibration);
};

exports.Vibration = Vibration;