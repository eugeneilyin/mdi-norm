"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWeekend = require("./FilledWeekend");

var _OutlineWeekend = require("./OutlineWeekend");

var _RoundWeekend = require("./RoundWeekend");

var _SharpWeekend = require("./SharpWeekend");

var _TwoToneWeekend = require("./TwoToneWeekend");

var Weekend =
/*#__PURE__*/
function Weekend(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWeekend.FilledWeekend, _OutlineWeekend.OutlineWeekend, _RoundWeekend.RoundWeekend, _SharpWeekend.SharpWeekend, _TwoToneWeekend.TwoToneWeekend);
};

exports.Weekend = Weekend;