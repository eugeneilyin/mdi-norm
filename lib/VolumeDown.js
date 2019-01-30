"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVolumeDown = require("./FilledVolumeDown");

var _OutlineVolumeDown = require("./OutlineVolumeDown");

var _RoundVolumeDown = require("./RoundVolumeDown");

var _SharpVolumeDown = require("./SharpVolumeDown");

var _TwoToneVolumeDown = require("./TwoToneVolumeDown");

var VolumeDown =
/*#__PURE__*/
function VolumeDown(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVolumeDown.FilledVolumeDown, _OutlineVolumeDown.OutlineVolumeDown, _RoundVolumeDown.RoundVolumeDown, _SharpVolumeDown.SharpVolumeDown, _TwoToneVolumeDown.TwoToneVolumeDown);
};

exports.VolumeDown = VolumeDown;