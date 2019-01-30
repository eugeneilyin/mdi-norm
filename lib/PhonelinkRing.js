"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPhonelinkRing = require("./FilledPhonelinkRing");

var _OutlinePhonelinkRing = require("./OutlinePhonelinkRing");

var _RoundPhonelinkRing = require("./RoundPhonelinkRing");

var _SharpPhonelinkRing = require("./SharpPhonelinkRing");

var _TwoTonePhonelinkRing = require("./TwoTonePhonelinkRing");

var PhonelinkRing =
/*#__PURE__*/
function PhonelinkRing(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPhonelinkRing.FilledPhonelinkRing, _OutlinePhonelinkRing.OutlinePhonelinkRing, _RoundPhonelinkRing.RoundPhonelinkRing, _SharpPhonelinkRing.SharpPhonelinkRing, _TwoTonePhonelinkRing.TwoTonePhonelinkRing);
};

exports.PhonelinkRing = PhonelinkRing;