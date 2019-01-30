"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCalendarViewDay = require("./FilledCalendarViewDay");

var _OutlineCalendarViewDay = require("./OutlineCalendarViewDay");

var _RoundCalendarViewDay = require("./RoundCalendarViewDay");

var _SharpCalendarViewDay = require("./SharpCalendarViewDay");

var _TwoToneCalendarViewDay = require("./TwoToneCalendarViewDay");

var CalendarViewDay =
/*#__PURE__*/
function CalendarViewDay(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCalendarViewDay.FilledCalendarViewDay, _OutlineCalendarViewDay.OutlineCalendarViewDay, _RoundCalendarViewDay.RoundCalendarViewDay, _SharpCalendarViewDay.SharpCalendarViewDay, _TwoToneCalendarViewDay.TwoToneCalendarViewDay);
};

exports.CalendarViewDay = CalendarViewDay;