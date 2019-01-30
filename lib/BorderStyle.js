"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBorderStyle = require("./FilledBorderStyle");

var _OutlineBorderStyle = require("./OutlineBorderStyle");

var _RoundBorderStyle = require("./RoundBorderStyle");

var _SharpBorderStyle = require("./SharpBorderStyle");

var _TwoToneBorderStyle = require("./TwoToneBorderStyle");

var BorderStyle =
/*#__PURE__*/
function BorderStyle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBorderStyle.FilledBorderStyle, _OutlineBorderStyle.OutlineBorderStyle, _RoundBorderStyle.RoundBorderStyle, _SharpBorderStyle.SharpBorderStyle, _TwoToneBorderStyle.TwoToneBorderStyle);
};

exports.BorderStyle = BorderStyle;