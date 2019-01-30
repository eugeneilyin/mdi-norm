"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAudiotrack = require("./FilledAudiotrack");

var _OutlineAudiotrack = require("./OutlineAudiotrack");

var _RoundAudiotrack = require("./RoundAudiotrack");

var _SharpAudiotrack = require("./SharpAudiotrack");

var _TwoToneAudiotrack = require("./TwoToneAudiotrack");

var Audiotrack =
/*#__PURE__*/
function Audiotrack(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAudiotrack.FilledAudiotrack, _OutlineAudiotrack.OutlineAudiotrack, _RoundAudiotrack.RoundAudiotrack, _SharpAudiotrack.SharpAudiotrack, _TwoToneAudiotrack.TwoToneAudiotrack);
};

exports.Audiotrack = Audiotrack;