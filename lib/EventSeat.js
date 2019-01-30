"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEventSeat = require("./FilledEventSeat");

var _OutlineEventSeat = require("./OutlineEventSeat");

var _RoundEventSeat = require("./RoundEventSeat");

var _SharpEventSeat = require("./SharpEventSeat");

var _TwoToneEventSeat = require("./TwoToneEventSeat");

var EventSeat =
/*#__PURE__*/
function EventSeat(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEventSeat.FilledEventSeat, _OutlineEventSeat.OutlineEventSeat, _RoundEventSeat.RoundEventSeat, _SharpEventSeat.SharpEventSeat, _TwoToneEventSeat.TwoToneEventSeat);
};

exports.EventSeat = EventSeat;