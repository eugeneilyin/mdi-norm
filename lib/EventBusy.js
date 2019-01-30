"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEventBusy = require("./FilledEventBusy");

var _OutlineEventBusy = require("./OutlineEventBusy");

var _RoundEventBusy = require("./RoundEventBusy");

var _SharpEventBusy = require("./SharpEventBusy");

var _TwoToneEventBusy = require("./TwoToneEventBusy");

var EventBusy =
/*#__PURE__*/
function EventBusy(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEventBusy.FilledEventBusy, _OutlineEventBusy.OutlineEventBusy, _RoundEventBusy.RoundEventBusy, _SharpEventBusy.SharpEventBusy, _TwoToneEventBusy.TwoToneEventBusy);
};

exports.EventBusy = EventBusy;