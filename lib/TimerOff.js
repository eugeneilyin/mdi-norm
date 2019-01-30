"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTimerOff = require("./FilledTimerOff");

var _OutlineTimerOff = require("./OutlineTimerOff");

var _RoundTimerOff = require("./RoundTimerOff");

var _SharpTimerOff = require("./SharpTimerOff");

var _TwoToneTimerOff = require("./TwoToneTimerOff");

var TimerOff =
/*#__PURE__*/
function TimerOff(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTimerOff.FilledTimerOff, _OutlineTimerOff.OutlineTimerOff, _RoundTimerOff.RoundTimerOff, _SharpTimerOff.SharpTimerOff, _TwoToneTimerOff.TwoToneTimerOff);
};

exports.TimerOff = TimerOff;