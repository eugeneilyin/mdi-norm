"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVoiceChat = require("./FilledVoiceChat");

var _OutlineVoiceChat = require("./OutlineVoiceChat");

var _RoundVoiceChat = require("./RoundVoiceChat");

var _SharpVoiceChat = require("./SharpVoiceChat");

var _TwoToneVoiceChat = require("./TwoToneVoiceChat");

var VoiceChat =
/*#__PURE__*/
function VoiceChat(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVoiceChat.FilledVoiceChat, _OutlineVoiceChat.OutlineVoiceChat, _RoundVoiceChat.RoundVoiceChat, _SharpVoiceChat.SharpVoiceChat, _TwoToneVoiceChat.TwoToneVoiceChat);
};

exports.VoiceChat = VoiceChat;