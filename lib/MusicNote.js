"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMusicNote = require("./FilledMusicNote");

var _OutlineMusicNote = require("./OutlineMusicNote");

var _RoundMusicNote = require("./RoundMusicNote");

var _SharpMusicNote = require("./SharpMusicNote");

var _TwoToneMusicNote = require("./TwoToneMusicNote");

var MusicNote =
/*#__PURE__*/
function MusicNote(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMusicNote.FilledMusicNote, _OutlineMusicNote.OutlineMusicNote, _RoundMusicNote.RoundMusicNote, _SharpMusicNote.SharpMusicNote, _TwoToneMusicNote.TwoToneMusicNote);
};

exports.MusicNote = MusicNote;