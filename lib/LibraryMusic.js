"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLibraryMusic = require("./FilledLibraryMusic");

var _OutlineLibraryMusic = require("./OutlineLibraryMusic");

var _RoundLibraryMusic = require("./RoundLibraryMusic");

var _SharpLibraryMusic = require("./SharpLibraryMusic");

var _TwoToneLibraryMusic = require("./TwoToneLibraryMusic");

var LibraryMusic =
/*#__PURE__*/
function LibraryMusic(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLibraryMusic.FilledLibraryMusic, _OutlineLibraryMusic.OutlineLibraryMusic, _RoundLibraryMusic.RoundLibraryMusic, _SharpLibraryMusic.SharpLibraryMusic, _TwoToneLibraryMusic.TwoToneLibraryMusic);
};

exports.LibraryMusic = LibraryMusic;