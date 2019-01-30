"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFormatPaint = require("./FilledFormatPaint");

var _OutlineFormatPaint = require("./OutlineFormatPaint");

var _RoundFormatPaint = require("./RoundFormatPaint");

var _SharpFormatPaint = require("./SharpFormatPaint");

var _TwoToneFormatPaint = require("./TwoToneFormatPaint");

var FormatPaint =
/*#__PURE__*/
function FormatPaint(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFormatPaint.FilledFormatPaint, _OutlineFormatPaint.OutlineFormatPaint, _RoundFormatPaint.RoundFormatPaint, _SharpFormatPaint.SharpFormatPaint, _TwoToneFormatPaint.TwoToneFormatPaint);
};

exports.FormatPaint = FormatPaint;