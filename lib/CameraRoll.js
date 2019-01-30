"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCameraRoll = require("./FilledCameraRoll");

var _OutlineCameraRoll = require("./OutlineCameraRoll");

var _RoundCameraRoll = require("./RoundCameraRoll");

var _SharpCameraRoll = require("./SharpCameraRoll");

var _TwoToneCameraRoll = require("./TwoToneCameraRoll");

var CameraRoll =
/*#__PURE__*/
function CameraRoll(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCameraRoll.FilledCameraRoll, _OutlineCameraRoll.OutlineCameraRoll, _RoundCameraRoll.RoundCameraRoll, _SharpCameraRoll.SharpCameraRoll, _TwoToneCameraRoll.TwoToneCameraRoll);
};

exports.CameraRoll = CameraRoll;