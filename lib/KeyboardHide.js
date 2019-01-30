"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledKeyboardHide = require("./FilledKeyboardHide");

var _OutlineKeyboardHide = require("./OutlineKeyboardHide");

var _RoundKeyboardHide = require("./RoundKeyboardHide");

var _SharpKeyboardHide = require("./SharpKeyboardHide");

var _TwoToneKeyboardHide = require("./TwoToneKeyboardHide");

var KeyboardHide =
/*#__PURE__*/
function KeyboardHide(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledKeyboardHide.FilledKeyboardHide, _OutlineKeyboardHide.OutlineKeyboardHide, _RoundKeyboardHide.RoundKeyboardHide, _SharpKeyboardHide.SharpKeyboardHide, _TwoToneKeyboardHide.TwoToneKeyboardHide);
};

exports.KeyboardHide = KeyboardHide;