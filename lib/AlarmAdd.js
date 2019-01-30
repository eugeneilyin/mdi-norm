"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAlarmAdd = require("./FilledAlarmAdd");

var _OutlineAlarmAdd = require("./OutlineAlarmAdd");

var _RoundAlarmAdd = require("./RoundAlarmAdd");

var _SharpAlarmAdd = require("./SharpAlarmAdd");

var _TwoToneAlarmAdd = require("./TwoToneAlarmAdd");

var AlarmAdd =
/*#__PURE__*/
function AlarmAdd(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAlarmAdd.FilledAlarmAdd, _OutlineAlarmAdd.OutlineAlarmAdd, _RoundAlarmAdd.RoundAlarmAdd, _SharpAlarmAdd.SharpAlarmAdd, _TwoToneAlarmAdd.TwoToneAlarmAdd);
};

exports.AlarmAdd = AlarmAdd;