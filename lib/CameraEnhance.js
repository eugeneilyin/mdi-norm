"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCameraEnhance = require("./FilledCameraEnhance");

var _OutlineCameraEnhance = require("./OutlineCameraEnhance");

var _RoundCameraEnhance = require("./RoundCameraEnhance");

var _SharpCameraEnhance = require("./SharpCameraEnhance");

var _TwoToneCameraEnhance = require("./TwoToneCameraEnhance");

var CameraEnhance =
/*#__PURE__*/
function CameraEnhance(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCameraEnhance.FilledCameraEnhance, _OutlineCameraEnhance.OutlineCameraEnhance, _RoundCameraEnhance.RoundCameraEnhance, _SharpCameraEnhance.SharpCameraEnhance, _TwoToneCameraEnhance.TwoToneCameraEnhance);
};

exports.CameraEnhance = CameraEnhance;