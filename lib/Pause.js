"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPause = require("./FilledPause");

var _OutlinePause = require("./OutlinePause");

var _RoundPause = require("./RoundPause");

var _SharpPause = require("./SharpPause");

var _TwoTonePause = require("./TwoTonePause");

var Pause =
/*#__PURE__*/
function Pause(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPause.FilledPause, _OutlinePause.OutlinePause, _RoundPause.RoundPause, _SharpPause.SharpPause, _TwoTonePause.TwoTonePause);
};

exports.Pause = Pause;