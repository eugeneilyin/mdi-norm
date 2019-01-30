"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPhotoAlbum = require("./FilledPhotoAlbum");

var _OutlinePhotoAlbum = require("./OutlinePhotoAlbum");

var _RoundPhotoAlbum = require("./RoundPhotoAlbum");

var _SharpPhotoAlbum = require("./SharpPhotoAlbum");

var _TwoTonePhotoAlbum = require("./TwoTonePhotoAlbum");

var PhotoAlbum =
/*#__PURE__*/
function PhotoAlbum(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPhotoAlbum.FilledPhotoAlbum, _OutlinePhotoAlbum.OutlinePhotoAlbum, _RoundPhotoAlbum.RoundPhotoAlbum, _SharpPhotoAlbum.SharpPhotoAlbum, _TwoTonePhotoAlbum.TwoTonePhotoAlbum);
};

exports.PhotoAlbum = PhotoAlbum;