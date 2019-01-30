"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWrapText = require("./FilledWrapText");

var _OutlineWrapText = require("./OutlineWrapText");

var _RoundWrapText = require("./RoundWrapText");

var _SharpWrapText = require("./SharpWrapText");

var _TwoToneWrapText = require("./TwoToneWrapText");

var WrapText =
/*#__PURE__*/
function WrapText(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWrapText.FilledWrapText, _OutlineWrapText.OutlineWrapText, _RoundWrapText.RoundWrapText, _SharpWrapText.SharpWrapText, _TwoToneWrapText.TwoToneWrapText);
};

exports.WrapText = WrapText;