"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEventNote = require("./FilledEventNote");

var _OutlineEventNote = require("./OutlineEventNote");

var _RoundEventNote = require("./RoundEventNote");

var _SharpEventNote = require("./SharpEventNote");

var _TwoToneEventNote = require("./TwoToneEventNote");

var EventNote =
/*#__PURE__*/
function EventNote(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEventNote.FilledEventNote, _OutlineEventNote.OutlineEventNote, _RoundEventNote.RoundEventNote, _SharpEventNote.SharpEventNote, _TwoToneEventNote.TwoToneEventNote);
};

exports.EventNote = EventNote;