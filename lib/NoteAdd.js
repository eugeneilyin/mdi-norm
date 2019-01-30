"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNoteAdd = require("./FilledNoteAdd");

var _OutlineNoteAdd = require("./OutlineNoteAdd");

var _RoundNoteAdd = require("./RoundNoteAdd");

var _SharpNoteAdd = require("./SharpNoteAdd");

var _TwoToneNoteAdd = require("./TwoToneNoteAdd");

var NoteAdd =
/*#__PURE__*/
function NoteAdd(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNoteAdd.FilledNoteAdd, _OutlineNoteAdd.OutlineNoteAdd, _RoundNoteAdd.RoundNoteAdd, _SharpNoteAdd.SharpNoteAdd, _TwoToneNoteAdd.TwoToneNoteAdd);
};

exports.NoteAdd = NoteAdd;