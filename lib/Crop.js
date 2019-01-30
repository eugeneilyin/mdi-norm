"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCrop = require("./FilledCrop");

var _OutlineCrop = require("./OutlineCrop");

var _RoundCrop = require("./RoundCrop");

var _SharpCrop = require("./SharpCrop");

var _TwoToneCrop = require("./TwoToneCrop");

var Crop =
/*#__PURE__*/
function Crop(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCrop.FilledCrop, _OutlineCrop.OutlineCrop, _RoundCrop.RoundCrop, _SharpCrop.SharpCrop, _TwoToneCrop.TwoToneCrop);
};

exports.Crop = Crop;