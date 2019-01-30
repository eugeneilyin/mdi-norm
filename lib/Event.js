"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEvent = require("./FilledEvent");

var _OutlineEvent = require("./OutlineEvent");

var _RoundEvent = require("./RoundEvent");

var _SharpEvent = require("./SharpEvent");

var _TwoToneEvent = require("./TwoToneEvent");

var Event =
/*#__PURE__*/
function Event(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEvent.FilledEvent, _OutlineEvent.OutlineEvent, _RoundEvent.RoundEvent, _SharpEvent.SharpEvent, _TwoToneEvent.TwoToneEvent);
};

exports.Event = Event;