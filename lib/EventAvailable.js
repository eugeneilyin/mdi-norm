"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEventAvailable = require("./FilledEventAvailable");

var _OutlineEventAvailable = require("./OutlineEventAvailable");

var _RoundEventAvailable = require("./RoundEventAvailable");

var _SharpEventAvailable = require("./SharpEventAvailable");

var _TwoToneEventAvailable = require("./TwoToneEventAvailable");

var EventAvailable =
/*#__PURE__*/
function EventAvailable(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEventAvailable.FilledEventAvailable, _OutlineEventAvailable.OutlineEventAvailable, _RoundEventAvailable.RoundEventAvailable, _SharpEventAvailable.SharpEventAvailable, _TwoToneEventAvailable.TwoToneEventAvailable);
};

exports.EventAvailable = EventAvailable;