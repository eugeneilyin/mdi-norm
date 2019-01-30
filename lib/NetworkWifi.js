"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNetworkWifi = require("./FilledNetworkWifi");

var _OutlineNetworkWifi = require("./OutlineNetworkWifi");

var _RoundNetworkWifi = require("./RoundNetworkWifi");

var _SharpNetworkWifi = require("./SharpNetworkWifi");

var _TwoToneNetworkWifi = require("./TwoToneNetworkWifi");

var NetworkWifi =
/*#__PURE__*/
function NetworkWifi(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNetworkWifi.FilledNetworkWifi, _OutlineNetworkWifi.OutlineNetworkWifi, _RoundNetworkWifi.RoundNetworkWifi, _SharpNetworkWifi.SharpNetworkWifi, _TwoToneNetworkWifi.TwoToneNetworkWifi);
};

exports.NetworkWifi = NetworkWifi;