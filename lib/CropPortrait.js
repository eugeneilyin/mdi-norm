"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCropPortrait = require("./FilledCropPortrait");

var _OutlineCropPortrait = require("./OutlineCropPortrait");

var _RoundCropPortrait = require("./RoundCropPortrait");

var _SharpCropPortrait = require("./SharpCropPortrait");

var _TwoToneCropPortrait = require("./TwoToneCropPortrait");

var CropPortrait =
/*#__PURE__*/
function CropPortrait(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCropPortrait.FilledCropPortrait, _OutlineCropPortrait.OutlineCropPortrait, _RoundCropPortrait.RoundCropPortrait, _SharpCropPortrait.SharpCropPortrait, _TwoToneCropPortrait.TwoToneCropPortrait);
};

exports.CropPortrait = CropPortrait;