"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledKeyboardVoice = require("./FilledKeyboardVoice");

var _OutlineKeyboardVoice = require("./OutlineKeyboardVoice");

var _RoundKeyboardVoice = require("./RoundKeyboardVoice");

var _SharpKeyboardVoice = require("./SharpKeyboardVoice");

var _TwoToneKeyboardVoice = require("./TwoToneKeyboardVoice");

var KeyboardVoice =
/*#__PURE__*/
function KeyboardVoice(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledKeyboardVoice.FilledKeyboardVoice, _OutlineKeyboardVoice.OutlineKeyboardVoice, _RoundKeyboardVoice.RoundKeyboardVoice, _SharpKeyboardVoice.SharpKeyboardVoice, _TwoToneKeyboardVoice.TwoToneKeyboardVoice);
};

exports.KeyboardVoice = KeyboardVoice;