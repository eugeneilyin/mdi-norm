"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSurroundSound = require("./FilledSurroundSound");

var _OutlineSurroundSound = require("./OutlineSurroundSound");

var _RoundSurroundSound = require("./RoundSurroundSound");

var _SharpSurroundSound = require("./SharpSurroundSound");

var _TwoToneSurroundSound = require("./TwoToneSurroundSound");

var SurroundSound =
/*#__PURE__*/
function SurroundSound(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSurroundSound.FilledSurroundSound, _OutlineSurroundSound.OutlineSurroundSound, _RoundSurroundSound.RoundSurroundSound, _SharpSurroundSound.SharpSurroundSound, _TwoToneSurroundSound.TwoToneSurroundSound);
};

exports.SurroundSound = SurroundSound;