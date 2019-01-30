"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMessage = require("./FilledMessage");

var _OutlineMessage = require("./OutlineMessage");

var _RoundMessage = require("./RoundMessage");

var _SharpMessage = require("./SharpMessage");

var _TwoToneMessage = require("./TwoToneMessage");

var Message =
/*#__PURE__*/
function Message(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMessage.FilledMessage, _OutlineMessage.OutlineMessage, _RoundMessage.RoundMessage, _SharpMessage.SharpMessage, _TwoToneMessage.TwoToneMessage);
};

exports.Message = Message;