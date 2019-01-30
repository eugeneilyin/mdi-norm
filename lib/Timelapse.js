"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTimelapse = require("./FilledTimelapse");

var _OutlineTimelapse = require("./OutlineTimelapse");

var _RoundTimelapse = require("./RoundTimelapse");

var _SharpTimelapse = require("./SharpTimelapse");

var _TwoToneTimelapse = require("./TwoToneTimelapse");

var Timelapse =
/*#__PURE__*/
function Timelapse(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTimelapse.FilledTimelapse, _OutlineTimelapse.OutlineTimelapse, _RoundTimelapse.RoundTimelapse, _SharpTimelapse.SharpTimelapse, _TwoToneTimelapse.TwoToneTimelapse);
};

exports.Timelapse = Timelapse;