"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHotTub = require("./FilledHotTub");

var _OutlineHotTub = require("./OutlineHotTub");

var _RoundHotTub = require("./RoundHotTub");

var _SharpHotTub = require("./SharpHotTub");

var _TwoToneHotTub = require("./TwoToneHotTub");

var HotTub =
/*#__PURE__*/
function HotTub(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHotTub.FilledHotTub, _OutlineHotTub.OutlineHotTub, _RoundHotTub.RoundHotTub, _SharpHotTub.SharpHotTub, _TwoToneHotTub.TwoToneHotTub);
};

exports.HotTub = HotTub;