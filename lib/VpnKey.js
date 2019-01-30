"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVpnKey = require("./FilledVpnKey");

var _OutlineVpnKey = require("./OutlineVpnKey");

var _RoundVpnKey = require("./RoundVpnKey");

var _SharpVpnKey = require("./SharpVpnKey");

var _TwoToneVpnKey = require("./TwoToneVpnKey");

var VpnKey =
/*#__PURE__*/
function VpnKey(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVpnKey.FilledVpnKey, _OutlineVpnKey.OutlineVpnKey, _RoundVpnKey.RoundVpnKey, _SharpVpnKey.SharpVpnKey, _TwoToneVpnKey.TwoToneVpnKey);
};

exports.VpnKey = VpnKey;