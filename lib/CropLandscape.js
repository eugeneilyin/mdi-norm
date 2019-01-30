"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCropLandscape = require("./FilledCropLandscape");

var _OutlineCropLandscape = require("./OutlineCropLandscape");

var _RoundCropLandscape = require("./RoundCropLandscape");

var _SharpCropLandscape = require("./SharpCropLandscape");

var _TwoToneCropLandscape = require("./TwoToneCropLandscape");

var CropLandscape =
/*#__PURE__*/
function CropLandscape(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCropLandscape.FilledCropLandscape, _OutlineCropLandscape.OutlineCropLandscape, _RoundCropLandscape.RoundCropLandscape, _SharpCropLandscape.SharpCropLandscape, _TwoToneCropLandscape.TwoToneCropLandscape);
};

exports.CropLandscape = CropLandscape;