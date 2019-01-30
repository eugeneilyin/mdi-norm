"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCropRotate = require("./FilledCropRotate");

var _OutlineCropRotate = require("./OutlineCropRotate");

var _RoundCropRotate = require("./RoundCropRotate");

var _SharpCropRotate = require("./SharpCropRotate");

var _TwoToneCropRotate = require("./TwoToneCropRotate");

var CropRotate =
/*#__PURE__*/
function CropRotate(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCropRotate.FilledCropRotate, _OutlineCropRotate.OutlineCropRotate, _RoundCropRotate.RoundCropRotate, _SharpCropRotate.SharpCropRotate, _TwoToneCropRotate.TwoToneCropRotate);
};

exports.CropRotate = CropRotate;