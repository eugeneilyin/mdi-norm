"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHeadset = require("./FilledHeadset");

var _OutlineHeadset = require("./OutlineHeadset");

var _RoundHeadset = require("./RoundHeadset");

var _SharpHeadset = require("./SharpHeadset");

var _TwoToneHeadset = require("./TwoToneHeadset");

var Headset =
/*#__PURE__*/
function Headset(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHeadset.FilledHeadset, _OutlineHeadset.OutlineHeadset, _RoundHeadset.RoundHeadset, _SharpHeadset.SharpHeadset, _TwoToneHeadset.TwoToneHeadset);
};

exports.Headset = Headset;