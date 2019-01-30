"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCameraFront = require("./FilledCameraFront");

var _OutlineCameraFront = require("./OutlineCameraFront");

var _RoundCameraFront = require("./RoundCameraFront");

var _SharpCameraFront = require("./SharpCameraFront");

var _TwoToneCameraFront = require("./TwoToneCameraFront");

var CameraFront =
/*#__PURE__*/
function CameraFront(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCameraFront.FilledCameraFront, _OutlineCameraFront.OutlineCameraFront, _RoundCameraFront.RoundCameraFront, _SharpCameraFront.SharpCameraFront, _TwoToneCameraFront.TwoToneCameraFront);
};

exports.CameraFront = CameraFront;