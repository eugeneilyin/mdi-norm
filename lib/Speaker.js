"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSpeaker = require("./FilledSpeaker");

var _OutlineSpeaker = require("./OutlineSpeaker");

var _RoundSpeaker = require("./RoundSpeaker");

var _SharpSpeaker = require("./SharpSpeaker");

var _TwoToneSpeaker = require("./TwoToneSpeaker");

var Speaker =
/*#__PURE__*/
function Speaker(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSpeaker.FilledSpeaker, _OutlineSpeaker.OutlineSpeaker, _RoundSpeaker.RoundSpeaker, _SharpSpeaker.SharpSpeaker, _TwoToneSpeaker.TwoToneSpeaker);
};

exports.Speaker = Speaker;