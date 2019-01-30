"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDeviceHub = require("./FilledDeviceHub");

var _OutlineDeviceHub = require("./OutlineDeviceHub");

var _RoundDeviceHub = require("./RoundDeviceHub");

var _SharpDeviceHub = require("./SharpDeviceHub");

var _TwoToneDeviceHub = require("./TwoToneDeviceHub");

var DeviceHub =
/*#__PURE__*/
function DeviceHub(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDeviceHub.FilledDeviceHub, _OutlineDeviceHub.OutlineDeviceHub, _RoundDeviceHub.RoundDeviceHub, _SharpDeviceHub.SharpDeviceHub, _TwoToneDeviceHub.TwoToneDeviceHub);
};

exports.DeviceHub = DeviceHub;