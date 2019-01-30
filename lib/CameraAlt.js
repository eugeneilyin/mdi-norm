"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCameraAlt = require("./FilledCameraAlt");

var _OutlineCameraAlt = require("./OutlineCameraAlt");

var _RoundCameraAlt = require("./RoundCameraAlt");

var _SharpCameraAlt = require("./SharpCameraAlt");

var _TwoToneCameraAlt = require("./TwoToneCameraAlt");

var CameraAlt =
/*#__PURE__*/
function CameraAlt(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCameraAlt.FilledCameraAlt, _OutlineCameraAlt.OutlineCameraAlt, _RoundCameraAlt.RoundCameraAlt, _SharpCameraAlt.SharpCameraAlt, _TwoToneCameraAlt.TwoToneCameraAlt);
};

exports.CameraAlt = CameraAlt;