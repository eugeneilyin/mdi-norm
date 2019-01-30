"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTimer = require("./FilledTimer");

var _OutlineTimer = require("./OutlineTimer");

var _RoundTimer = require("./RoundTimer");

var _SharpTimer = require("./SharpTimer");

var _TwoToneTimer = require("./TwoToneTimer");

var Timer =
/*#__PURE__*/
function Timer(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTimer.FilledTimer, _OutlineTimer.OutlineTimer, _RoundTimer.RoundTimer, _SharpTimer.SharpTimer, _TwoToneTimer.TwoToneTimer);
};

exports.Timer = Timer;