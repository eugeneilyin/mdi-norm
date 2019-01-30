"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNotes = require("./FilledNotes");

var _OutlineNotes = require("./OutlineNotes");

var _RoundNotes = require("./RoundNotes");

var _SharpNotes = require("./SharpNotes");

var _TwoToneNotes = require("./TwoToneNotes");

var Notes =
/*#__PURE__*/
function Notes(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNotes.FilledNotes, _OutlineNotes.OutlineNotes, _RoundNotes.RoundNotes, _SharpNotes.SharpNotes, _TwoToneNotes.TwoToneNotes);
};

exports.Notes = Notes;