"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSchedule = require("./FilledSchedule");

var _OutlineSchedule = require("./OutlineSchedule");

var _RoundSchedule = require("./RoundSchedule");

var _SharpSchedule = require("./SharpSchedule");

var _TwoToneSchedule = require("./TwoToneSchedule");

var Schedule =
/*#__PURE__*/
function Schedule(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSchedule.FilledSchedule, _OutlineSchedule.OutlineSchedule, _RoundSchedule.RoundSchedule, _SharpSchedule.SharpSchedule, _TwoToneSchedule.TwoToneSchedule);
};

exports.Schedule = Schedule;