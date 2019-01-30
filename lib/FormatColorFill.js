"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFormatColorFill = require("./FilledFormatColorFill");

var _OutlineFormatColorFill = require("./OutlineFormatColorFill");

var _RoundFormatColorFill = require("./RoundFormatColorFill");

var _SharpFormatColorFill = require("./SharpFormatColorFill");

var _TwoToneFormatColorFill = require("./TwoToneFormatColorFill");

var FormatColorFill =
/*#__PURE__*/
function FormatColorFill(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFormatColorFill.FilledFormatColorFill, _OutlineFormatColorFill.OutlineFormatColorFill, _RoundFormatColorFill.RoundFormatColorFill, _SharpFormatColorFill.SharpFormatColorFill, _TwoToneFormatColorFill.TwoToneFormatColorFill);
};

exports.FormatColorFill = FormatColorFill;