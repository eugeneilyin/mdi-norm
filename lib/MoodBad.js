"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMoodBad = require("./FilledMoodBad");

var _OutlineMoodBad = require("./OutlineMoodBad");

var _RoundMoodBad = require("./RoundMoodBad");

var _SharpMoodBad = require("./SharpMoodBad");

var _TwoToneMoodBad = require("./TwoToneMoodBad");

var MoodBad =
/*#__PURE__*/
function MoodBad(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMoodBad.FilledMoodBad, _OutlineMoodBad.OutlineMoodBad, _RoundMoodBad.RoundMoodBad, _SharpMoodBad.SharpMoodBad, _TwoToneMoodBad.TwoToneMoodBad);
};

exports.MoodBad = MoodBad;