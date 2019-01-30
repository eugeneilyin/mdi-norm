"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHearing = require("./FilledHearing");

var _OutlineHearing = require("./OutlineHearing");

var _RoundHearing = require("./RoundHearing");

var _SharpHearing = require("./SharpHearing");

var _TwoToneHearing = require("./TwoToneHearing");

var Hearing =
/*#__PURE__*/
function Hearing(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHearing.FilledHearing, _OutlineHearing.OutlineHearing, _RoundHearing.RoundHearing, _SharpHearing.SharpHearing, _TwoToneHearing.TwoToneHearing);
};

exports.Hearing = Hearing;