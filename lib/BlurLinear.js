"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBlurLinear = require("./FilledBlurLinear");

var _OutlineBlurLinear = require("./OutlineBlurLinear");

var _RoundBlurLinear = require("./RoundBlurLinear");

var _SharpBlurLinear = require("./SharpBlurLinear");

var _TwoToneBlurLinear = require("./TwoToneBlurLinear");

var BlurLinear =
/*#__PURE__*/
function BlurLinear(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBlurLinear.FilledBlurLinear, _OutlineBlurLinear.OutlineBlurLinear, _RoundBlurLinear.RoundBlurLinear, _SharpBlurLinear.SharpBlurLinear, _TwoToneBlurLinear.TwoToneBlurLinear);
};

exports.BlurLinear = BlurLinear;