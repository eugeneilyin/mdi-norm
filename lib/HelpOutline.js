"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHelpOutline = require("./FilledHelpOutline");

var _OutlineHelpOutline = require("./OutlineHelpOutline");

var _RoundHelpOutline = require("./RoundHelpOutline");

var _SharpHelpOutline = require("./SharpHelpOutline");

var _TwoToneHelpOutline = require("./TwoToneHelpOutline");

var HelpOutline =
/*#__PURE__*/
function HelpOutline(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHelpOutline.FilledHelpOutline, _OutlineHelpOutline.OutlineHelpOutline, _RoundHelpOutline.RoundHelpOutline, _SharpHelpOutline.SharpHelpOutline, _TwoToneHelpOutline.TwoToneHelpOutline);
};

exports.HelpOutline = HelpOutline;