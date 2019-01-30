"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledQueueMusic = require("./FilledQueueMusic");

var _OutlineQueueMusic = require("./OutlineQueueMusic");

var _RoundQueueMusic = require("./RoundQueueMusic");

var _SharpQueueMusic = require("./SharpQueueMusic");

var _TwoToneQueueMusic = require("./TwoToneQueueMusic");

var QueueMusic =
/*#__PURE__*/
function QueueMusic(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledQueueMusic.FilledQueueMusic, _OutlineQueueMusic.OutlineQueueMusic, _RoundQueueMusic.RoundQueueMusic, _SharpQueueMusic.SharpQueueMusic, _TwoToneQueueMusic.TwoToneQueueMusic);
};

exports.QueueMusic = QueueMusic;