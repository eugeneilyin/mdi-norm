"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSwitchVideo = require("./FilledSwitchVideo");

var _OutlineSwitchVideo = require("./OutlineSwitchVideo");

var _RoundSwitchVideo = require("./RoundSwitchVideo");

var _SharpSwitchVideo = require("./SharpSwitchVideo");

var _TwoToneSwitchVideo = require("./TwoToneSwitchVideo");

var SwitchVideo =
/*#__PURE__*/
function SwitchVideo(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSwitchVideo.FilledSwitchVideo, _OutlineSwitchVideo.OutlineSwitchVideo, _RoundSwitchVideo.RoundSwitchVideo, _SharpSwitchVideo.SharpSwitchVideo, _TwoToneSwitchVideo.TwoToneSwitchVideo);
};

exports.SwitchVideo = SwitchVideo;