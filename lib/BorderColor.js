"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBorderColor = require("./FilledBorderColor");

var _OutlineBorderColor = require("./OutlineBorderColor");

var _RoundBorderColor = require("./RoundBorderColor");

var _SharpBorderColor = require("./SharpBorderColor");

var _TwoToneBorderColor = require("./TwoToneBorderColor");

var BorderColor =
/*#__PURE__*/
function BorderColor(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBorderColor.FilledBorderColor, _OutlineBorderColor.OutlineBorderColor, _RoundBorderColor.RoundBorderColor, _SharpBorderColor.SharpBorderColor, _TwoToneBorderColor.TwoToneBorderColor);
};

exports.BorderColor = BorderColor;