"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledKeyboardBackspace = require("./FilledKeyboardBackspace");

var _OutlineKeyboardBackspace = require("./OutlineKeyboardBackspace");

var _RoundKeyboardBackspace = require("./RoundKeyboardBackspace");

var _SharpKeyboardBackspace = require("./SharpKeyboardBackspace");

var _TwoToneKeyboardBackspace = require("./TwoToneKeyboardBackspace");

var KeyboardBackspace =
/*#__PURE__*/
function KeyboardBackspace(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledKeyboardBackspace.FilledKeyboardBackspace, _OutlineKeyboardBackspace.OutlineKeyboardBackspace, _RoundKeyboardBackspace.RoundKeyboardBackspace, _SharpKeyboardBackspace.SharpKeyboardBackspace, _TwoToneKeyboardBackspace.TwoToneKeyboardBackspace);
};

exports.KeyboardBackspace = KeyboardBackspace;