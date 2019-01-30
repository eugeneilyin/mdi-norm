"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledChat = require("./FilledChat");

var _OutlineChat = require("./OutlineChat");

var _RoundChat = require("./RoundChat");

var _SharpChat = require("./SharpChat");

var _TwoToneChat = require("./TwoToneChat");

var Chat =
/*#__PURE__*/
function Chat(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledChat.FilledChat, _OutlineChat.OutlineChat, _RoundChat.RoundChat, _SharpChat.SharpChat, _TwoToneChat.TwoToneChat);
};

exports.Chat = Chat;