"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalPlay = require("./FilledLocalPlay");

var _OutlineLocalPlay = require("./OutlineLocalPlay");

var _RoundLocalPlay = require("./RoundLocalPlay");

var _SharpLocalPlay = require("./SharpLocalPlay");

var _TwoToneLocalPlay = require("./TwoToneLocalPlay");

var LocalPlay =
/*#__PURE__*/
function LocalPlay(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalPlay.FilledLocalPlay, _OutlineLocalPlay.OutlineLocalPlay, _RoundLocalPlay.RoundLocalPlay, _SharpLocalPlay.SharpLocalPlay, _TwoToneLocalPlay.TwoToneLocalPlay);
};

exports.LocalPlay = LocalPlay;