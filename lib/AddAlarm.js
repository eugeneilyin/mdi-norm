"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAddAlarm = require("./FilledAddAlarm");

var _OutlineAddAlarm = require("./OutlineAddAlarm");

var _RoundAddAlarm = require("./RoundAddAlarm");

var _SharpAddAlarm = require("./SharpAddAlarm");

var _TwoToneAddAlarm = require("./TwoToneAddAlarm");

var AddAlarm =
/*#__PURE__*/
function AddAlarm(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAddAlarm.FilledAddAlarm, _OutlineAddAlarm.OutlineAddAlarm, _RoundAddAlarm.RoundAddAlarm, _SharpAddAlarm.SharpAddAlarm, _TwoToneAddAlarm.TwoToneAddAlarm);
};

exports.AddAlarm = AddAlarm;