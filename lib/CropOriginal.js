"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCropOriginal = require("./FilledCropOriginal");

var _OutlineCropOriginal = require("./OutlineCropOriginal");

var _RoundCropOriginal = require("./RoundCropOriginal");

var _SharpCropOriginal = require("./SharpCropOriginal");

var _TwoToneCropOriginal = require("./TwoToneCropOriginal");

var CropOriginal =
/*#__PURE__*/
function CropOriginal(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCropOriginal.FilledCropOriginal, _OutlineCropOriginal.OutlineCropOriginal, _RoundCropOriginal.RoundCropOriginal, _SharpCropOriginal.SharpCropOriginal, _TwoToneCropOriginal.TwoToneCropOriginal);
};

exports.CropOriginal = CropOriginal;