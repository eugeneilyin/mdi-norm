"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledKeyboardCapslock = require("./FilledKeyboardCapslock");

var _OutlineKeyboardCapslock = require("./OutlineKeyboardCapslock");

var _RoundKeyboardCapslock = require("./RoundKeyboardCapslock");

var _SharpKeyboardCapslock = require("./SharpKeyboardCapslock");

var _TwoToneKeyboardCapslock = require("./TwoToneKeyboardCapslock");

var KeyboardCapslock =
/*#__PURE__*/
function KeyboardCapslock(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledKeyboardCapslock.FilledKeyboardCapslock, _OutlineKeyboardCapslock.OutlineKeyboardCapslock, _RoundKeyboardCapslock.RoundKeyboardCapslock, _SharpKeyboardCapslock.SharpKeyboardCapslock, _TwoToneKeyboardCapslock.TwoToneKeyboardCapslock);
};

exports.KeyboardCapslock = KeyboardCapslock;