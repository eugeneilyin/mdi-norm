"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMood = require("./FilledMood");

var _OutlineMood = require("./OutlineMood");

var _RoundMood = require("./RoundMood");

var _SharpMood = require("./SharpMood");

var _TwoToneMood = require("./TwoToneMood");

var Mood =
/*#__PURE__*/
function Mood(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMood.FilledMood, _OutlineMood.OutlineMood, _RoundMood.RoundMood, _SharpMood.SharpMood, _TwoToneMood.TwoToneMood);
};

exports.Mood = Mood;