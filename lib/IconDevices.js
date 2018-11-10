"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconDevicesFilled = require("./IconDevicesFilled");

var _IconDevicesOutlined = require("./IconDevicesOutlined");

var _IconDevicesRounded = require("./IconDevicesRounded");

var _IconDevicesSharp = require("./IconDevicesSharp");

var _IconDevicesTwoTone = require("./IconDevicesTwoTone");

var IconDevices =
/*#__PURE__*/
function IconDevices(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconDevicesFilled.IconDevicesFilled, _IconDevicesOutlined.IconDevicesOutlined, _IconDevicesRounded.IconDevicesRounded, _IconDevicesSharp.IconDevicesSharp, _IconDevicesTwoTone.IconDevicesTwoTone);
};

exports.IconDevices = IconDevices;