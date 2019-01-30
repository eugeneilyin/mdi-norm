"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPermContactCalendar = require("./FilledPermContactCalendar");

var _OutlinePermContactCalendar = require("./OutlinePermContactCalendar");

var _RoundPermContactCalendar = require("./RoundPermContactCalendar");

var _SharpPermContactCalendar = require("./SharpPermContactCalendar");

var _TwoTonePermContactCalendar = require("./TwoTonePermContactCalendar");

var PermContactCalendar =
/*#__PURE__*/
function PermContactCalendar(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPermContactCalendar.FilledPermContactCalendar, _OutlinePermContactCalendar.OutlinePermContactCalendar, _RoundPermContactCalendar.RoundPermContactCalendar, _SharpPermContactCalendar.SharpPermContactCalendar, _TwoTonePermContactCalendar.TwoTonePermContactCalendar);
};

exports.PermContactCalendar = PermContactCalendar;