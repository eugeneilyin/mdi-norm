"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTextFormat = require("./FilledTextFormat");

var _OutlineTextFormat = require("./OutlineTextFormat");

var _RoundTextFormat = require("./RoundTextFormat");

var _SharpTextFormat = require("./SharpTextFormat");

var _TwoToneTextFormat = require("./TwoToneTextFormat");

var TextFormat =
/*#__PURE__*/
function TextFormat(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTextFormat.FilledTextFormat, _OutlineTextFormat.OutlineTextFormat, _RoundTextFormat.RoundTextFormat, _SharpTextFormat.SharpTextFormat, _TwoToneTextFormat.TwoToneTextFormat);
};

exports.TextFormat = TextFormat;