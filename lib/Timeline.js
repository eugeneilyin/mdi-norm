"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTimeline = require("./FilledTimeline");

var _OutlineTimeline = require("./OutlineTimeline");

var _RoundTimeline = require("./RoundTimeline");

var _SharpTimeline = require("./SharpTimeline");

var _TwoToneTimeline = require("./TwoToneTimeline");

var Timeline =
/*#__PURE__*/
function Timeline(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTimeline.FilledTimeline, _OutlineTimeline.OutlineTimeline, _RoundTimeline.RoundTimeline, _SharpTimeline.SharpTimeline, _TwoToneTimeline.TwoToneTimeline);
};

exports.Timeline = Timeline;