"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAlarm = require("./FilledAlarm");

var _OutlineAlarm = require("./OutlineAlarm");

var _RoundAlarm = require("./RoundAlarm");

var _SharpAlarm = require("./SharpAlarm");

var _TwoToneAlarm = require("./TwoToneAlarm");

var Alarm =
/*#__PURE__*/
function Alarm(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAlarm.FilledAlarm, _OutlineAlarm.OutlineAlarm, _RoundAlarm.RoundAlarm, _SharpAlarm.SharpAlarm, _TwoToneAlarm.TwoToneAlarm);
};

exports.Alarm = Alarm;