"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFormatLineSpacing = require("./FilledFormatLineSpacing");

var _OutlineFormatLineSpacing = require("./OutlineFormatLineSpacing");

var _RoundFormatLineSpacing = require("./RoundFormatLineSpacing");

var _SharpFormatLineSpacing = require("./SharpFormatLineSpacing");

var _TwoToneFormatLineSpacing = require("./TwoToneFormatLineSpacing");

var FormatLineSpacing =
/*#__PURE__*/
function FormatLineSpacing(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFormatLineSpacing.FilledFormatLineSpacing, _OutlineFormatLineSpacing.OutlineFormatLineSpacing, _RoundFormatLineSpacing.RoundFormatLineSpacing, _SharpFormatLineSpacing.SharpFormatLineSpacing, _TwoToneFormatLineSpacing.TwoToneFormatLineSpacing);
};

exports.FormatLineSpacing = FormatLineSpacing;