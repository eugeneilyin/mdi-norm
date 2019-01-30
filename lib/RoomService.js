"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRoomService = require("./FilledRoomService");

var _OutlineRoomService = require("./OutlineRoomService");

var _RoundRoomService = require("./RoundRoomService");

var _SharpRoomService = require("./SharpRoomService");

var _TwoToneRoomService = require("./TwoToneRoomService");

var RoomService =
/*#__PURE__*/
function RoomService(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRoomService.FilledRoomService, _OutlineRoomService.OutlineRoomService, _RoundRoomService.RoundRoomService, _SharpRoomService.SharpRoomService, _TwoToneRoomService.TwoToneRoomService);
};

exports.RoomService = RoomService;