"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSnooze = require("./FilledSnooze");

var _OutlineSnooze = require("./OutlineSnooze");

var _RoundSnooze = require("./RoundSnooze");

var _SharpSnooze = require("./SharpSnooze");

var _TwoToneSnooze = require("./TwoToneSnooze");

var Snooze =
/*#__PURE__*/
function Snooze(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSnooze.FilledSnooze, _OutlineSnooze.OutlineSnooze, _RoundSnooze.RoundSnooze, _SharpSnooze.SharpSnooze, _TwoToneSnooze.TwoToneSnooze);
};

exports.Snooze = Snooze;