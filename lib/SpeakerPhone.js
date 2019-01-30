"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSpeakerPhone = require("./FilledSpeakerPhone");

var _OutlineSpeakerPhone = require("./OutlineSpeakerPhone");

var _RoundSpeakerPhone = require("./RoundSpeakerPhone");

var _SharpSpeakerPhone = require("./SharpSpeakerPhone");

var _TwoToneSpeakerPhone = require("./TwoToneSpeakerPhone");

var SpeakerPhone =
/*#__PURE__*/
function SpeakerPhone(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSpeakerPhone.FilledSpeakerPhone, _OutlineSpeakerPhone.OutlineSpeakerPhone, _RoundSpeakerPhone.RoundSpeakerPhone, _SharpSpeakerPhone.SharpSpeakerPhone, _TwoToneSpeakerPhone.TwoToneSpeakerPhone);
};

exports.SpeakerPhone = SpeakerPhone;