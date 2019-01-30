"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFormatColorText = require("./FilledFormatColorText");

var _OutlineFormatColorText = require("./OutlineFormatColorText");

var _RoundFormatColorText = require("./RoundFormatColorText");

var _SharpFormatColorText = require("./SharpFormatColorText");

var _TwoToneFormatColorText = require("./TwoToneFormatColorText");

var FormatColorText =
/*#__PURE__*/
function FormatColorText(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFormatColorText.FilledFormatColorText, _OutlineFormatColorText.OutlineFormatColorText, _RoundFormatColorText.RoundFormatColorText, _SharpFormatColorText.SharpFormatColorText, _TwoToneFormatColorText.TwoToneFormatColorText);
};

exports.FormatColorText = FormatColorText;