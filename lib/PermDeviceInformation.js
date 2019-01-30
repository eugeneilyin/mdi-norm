"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPermDeviceInformation = require("./FilledPermDeviceInformation");

var _OutlinePermDeviceInformation = require("./OutlinePermDeviceInformation");

var _RoundPermDeviceInformation = require("./RoundPermDeviceInformation");

var _SharpPermDeviceInformation = require("./SharpPermDeviceInformation");

var _TwoTonePermDeviceInformation = require("./TwoTonePermDeviceInformation");

var PermDeviceInformation =
/*#__PURE__*/
function PermDeviceInformation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPermDeviceInformation.FilledPermDeviceInformation, _OutlinePermDeviceInformation.OutlinePermDeviceInformation, _RoundPermDeviceInformation.RoundPermDeviceInformation, _SharpPermDeviceInformation.SharpPermDeviceInformation, _TwoTonePermDeviceInformation.TwoTonePermDeviceInformation);
};

exports.PermDeviceInformation = PermDeviceInformation;