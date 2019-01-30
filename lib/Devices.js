"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDevices = require("./FilledDevices");

var _OutlineDevices = require("./OutlineDevices");

var _RoundDevices = require("./RoundDevices");

var _SharpDevices = require("./SharpDevices");

var _TwoToneDevices = require("./TwoToneDevices");

var Devices =
/*#__PURE__*/
function Devices(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDevices.FilledDevices, _OutlineDevices.OutlineDevices, _RoundDevices.RoundDevices, _SharpDevices.SharpDevices, _TwoToneDevices.TwoToneDevices);
};

exports.Devices = Devices;