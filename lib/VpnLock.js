"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVpnLock = require("./FilledVpnLock");

var _OutlineVpnLock = require("./OutlineVpnLock");

var _RoundVpnLock = require("./RoundVpnLock");

var _SharpVpnLock = require("./SharpVpnLock");

var _TwoToneVpnLock = require("./TwoToneVpnLock");

var VpnLock =
/*#__PURE__*/
function VpnLock(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVpnLock.FilledVpnLock, _OutlineVpnLock.OutlineVpnLock, _RoundVpnLock.RoundVpnLock, _SharpVpnLock.SharpVpnLock, _TwoToneVpnLock.TwoToneVpnLock);
};

exports.VpnLock = VpnLock;