"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGamepad = require("./FilledGamepad");

var _OutlineGamepad = require("./OutlineGamepad");

var _RoundGamepad = require("./RoundGamepad");

var _SharpGamepad = require("./SharpGamepad");

var _TwoToneGamepad = require("./TwoToneGamepad");

var Gamepad =
/*#__PURE__*/
function Gamepad(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGamepad.FilledGamepad, _OutlineGamepad.OutlineGamepad, _RoundGamepad.RoundGamepad, _SharpGamepad.SharpGamepad, _TwoToneGamepad.TwoToneGamepad);
};

exports.Gamepad = Gamepad;