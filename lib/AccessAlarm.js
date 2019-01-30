"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAccessAlarm = require("./FilledAccessAlarm");

var _OutlineAccessAlarm = require("./OutlineAccessAlarm");

var _RoundAccessAlarm = require("./RoundAccessAlarm");

var _SharpAccessAlarm = require("./SharpAccessAlarm");

var _TwoToneAccessAlarm = require("./TwoToneAccessAlarm");

var AccessAlarm =
/*#__PURE__*/
function AccessAlarm(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAccessAlarm.FilledAccessAlarm, _OutlineAccessAlarm.OutlineAccessAlarm, _RoundAccessAlarm.RoundAccessAlarm, _SharpAccessAlarm.SharpAccessAlarm, _TwoToneAccessAlarm.TwoToneAccessAlarm);
};

exports.AccessAlarm = AccessAlarm;