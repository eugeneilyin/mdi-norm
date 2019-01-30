"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAlarmOn = require("./FilledAlarmOn");

var _OutlineAlarmOn = require("./OutlineAlarmOn");

var _RoundAlarmOn = require("./RoundAlarmOn");

var _SharpAlarmOn = require("./SharpAlarmOn");

var _TwoToneAlarmOn = require("./TwoToneAlarmOn");

var AlarmOn =
/*#__PURE__*/
function AlarmOn(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAlarmOn.FilledAlarmOn, _OutlineAlarmOn.OutlineAlarmOn, _RoundAlarmOn.RoundAlarmOn, _SharpAlarmOn.SharpAlarmOn, _TwoToneAlarmOn.TwoToneAlarmOn);
};

exports.AlarmOn = AlarmOn;