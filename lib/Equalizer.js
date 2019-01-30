"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEqualizer = require("./FilledEqualizer");

var _OutlineEqualizer = require("./OutlineEqualizer");

var _RoundEqualizer = require("./RoundEqualizer");

var _SharpEqualizer = require("./SharpEqualizer");

var _TwoToneEqualizer = require("./TwoToneEqualizer");

var Equalizer =
/*#__PURE__*/
function Equalizer(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEqualizer.FilledEqualizer, _OutlineEqualizer.OutlineEqualizer, _RoundEqualizer.RoundEqualizer, _SharpEqualizer.SharpEqualizer, _TwoToneEqualizer.TwoToneEqualizer);
};

exports.Equalizer = Equalizer;