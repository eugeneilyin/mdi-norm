"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWifiLock = require("./FilledWifiLock");

var _OutlineWifiLock = require("./OutlineWifiLock");

var _RoundWifiLock = require("./RoundWifiLock");

var _SharpWifiLock = require("./SharpWifiLock");

var _TwoToneWifiLock = require("./TwoToneWifiLock");

var WifiLock =
/*#__PURE__*/
function WifiLock(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWifiLock.FilledWifiLock, _OutlineWifiLock.OutlineWifiLock, _RoundWifiLock.RoundWifiLock, _SharpWifiLock.SharpWifiLock, _TwoToneWifiLock.TwoToneWifiLock);
};

exports.WifiLock = WifiLock;