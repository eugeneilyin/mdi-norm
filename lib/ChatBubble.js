"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledChatBubble = require("./FilledChatBubble");

var _OutlineChatBubble = require("./OutlineChatBubble");

var _RoundChatBubble = require("./RoundChatBubble");

var _SharpChatBubble = require("./SharpChatBubble");

var _TwoToneChatBubble = require("./TwoToneChatBubble");

var ChatBubble =
/*#__PURE__*/
function ChatBubble(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledChatBubble.FilledChatBubble, _OutlineChatBubble.OutlineChatBubble, _RoundChatBubble.RoundChatBubble, _SharpChatBubble.SharpChatBubble, _TwoToneChatBubble.TwoToneChatBubble);
};

exports.ChatBubble = ChatBubble;