"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledKeyboardTab = require("./FilledKeyboardTab");

var _OutlineKeyboardTab = require("./OutlineKeyboardTab");

var _RoundKeyboardTab = require("./RoundKeyboardTab");

var _SharpKeyboardTab = require("./SharpKeyboardTab");

var _TwoToneKeyboardTab = require("./TwoToneKeyboardTab");

var KeyboardTab =
/*#__PURE__*/
function KeyboardTab(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledKeyboardTab.FilledKeyboardTab, _OutlineKeyboardTab.OutlineKeyboardTab, _RoundKeyboardTab.RoundKeyboardTab, _SharpKeyboardTab.SharpKeyboardTab, _TwoToneKeyboardTab.TwoToneKeyboardTab);
};

exports.KeyboardTab = KeyboardTab;