"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRoom = require("./FilledRoom");

var _OutlineRoom = require("./OutlineRoom");

var _RoundRoom = require("./RoundRoom");

var _SharpRoom = require("./SharpRoom");

var _TwoToneRoom = require("./TwoToneRoom");

var Room =
/*#__PURE__*/
function Room(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRoom.FilledRoom, _OutlineRoom.OutlineRoom, _RoundRoom.RoundRoom, _SharpRoom.SharpRoom, _TwoToneRoom.TwoToneRoom);
};

exports.Room = Room;