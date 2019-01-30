"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCameraRear = require("./FilledCameraRear");

var _OutlineCameraRear = require("./OutlineCameraRear");

var _RoundCameraRear = require("./RoundCameraRear");

var _SharpCameraRear = require("./SharpCameraRear");

var _TwoToneCameraRear = require("./TwoToneCameraRear");

var CameraRear =
/*#__PURE__*/
function CameraRear(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCameraRear.FilledCameraRear, _OutlineCameraRear.OutlineCameraRear, _RoundCameraRear.RoundCameraRear, _SharpCameraRear.SharpCameraRear, _TwoToneCameraRear.TwoToneCameraRear);
};

exports.CameraRear = CameraRear;