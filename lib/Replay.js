"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledReplay = require("./FilledReplay");

var _OutlineReplay = require("./OutlineReplay");

var _RoundReplay = require("./RoundReplay");

var _SharpReplay = require("./SharpReplay");

var _TwoToneReplay = require("./TwoToneReplay");

var Replay =
/*#__PURE__*/
function Replay(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledReplay.FilledReplay, _OutlineReplay.OutlineReplay, _RoundReplay.RoundReplay, _SharpReplay.SharpReplay, _TwoToneReplay.TwoToneReplay);
};

exports.Replay = Replay;