"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWifiTethering = require("./FilledWifiTethering");

var _OutlineWifiTethering = require("./OutlineWifiTethering");

var _RoundWifiTethering = require("./RoundWifiTethering");

var _SharpWifiTethering = require("./SharpWifiTethering");

var _TwoToneWifiTethering = require("./TwoToneWifiTethering");

var WifiTethering =
/*#__PURE__*/
function WifiTethering(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWifiTethering.FilledWifiTethering, _OutlineWifiTethering.OutlineWifiTethering, _RoundWifiTethering.RoundWifiTethering, _SharpWifiTethering.SharpWifiTethering, _TwoToneWifiTethering.TwoToneWifiTethering);
};

exports.WifiTethering = WifiTethering;