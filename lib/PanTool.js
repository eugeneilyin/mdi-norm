"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPanTool = require("./FilledPanTool");

var _OutlinePanTool = require("./OutlinePanTool");

var _RoundPanTool = require("./RoundPanTool");

var _SharpPanTool = require("./SharpPanTool");

var _TwoTonePanTool = require("./TwoTonePanTool");

var PanTool =
/*#__PURE__*/
function PanTool(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPanTool.FilledPanTool, _OutlinePanTool.OutlinePanTool, _RoundPanTool.RoundPanTool, _SharpPanTool.SharpPanTool, _TwoTonePanTool.TwoTonePanTool);
};

exports.PanTool = PanTool;