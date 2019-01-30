"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCalendarToday = require("./FilledCalendarToday");

var _OutlineCalendarToday = require("./OutlineCalendarToday");

var _RoundCalendarToday = require("./RoundCalendarToday");

var _SharpCalendarToday = require("./SharpCalendarToday");

var _TwoToneCalendarToday = require("./TwoToneCalendarToday");

var CalendarToday =
/*#__PURE__*/
function CalendarToday(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCalendarToday.FilledCalendarToday, _OutlineCalendarToday.OutlineCalendarToday, _RoundCalendarToday.RoundCalendarToday, _SharpCalendarToday.SharpCalendarToday, _TwoToneCalendarToday.TwoToneCalendarToday);
};

exports.CalendarToday = CalendarToday;