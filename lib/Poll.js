"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPoll = require("./FilledPoll");

var _OutlinePoll = require("./OutlinePoll");

var _RoundPoll = require("./RoundPoll");

var _SharpPoll = require("./SharpPoll");

var _TwoTonePoll = require("./TwoTonePoll");

var Poll =
/*#__PURE__*/
function Poll(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPoll.FilledPoll, _OutlinePoll.OutlinePoll, _RoundPoll.RoundPoll, _SharpPoll.SharpPoll, _TwoTonePoll.TwoTonePoll);
};

exports.Poll = Poll;