"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledInvertColors = require("./FilledInvertColors");

var _OutlineInvertColors = require("./OutlineInvertColors");

var _RoundInvertColors = require("./RoundInvertColors");

var _SharpInvertColors = require("./SharpInvertColors");

var _TwoToneInvertColors = require("./TwoToneInvertColors");

var InvertColors =
/*#__PURE__*/
function InvertColors(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledInvertColors.FilledInvertColors, _OutlineInvertColors.OutlineInvertColors, _RoundInvertColors.RoundInvertColors, _SharpInvertColors.SharpInvertColors, _TwoToneInvertColors.TwoToneInvertColors);
};

exports.InvertColors = InvertColors;