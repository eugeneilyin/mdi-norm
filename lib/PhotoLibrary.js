"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPhotoLibrary = require("./FilledPhotoLibrary");

var _OutlinePhotoLibrary = require("./OutlinePhotoLibrary");

var _RoundPhotoLibrary = require("./RoundPhotoLibrary");

var _SharpPhotoLibrary = require("./SharpPhotoLibrary");

var _TwoTonePhotoLibrary = require("./TwoTonePhotoLibrary");

var PhotoLibrary =
/*#__PURE__*/
function PhotoLibrary(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPhotoLibrary.FilledPhotoLibrary, _OutlinePhotoLibrary.OutlinePhotoLibrary, _RoundPhotoLibrary.RoundPhotoLibrary, _SharpPhotoLibrary.SharpPhotoLibrary, _TwoTonePhotoLibrary.TwoTonePhotoLibrary);
};

exports.PhotoLibrary = PhotoLibrary;