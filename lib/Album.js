"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAlbum = require("./FilledAlbum");

var _OutlineAlbum = require("./OutlineAlbum");

var _RoundAlbum = require("./RoundAlbum");

var _SharpAlbum = require("./SharpAlbum");

var _TwoToneAlbum = require("./TwoToneAlbum");

var Album =
/*#__PURE__*/
function Album(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAlbum.FilledAlbum, _OutlineAlbum.OutlineAlbum, _RoundAlbum.RoundAlbum, _SharpAlbum.SharpAlbum, _TwoToneAlbum.TwoToneAlbum);
};

exports.Album = Album;