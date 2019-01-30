"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPhoto = require("./FilledPhoto");

var _OutlinePhoto = require("./OutlinePhoto");

var _RoundPhoto = require("./RoundPhoto");

var _SharpPhoto = require("./SharpPhoto");

var _TwoTonePhoto = require("./TwoTonePhoto");

var Photo =
/*#__PURE__*/
function Photo(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPhoto.FilledPhoto, _OutlinePhoto.OutlinePhoto, _RoundPhoto.RoundPhoto, _SharpPhoto.SharpPhoto, _TwoTonePhoto.TwoTonePhoto);
};

exports.Photo = Photo;