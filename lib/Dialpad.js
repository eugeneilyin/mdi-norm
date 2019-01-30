"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDialpad = require("./FilledDialpad");

var _OutlineDialpad = require("./OutlineDialpad");

var _RoundDialpad = require("./RoundDialpad");

var _SharpDialpad = require("./SharpDialpad");

var _TwoToneDialpad = require("./TwoToneDialpad");

var Dialpad =
/*#__PURE__*/
function Dialpad(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDialpad.FilledDialpad, _OutlineDialpad.OutlineDialpad, _RoundDialpad.RoundDialpad, _SharpDialpad.SharpDialpad, _TwoToneDialpad.TwoToneDialpad);
};

exports.Dialpad = Dialpad;