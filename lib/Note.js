"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNote = require("./FilledNote");

var _OutlineNote = require("./OutlineNote");

var _RoundNote = require("./RoundNote");

var _SharpNote = require("./SharpNote");

var _TwoToneNote = require("./TwoToneNote");

var Note =
/*#__PURE__*/
function Note(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNote.FilledNote, _OutlineNote.OutlineNote, _RoundNote.RoundNote, _SharpNote.SharpNote, _TwoToneNote.TwoToneNote);
};

exports.Note = Note;