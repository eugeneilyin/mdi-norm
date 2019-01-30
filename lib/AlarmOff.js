"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAlarmOff = require("./FilledAlarmOff");

var _OutlineAlarmOff = require("./OutlineAlarmOff");

var _RoundAlarmOff = require("./RoundAlarmOff");

var _SharpAlarmOff = require("./SharpAlarmOff");

var _TwoToneAlarmOff = require("./TwoToneAlarmOff");

var AlarmOff =
/*#__PURE__*/
function AlarmOff(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAlarmOff.FilledAlarmOff, _OutlineAlarmOff.OutlineAlarmOff, _RoundAlarmOff.RoundAlarmOff, _SharpAlarmOff.SharpAlarmOff, _TwoToneAlarmOff.TwoToneAlarmOff);
};

exports.AlarmOff = AlarmOff;