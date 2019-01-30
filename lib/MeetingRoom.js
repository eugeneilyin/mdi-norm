"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMeetingRoom = require("./FilledMeetingRoom");

var _OutlineMeetingRoom = require("./OutlineMeetingRoom");

var _RoundMeetingRoom = require("./RoundMeetingRoom");

var _SharpMeetingRoom = require("./SharpMeetingRoom");

var _TwoToneMeetingRoom = require("./TwoToneMeetingRoom");

var MeetingRoom =
/*#__PURE__*/
function MeetingRoom(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMeetingRoom.FilledMeetingRoom, _OutlineMeetingRoom.OutlineMeetingRoom, _RoundMeetingRoom.RoundMeetingRoom, _SharpMeetingRoom.SharpMeetingRoom, _TwoToneMeetingRoom.TwoToneMeetingRoom);
};

exports.MeetingRoom = MeetingRoom;