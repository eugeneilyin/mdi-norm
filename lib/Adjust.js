"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAdjust = require("./FilledAdjust");

var _OutlineAdjust = require("./OutlineAdjust");

var _RoundAdjust = require("./RoundAdjust");

var _SharpAdjust = require("./SharpAdjust");

var _TwoToneAdjust = require("./TwoToneAdjust");

var Adjust =
/*#__PURE__*/
function Adjust(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAdjust.FilledAdjust, _OutlineAdjust.OutlineAdjust, _RoundAdjust.RoundAdjust, _SharpAdjust.SharpAdjust, _TwoToneAdjust.TwoToneAdjust);
};

exports.Adjust = Adjust;