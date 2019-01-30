"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPictureAsPdf = require("./FilledPictureAsPdf");

var _OutlinePictureAsPdf = require("./OutlinePictureAsPdf");

var _RoundPictureAsPdf = require("./RoundPictureAsPdf");

var _SharpPictureAsPdf = require("./SharpPictureAsPdf");

var _TwoTonePictureAsPdf = require("./TwoTonePictureAsPdf");

var PictureAsPdf =
/*#__PURE__*/
function PictureAsPdf(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPictureAsPdf.FilledPictureAsPdf, _OutlinePictureAsPdf.OutlinePictureAsPdf, _RoundPictureAsPdf.RoundPictureAsPdf, _SharpPictureAsPdf.SharpPictureAsPdf, _TwoTonePictureAsPdf.TwoTonePictureAsPdf);
};

exports.PictureAsPdf = PictureAsPdf;