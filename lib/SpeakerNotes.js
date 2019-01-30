"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSpeakerNotes = require("./FilledSpeakerNotes");

var _OutlineSpeakerNotes = require("./OutlineSpeakerNotes");

var _RoundSpeakerNotes = require("./RoundSpeakerNotes");

var _SharpSpeakerNotes = require("./SharpSpeakerNotes");

var _TwoToneSpeakerNotes = require("./TwoToneSpeakerNotes");

var SpeakerNotes =
/*#__PURE__*/
function SpeakerNotes(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSpeakerNotes.FilledSpeakerNotes, _OutlineSpeakerNotes.OutlineSpeakerNotes, _RoundSpeakerNotes.RoundSpeakerNotes, _SharpSpeakerNotes.SharpSpeakerNotes, _TwoToneSpeakerNotes.TwoToneSpeakerNotes);
};

exports.SpeakerNotes = SpeakerNotes;