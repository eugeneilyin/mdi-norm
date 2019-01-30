"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFormatSize = require("./FilledFormatSize");

var _OutlineFormatSize = require("./OutlineFormatSize");

var _RoundFormatSize = require("./RoundFormatSize");

var _SharpFormatSize = require("./SharpFormatSize");

var _TwoToneFormatSize = require("./TwoToneFormatSize");

var FormatSize =
/*#__PURE__*/
function FormatSize(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFormatSize.FilledFormatSize, _OutlineFormatSize.OutlineFormatSize, _RoundFormatSize.RoundFormatSize, _SharpFormatSize.SharpFormatSize, _TwoToneFormatSize.TwoToneFormatSize);
};

exports.FormatSize = FormatSize;