"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCropSquare = require("./FilledCropSquare");

var _OutlineCropSquare = require("./OutlineCropSquare");

var _RoundCropSquare = require("./RoundCropSquare");

var _SharpCropSquare = require("./SharpCropSquare");

var _TwoToneCropSquare = require("./TwoToneCropSquare");

var CropSquare =
/*#__PURE__*/
function CropSquare(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCropSquare.FilledCropSquare, _OutlineCropSquare.OutlineCropSquare, _RoundCropSquare.RoundCropSquare, _SharpCropSquare.SharpCropSquare, _TwoToneCropSquare.TwoToneCropSquare);
};

exports.CropSquare = CropSquare;