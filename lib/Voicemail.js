"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVoicemail = require("./FilledVoicemail");

var _OutlineVoicemail = require("./OutlineVoicemail");

var _RoundVoicemail = require("./RoundVoicemail");

var _SharpVoicemail = require("./SharpVoicemail");

var _TwoToneVoicemail = require("./TwoToneVoicemail");

var Voicemail =
/*#__PURE__*/
function Voicemail(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVoicemail.FilledVoicemail, _OutlineVoicemail.OutlineVoicemail, _RoundVoicemail.RoundVoicemail, _SharpVoicemail.SharpVoicemail, _TwoToneVoicemail.TwoToneVoicemail);
};

exports.Voicemail = Voicemail;