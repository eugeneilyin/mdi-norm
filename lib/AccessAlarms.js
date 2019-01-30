"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAccessAlarms = require("./FilledAccessAlarms");

var _OutlineAccessAlarms = require("./OutlineAccessAlarms");

var _RoundAccessAlarms = require("./RoundAccessAlarms");

var _SharpAccessAlarms = require("./SharpAccessAlarms");

var _TwoToneAccessAlarms = require("./TwoToneAccessAlarms");

var AccessAlarms =
/*#__PURE__*/
function AccessAlarms(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAccessAlarms.FilledAccessAlarms, _OutlineAccessAlarms.OutlineAccessAlarms, _RoundAccessAlarms.RoundAccessAlarms, _SharpAccessAlarms.SharpAccessAlarms, _TwoToneAccessAlarms.TwoToneAccessAlarms);
};

exports.AccessAlarms = AccessAlarms;