"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSpeakerGroup = require("./FilledSpeakerGroup");

var _OutlineSpeakerGroup = require("./OutlineSpeakerGroup");

var _RoundSpeakerGroup = require("./RoundSpeakerGroup");

var _SharpSpeakerGroup = require("./SharpSpeakerGroup");

var _TwoToneSpeakerGroup = require("./TwoToneSpeakerGroup");

var SpeakerGroup =
/*#__PURE__*/
function SpeakerGroup(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSpeakerGroup.FilledSpeakerGroup, _OutlineSpeakerGroup.OutlineSpeakerGroup, _RoundSpeakerGroup.RoundSpeakerGroup, _SharpSpeakerGroup.SharpSpeakerGroup, _TwoToneSpeakerGroup.TwoToneSpeakerGroup);
};

exports.SpeakerGroup = SpeakerGroup;