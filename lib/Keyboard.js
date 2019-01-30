"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledKeyboard = require("./FilledKeyboard");

var _OutlineKeyboard = require("./OutlineKeyboard");

var _RoundKeyboard = require("./RoundKeyboard");

var _SharpKeyboard = require("./SharpKeyboard");

var _TwoToneKeyboard = require("./TwoToneKeyboard");

var Keyboard =
/*#__PURE__*/
function Keyboard(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledKeyboard.FilledKeyboard, _OutlineKeyboard.OutlineKeyboard, _RoundKeyboard.RoundKeyboard, _SharpKeyboard.SharpKeyboard, _TwoToneKeyboard.TwoToneKeyboard);
};

exports.Keyboard = Keyboard;